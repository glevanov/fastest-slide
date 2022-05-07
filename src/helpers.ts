import { readFileSync } from 'node:fs';

export const readFile = (path: string): string[] => {
	const data = readFileSync(path, 'utf8');
	const lines = data.split(/\r?\n/);

	return lines;
};

export class IdProvider {
	id = 0;

	getNext() {
		this.id = this.id + 1;
		return this.id;
	}
}
