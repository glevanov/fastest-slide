import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { fixtureFileReader, IdProvider } from '../src/helpers';

test('ID Provider', () => {
	const idProvider = new IdProvider();
	assert.type(idProvider.getNext, 'function');
	let id: number;
	id = idProvider.getNext();
	assert.is(id, 1);
	id = idProvider.getNext();
	assert.is(id, 2);
	id = idProvider.getNext();
	assert.is(id, 3);
});

test('fixtureFileReader', () => {
	assert.type(fixtureFileReader, 'function');
	const reader = fixtureFileReader('tests/fixtures');
	assert.snapshot(
		JSON.stringify(reader('a.txt')),
		JSON.stringify([ '4', '1', '2 3', '4 5 6', '7 8 9 10' ]),
	);
	assert.snapshot(
		JSON.stringify(reader('d.txt')),
		JSON.stringify([ '4', '3', '3 3', '4 11 4', '88 8 2 10' ]),
	);
});

test.run();