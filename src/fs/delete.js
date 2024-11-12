import { join } from 'node:path';
import { rm } from 'node:fs/promises';

const remove = async () => {
	const file = join(import.meta.dirname, 'files', 'fileToRemove.txt');

	try {
		await rm(file);
	} catch {
		throw new Error('FS operation failed');
	}
};

await remove();
