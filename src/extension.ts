import * as vscode from 'vscode';
import createJSComponent from './commands/createJSComponent';
import createNativeComponent from './commands/createNativeComponent';

export function activate(context: vscode.ExtensionContext) {

	let jsDisposable = vscode.commands.registerCommand('create-shm-js-component', createJSComponent);

	let nativeDisposable = vscode.commands.registerCommand('create-shm-native-component', createNativeComponent);

	context.subscriptions.push(jsDisposable);
	context.subscriptions.push(nativeDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
