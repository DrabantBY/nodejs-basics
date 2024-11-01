import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import './files/c.js';

const random = Math.random();

const file = random > 0.5 ? './files/a.json' : './files/b.json';

const { default: unknownObject } = await import(file, {
	with: { type: 'json' },
});

const { filename, dirname } = import.meta;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
	res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
	console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
