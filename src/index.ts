import { createInterface } from 'node:readline';

import { parseLines, makeGraphTheirWay } from './graph';
import { dijkstra } from './dijkstra';

const readline = createInterface({
	input: process.stdin,
});

const lines: string[] = [];

readline.on('line', (line) => lines.push(line));

readline.on('close', () => {
	const parsed = parseLines(lines);
	const lastIds = parsed[parsed.length - 1].map((node) => node.id);

	const graph = makeGraphTheirWay(parsed);
	const result = dijkstra(graph, lastIds);

	console.log(result);
});
