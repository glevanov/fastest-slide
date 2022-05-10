import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { buildGraph, parseLines } from '../src/graph';
import { fixtureFileReader } from '../src/helpers';

import { graphA, graphB, graphC, graphD, parsedA, parsedB, parsedC, parsedD } from './fixtures';

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

test('buildGraph', () => {
	assert.type(buildGraph, 'function');
	assert.snapshot(
		JSON.stringify(buildGraph(parsedA)),
		JSON.stringify(graphA),
	);
	assert.snapshot(
		JSON.stringify(buildGraph(parsedB)),
		JSON.stringify(graphB),
	);
	assert.snapshot(
		JSON.stringify(buildGraph(parsedC)),
		JSON.stringify(graphC),
	);
	assert.snapshot(
		JSON.stringify(buildGraph(parsedD)),
		JSON.stringify(graphD),
	);
});

test.run();