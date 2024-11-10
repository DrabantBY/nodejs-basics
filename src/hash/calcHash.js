import { join } from 'node:path';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
	const file = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');

	const input = createReadStream(file);

	const hash = createHash('sha256');

	// input.pipe(hash).setEncoding('hex').pipe(process.stdout);

	input.pipe(hash).on('finish', () => console.log(hash.digest('hex')));
};

await calculateHash();
