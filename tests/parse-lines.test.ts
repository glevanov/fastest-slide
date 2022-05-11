import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { parseLines } from '../src/graph';
import { fixtureFileReader } from '../src/helpers';

import { parsedA, parsedB, parsedC, parsedD, parsedExtraLines } from './fixtures';

const readFixture = fixtureFileReader('tests/fixtures');
const inputA = readFixture('a.txt');
const inputB = readFixture('b.txt');
const inputC = readFixture('c.txt');
const inputD = readFixture('d.txt');
const extraLinesInput = readFixture('extra-lines.txt');

test('parseLines', () => {
	assert.type(parseLines, 'function');

	// regular input
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

	// invalid input
	assert.snapshot(
		JSON.stringify(parseLines(extraLinesInput)),
		JSON.stringify(parsedExtraLines),
	);
});

test.run();
