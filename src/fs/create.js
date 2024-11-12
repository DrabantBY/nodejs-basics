import { join } from 'node:path';
import { writeFile } from 'node:fs/promises';

const create = async () => {
	const targetFile = join(import.meta.dirname, 'files', 'fresh.txt');

	try {
		await writeFile(targetFile, 'I am fresh and young', { flag: 'wx' });
	} catch {
		throw new Error('FS operation failed');
	}
};

await create();
