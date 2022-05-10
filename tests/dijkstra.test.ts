import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { dijkstra } from '../src/dijkstra';
import { buildGraph } from '../src/graph';
import { ParsedNode } from '../src/types';

import { parsedA, parsedB, parsedC, parsedD } from './fixtures';

const solutionA = { optimalCost: 14, optimalPath: [ 1, 2, 4, 7 ] };
const solutionB = { optimalCost: 16, optimalPath: [ 1, 3, 5, 8 ] };
const solutionC = {
	optimalCost: 447,
	optimalPath: [ 1, 2, 4, 7, 12, 17, 23, 31, 39, 49, 59, 70, 83, 97, 111 ],
};
const solutionD = { optimalCost: 12, optimalPath: [ 1, 3, 6, 9 ] };

const prepareData = (parsed: ParsedNode[][]) => {
	const lastIds = parsed[parsed.length - 1].map((node) => node.id);
	const graph = buildGraph(parsed);
	return { graph, lastIds };
};

const a = prepareData(parsedA as unknown as ParsedNode[][]);
const b = prepareData(parsedB as unknown as ParsedNode[][]);
const c = prepareData(parsedC as unknown as ParsedNode[][]);
const d = prepareData(parsedD as unknown as ParsedNode[][]);

test('Dijkstra', () => {
	assert.type(dijkstra, 'function');
	assert.snapshot(
		JSON.stringify(dijkstra(a.graph, a.lastIds)),
		JSON.stringify(solutionA),
	);
	assert.snapshot(
		JSON.stringify(dijkstra(b.graph, b.lastIds)),
		JSON.stringify(solutionB),
	);
	assert.snapshot(
		JSON.stringify(dijkstra(c.graph, c.lastIds)),
		JSON.stringify(solutionC),
	);
	assert.snapshot(
		JSON.stringify(dijkstra(d.graph, d.lastIds)),
		JSON.stringify(solutionD),
	);
});

test.run();