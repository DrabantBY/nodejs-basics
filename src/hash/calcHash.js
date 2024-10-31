import { join } from 'node:path';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';

const calculateHash = async () => {
	const file = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');

	const input = createReadStream(file);

	const hash = createHash('sha256');

	await pipeline(input, hash);

	console.log(hash.digest('hex'));
};

await calculateHash();

//! input.pipe(hash).setEncoding('hex').pipe(process.stdout) do not work!
