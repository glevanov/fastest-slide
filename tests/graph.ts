import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { parseLines } from '../src/graph';

import { firstParsed } from './fixtures/1-parsed';
import { secondParsed } from './fixtures/2-parsed';
import { thirdParsed } from './fixtures/3-parsed';

const readFixture = (filename: string) => {
	const data = readFileSync(resolve('tests/fixtures', filename), 'utf-8');
	return data.split(/\r?\n/);
};
const firstInput = readFixture('1.txt');
const secondInput = readFixture('2.txt');
const thirdInput = readFixture('3.txt');

test('Input parser', () => {
	assert.type(parseLines, 'function');
	// assert.is fails for some reason
	assert.snapshot(JSON.stringify(parseLines(firstInput)), JSON.stringify(firstParsed));
	assert.snapshot(JSON.stringify(parseLines(secondInput)), JSON.stringify(secondParsed));
	assert.snapshot(JSON.stringify(parseLines(thirdInput)), JSON.stringify(thirdParsed));
});

test.run();