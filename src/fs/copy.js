import { join } from 'node:path';
import { cp } from 'node:fs/promises';

const copy = async () => {
	try {
		const srcFolder = join(import.meta.dirname, 'files');
		const newFolder = join(import.meta.dirname, 'files_copy');

		await cp(srcFolder, newFolder, {
			recursive: true,
			errorOnExist: true,
			force: false,
		});
	} catch {
		throw new Error('FS operation failed');
	}
};

await copy();
