import { readFile } from 'node:fs/promises';
import getFilePath from '../utils/getFilePath.js';

const read = async () => {
	try {
		const targetFile = getFilePath(import.meta.url, 'files/fileToRead.txt');

		const text = await readFile(targetFile, { encoding: 'utf8' });

		console.log(text);
	} catch {
		throw new Error('FS operation failed');
	}
};

await read();
