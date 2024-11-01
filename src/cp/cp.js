import { join } from 'node:path';
import { fork } from 'node:child_process';

const spawnChildProcess = async (...args) => {
	const file = join(import.meta.dirname, 'files', 'script.js');
	fork(file, args);
};

spawnChildProcess('Rolling', 'Scope', 'School');
