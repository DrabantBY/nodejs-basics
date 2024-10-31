import { join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
	const unzipFile = join(import.meta.dirname, 'files', 'fileToCompress.txt');
	const zipFile = join(import.meta.dirname, 'files', 'archive.gz');

	const readStream = createReadStream(unzipFile);
	const gzipStream = createGzip();
	const writeStream = createWriteStream(zipFile);

	readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
