import { rename as renameFile } from 'node:fs/promises';
import getFilePath from '../utils/getFilePath.js';

const rename = async () => {
	try {
		const oldFile = getFilePath(import.meta.url, 'files/wrongFilename.txt');
		const newFile = getFilePath(import.meta.url, 'files/properFilename.md');

		await renameFile(oldFile, newFile);
	} catch {
		throw new Error('FS operation failed');
	}
};

await rename();
