import { createInterface } from 'node:readline';

import { parseLines, buildGraph } from './graph';
import { parseLinesLite, solveForLite } from './lite-flow';
import { dijkstra } from './dijkstra';

const readline = createInterface({
	input: process.stdin,
});

const lines: string[] = [];

readline.on('line', (line) => lines.push(line));

// implements a more universal dijkstra algorithm
const generalFlow = () => {
	const parsed = parseLines(lines);
	const lastIds = parsed[parsed.length - 1].map((node) => node.id);

	const graph = buildGraph(parsed);
	const result = dijkstra(graph, lastIds);

	console.log(result);
};

// implements a shorter & lighter solution specific to pyramid data structure
const liteFlow = () => {
	const parsed = parseLinesLite(lines);
	const result = solveForLite(parsed);
	console.log(result);
};

readline.on('close', () => {
	liteFlow();
});
