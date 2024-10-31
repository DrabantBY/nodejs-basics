import { join } from 'node:path';
import { rename as renameFile } from 'node:fs/promises';

const rename = async () => {
	try {
		const oldFile = join(import.meta.dirname, 'files/wrongFilename.txt');
		const newFile = join(import.meta.dirname, 'files/properFilename.md');

		await renameFile(oldFile, newFile);
	} catch {
		throw new Error('FS operation failed');
	}
};

await rename();
