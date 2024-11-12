import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

const read = async () => {
	const targetFile = join(import.meta.dirname, 'files', 'fileToRead.txt');

	try {
		const text = await readFile(targetFile, { encoding: 'utf8' });
		console.log(text);
	} catch {
		throw new Error('FS operation failed');
	}
};

await read();
