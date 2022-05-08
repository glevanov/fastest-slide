import { createInterface } from 'node:readline';

import { parseLines, makeGraph } from './graph';

const readline = createInterface({
	input: process.stdin,
});

const lines: string[] = [];

readline.on('line', (line) => lines.push(line));

readline.on('close', () => {
	const parsed = parseLines(lines);
	const graph = makeGraph(parsed);
	console.log(graph);
});
