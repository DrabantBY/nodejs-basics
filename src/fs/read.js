import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

const read = async () => {
	try {
		const targetFile = join(import.meta.dirname, 'files', 'fileToRead.txt');

		const text = await readFile(targetFile, { encoding: 'utf8' });

		console.log(text);
	} catch {
		throw new Error('FS operation failed');
	}
};

await read();
