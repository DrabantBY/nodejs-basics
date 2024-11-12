import { join } from 'node:path';
import { rename as renameFile, access } from 'node:fs/promises';

const rename = async () => {
	const newFile = join(import.meta.dirname, 'files', 'properFilename.md');
	const oldFile = join(import.meta.dirname, 'files', 'wrongFilename.txt');

	try {
		await access(newFile);
		throw new Error('FS operation failed');
	} catch (err) {
		if (err.code === 'ENOENT') {
			try {
				await renameFile(oldFile, newFile);
			} catch {
				throw new Error('FS operation failed');
			}
		} else {
			throw err;
		}
	}
};

await rename();
