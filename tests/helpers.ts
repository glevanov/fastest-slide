import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { IdProvider } from '../src/helpers';

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

test.run();