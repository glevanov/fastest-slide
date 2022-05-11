import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { buildGraph } from '../src/graph';

import { graphA, graphB, graphC, graphD, parsedA, parsedB, parsedC, parsedD, reversedPyramid } from './fixtures';

test('buildGraph', () => {
	assert.type(buildGraph, 'function');

	// valid input
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

	// invalid input
	assert.throws(() => buildGraph(reversedPyramid));
});

test.run();
