import { readFileSync } from 'node:fs';

export const readFile = (path) => {
	const data = readFileSync(path, 'UTF-8');
	const lines = data.split(/\r?\n/);

	return lines;
};