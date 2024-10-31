import { Transform } from 'node:stream';

const transform = async () => {
	const transformStream = new Transform({
		transform(data, _, callback) {
			const dataReversed = data.toString().split('').reverse().join('');

			this.push(dataReversed + '\n');

			callback();
		},
	});

	process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
