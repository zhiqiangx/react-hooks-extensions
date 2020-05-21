import * as fs from 'fs';

export const checkFileExist = (path: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.stat(path, (err: NodeJS.ErrnoException | null, stats: fs.Stats): void => {
			console.log('err', err);
			console.log('stats', stats);
			if (err) {
				resolve();
			}
			reject(`Folder ${path} is exit`);
		});
	});
};

export const createFolder = (path: string): Promise<boolean> => {
	return new Promise((resolve, reject) => {
		fs.mkdir(path, (err: NodeJS.ErrnoException | null): void => {
			if (err) {
				reject('can not create folder');
			}
			resolve(true);
		});
	});
};