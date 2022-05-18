import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { parseLinesLite } from '../src/lite-flow';
import { fixtureFileReader } from '../src/helpers';

import { parsedALite, parsedBLite, parsedCLite, parsedDLite, parsedExtraLinesLite } from './fixtures';

const readFixture = fixtureFileReader('tests/fixtures');
const inputA = readFixture('a.txt');
const inputB = readFixture('b.txt');
const inputC = readFixture('c.txt');
const inputD = readFixture('d.txt');
const extraLinesInput = readFixture('extra-lines.txt');

test('parseLinesLite', () => {
	assert.type(parseLinesLite, 'function');

	// regular input
	assert.snapshot(
		JSON.stringify(parseLinesLite(inputA)),
		JSON.stringify(parsedALite),
	);
	assert.snapshot(
		JSON.stringify(parseLinesLite(inputB)),
		JSON.stringify(parsedBLite),
	);
	assert.snapshot(
		JSON.stringify(parseLinesLite(inputC)),
		JSON.stringify(parsedCLite),
	);
	assert.snapshot(
		JSON.stringify(parseLinesLite(inputD)),
		JSON.stringify(parsedDLite),
	);

	// invalid input
	assert.snapshot(
		JSON.stringify(parseLinesLite(extraLinesInput)),
		JSON.stringify(parsedExtraLinesLite),
	);
});

test.run();
