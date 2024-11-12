import { join } from 'node:path';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
	const file = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');

	const readStream = createReadStream(file);

	const hash = createHash('sha256');

	readStream.pipe(hash).on('finish', () => console.log(hash.digest('hex')));
};

await calculateHash();
