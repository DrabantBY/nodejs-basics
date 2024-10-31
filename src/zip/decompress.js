import { join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
	const unzipFile = join(import.meta.dirname, 'files', 'fileToCompress.txt');
	const zipFile = join(import.meta.dirname, 'files', 'archive.gz');

	const readStream = createReadStream(zipFile);
	const unzipStream = createUnzip();
	const writeStream = createWriteStream(unzipFile);

	readStream.pipe(unzipStream).pipe(writeStream);
};

await decompress();
