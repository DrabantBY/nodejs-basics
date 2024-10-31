import { join } from 'node:path';
import { rm } from 'node:fs/promises';

const remove = async () => {
	try {
		const file = join(import.meta.dirname, 'files', 'fileToRemove.txt');

		await rm(file);
	} catch {
		throw new Error('FS operation failed');
	}
};

await remove();
