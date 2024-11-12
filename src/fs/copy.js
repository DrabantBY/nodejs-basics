import { join } from 'node:path';
import { cp, access } from 'node:fs/promises';

const copy = async () => {
	const srcFolder = join(import.meta.dirname, 'files');
	const newFolder = join(import.meta.dirname, 'files_copy');

	try {
		await access(newFolder);
		throw new Error('FS operation failed');
	} catch (err) {
		if (err.code === 'ENOENT') {
			try {
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
