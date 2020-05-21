import * as vscode from 'vscode';
import createJSComponent from './commands/createJSComponent';

export function activate(context: vscode.ExtensionContext) {

	let jsDisposable = vscode.commands.registerCommand('create-shm-js-component', () => {
		vscode.window.showInformationMessage('Hello World from shm-js-component!');
	});

	let nativeDisposable = vscode.commands.registerCommand('create-shm-native-component', createJSComponent);

	context.subscriptions.push(jsDisposable);
	context.subscriptions.push(nativeDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
