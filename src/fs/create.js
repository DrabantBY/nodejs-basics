import { join } from 'node:path';
import { writeFile } from 'node:fs/promises';

const create = async () => {
	try {
		const targetFile = join(import.meta.dirname, 'files', 'fresh.txt');

		await writeFile(targetFile, 'I am fresh and young', { flag: 'wx' });
	} catch {
		throw new Error('FS operation failed');
	}
};

await create();
