import { join } from 'node:path';
import { readdir } from 'node:fs/promises';

const list = async () => {
	const folder = join(import.meta.dirname, 'files');

	try {
		const files = await readdir(folder);

		console.table(files);
	} catch {
		throw new Error('FS operation failed');
	}
};

await list();
