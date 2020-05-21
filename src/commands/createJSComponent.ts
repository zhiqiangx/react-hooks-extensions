import * as vscode from 'vscode';
import { checkFileExist } from '../utils/file';

const createJSComponent = async (uri: vscode.Uri) => {
    const name = await vscode.window.showInputBox({
        placeHolder: 'Input the name of new component.'
    });
    if (name) {
        try {
            const folderPath = `${uri.fsPath}/${name}`;
            console.log('ddd', await checkFileExist(folderPath));
        } catch (err) {
            console.log('err', err);
            vscode.window.showErrorMessage(err.message);
        };
    }
};

export default createJSComponent;
