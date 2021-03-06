import * as vscode from 'vscode';
import { checkFileExist, createFolder, writeFile } from '../utils/file';

const createJSComponent = async (uri: vscode.Uri) => {
    const name = await vscode.window.showInputBox({
        placeHolder: 'Input the name of new component.'
    });
    if (name) {
        try {
            const folderPath = `${uri.fsPath}/${name}`;
            await checkFileExist(folderPath);
            await createFolder(folderPath);
            await writeFile(`${folderPath}/styles.css`, '');
            const content = `import React, { FunctionComponent } from \'react\';\nimport styles from './styles.css';\n\nconst ${name}: FunctionComponent = () => <div></div>;\n\nexport default ${name};\n`;
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

export default createJSComponent;
