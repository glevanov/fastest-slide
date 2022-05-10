import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { parseLines } from '../src/graph';
import { fixtureFileReader } from '../src/helpers';

import parsedA from './fixtures/a-parsed.json';
import parsedB from './fixtures/b-parsed.json';
import parsedC from './fixtures/c-parsed.json';
import parsedD from './fixtures/d-parsed.json';

const readFixture = fixtureFileReader('tests/fixtures');
const inputA = readFixture('a.txt');
const inputB = readFixture('b.txt');
const inputC = readFixture('c.txt');
const inputD = readFixture('d.txt');

test('Input parser', () => {
	assert.type(parseLines, 'function');
	assert.snapshot(
		JSON.stringify(parseLines(inputA)),
		JSON.stringify(parsedA),
	);
	assert.snapshot(
		JSON.stringify(parseLines(inputB)),
		JSON.stringify(parsedB),
	);
	assert.snapshot(
		JSON.stringify(parseLines(inputC)),
		JSON.stringify(parsedC),
	);
	assert.snapshot(
		JSON.stringify(parseLines(inputD)),
		JSON.stringify(parsedD),
	);
});

test.run();