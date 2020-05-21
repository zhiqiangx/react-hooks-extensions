import * as vscode from 'vscode';
import { checkFileExist, createFolder, writeFile } from '../utils/file';

const createNativeComponent = async (uri: vscode.Uri) => {
    const name = await vscode.window.showInputBox({
        placeHolder: 'Input the name of new component.'
    });
    if (name) {
        try {
            const folderPath = `${uri.fsPath}/${name}`;
            await checkFileExist(folderPath);
            await createFolder(folderPath);
            const styles = `import { StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({});\n\nexport default styles;\n`;
            await writeFile(`${folderPath}/styles.ts`, styles);
            const content = `import React, { FunctionComponent } from \'react\';\nimport { View } from 'react-native';\nimport styles from './styles';\n\nconst ${name}: FunctionComponent = () => <View></View>;\n\nexport default ${name};\n`;
            await writeFile(`${folderPath}/index.tsx`, content);
            const indexUri = vscode.Uri.joinPath(uri, name + '/index.tsx');
            vscode.workspace.openTextDocument(indexUri).then((a: vscode.TextDocument) => {
                vscode.window.showTextDocument(a, 1, false);
            });
        } catch (err) {
            vscode.window.showErrorMessage(err.message);
        };
    }
};

export default createNativeComponent;
