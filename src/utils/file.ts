import * as fs from 'fs';

export const checkFileExist = (path: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.stat(path, (err: NodeJS.ErrnoException | null, stats: fs.Stats): void => {
			if (err) {
				resolve();
			}
			reject(`Folder ${path} is exit`);
		});
	});
};

export const createFolder = (path: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.mkdir(path, (err: NodeJS.ErrnoException | null): void => {
			if (err) {
				reject('can not create folder');
			}
			resolve();
		});
	});
};

export const writeFile = (path: string, content: string): Promise<void> => {
	return new Promise((resolve, rejects) => {
		const data = new Uint8Array(Buffer.from(content));
		fs.writeFile(path, data, (err: NodeJS.ErrnoException | null): void => {
			if (err) {
				rejects(`can not create file ${path}`);
			}
			resolve();
		});
	});
};
