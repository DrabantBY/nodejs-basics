import { rm } from 'node:fs/promises';
import getFilePath from '../utils/getFilePath.js';

const remove = async () => {
	try {
		const file = getFilePath(import.meta.url, 'files/fileToRemove.txt');

		await rm(file);
	} catch {
		throw new Error('FS operation failed');
	}
};

await remove();
