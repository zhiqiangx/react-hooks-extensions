import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let jsDisposable = vscode.commands.registerCommand('create-shm-js-component', () => {
		vscode.window.showInformationMessage('Hello World from shm-js-component!');
	});

	let nativeDisposable = vscode.commands.registerCommand('create-shm-native-component', (uri: vscode.Uri) => {
		vscode.window.showInputBox({
			prompt: 'input component name'
		}).then((value) => {
			vscode.window.showInformationMessage(uri.path + value);
		});
	});

	context.subscriptions.push(jsDisposable);
	context.subscriptions.push(nativeDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
