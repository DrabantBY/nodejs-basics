import { join } from 'node:path';
import { createReadStream } from 'node:fs';

const read = async () => {
	const file = join(import.meta.dirname, 'files', 'fileToRead.txt');

	const readStream = createReadStream(file);

	readStream.pipe(process.stdout);
};

await read();
