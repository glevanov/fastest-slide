import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export class IdProvider {
	private id = 0;

	public getNext() {
		this.id = this.id + 1;
		return this.id;
	}
}

export const fixtureFileReader = (basePath: string) => (filename: string) => {
	const data = readFileSync(resolve(basePath, filename), 'utf-8');
	return data.split(/\r?\n/);
};