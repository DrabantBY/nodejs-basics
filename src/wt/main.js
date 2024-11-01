import { join } from 'node:path';
import { availableParallelism } from 'node:os';
import { Worker } from 'node:worker_threads';

const createWorker = (file, workerData) =>
	new Promise((resolve) => {
		const worker = new Worker(file, { workerData });

		worker.on('message', (data) => {
			resolve({ status: 'resolved', data });
		});

		worker.on('error', () => {
			resolve({ status: 'error', data: null });
		});
	});

const performCalculations = async () => {
	const file = join(import.meta.dirname, 'worker.js');

	const length = availableParallelism();

	const workers = Array.from({ length }, (_, i) => createWorker(file, i + 10));

	const results = await Promise.all(workers);

	console.table(results);
};

await performCalculations();
