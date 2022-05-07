import { readFileSync } from 'node:fs';

/**
 * Reads a file and returns its contents line by line
 * @param path {string}
 * @returns {string[]}
 */
export const readFile = (path) => {
	const data = readFileSync(path, 'UTF-8');
	const lines = data.split(/\r?\n/);

	return lines;
};

/**
 * Provides new IDs by incrementing counter
 */
export class IdProvider {
	/**
     * ID counter
     * @private
     * @type {number}
     */
	id = 0;

	/**
     * Get next ID value
     * @returns {number}
     */
	getNext() {
		this.id = this.id + 1;
		return this.id;
	}
}
