import { join } from 'node:path';
import { cp, access } from 'node:fs/promises';

const copy = async () => {
	try {
		const newFolder = join(import.meta.dirname, 'files_copy');

		await access(newFolder);

		throw new Error('FS operation failed');
	} catch (err) {
		if (err.code === 'ENOENT') {
			try {
				const srcFolder = join(import.meta.dirname, 'files');
				const newFolder = join(import.meta.dirname, 'files_copy');

				await cp(srcFolder, newFolder, {
					recursive: true,
				});
			} catch {
				throw new Error('FS operation failed');
			}
		} else {
			throw err;
		}
	}
};

await copy();
