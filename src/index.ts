import { resolve } from 'node:path';

import { IdProvider, readFile } from './helpers';

const path = resolve('tests/fixtures/1.txt');

const parseLines = (lines: string[]) => {
	const [layersNumber, ...layers] = lines;
	const parsedLayers = layers.map((layer) => layer.split(' ').map(Number));
	return {
		layersNumber: Number(layersNumber),
		layers: parsedLayers,
	};
};

interface GraphNode {
	weight: number
	connections: number[] | null
}

type Graph = Record<number, GraphNode>;

const makeGraph = (layers: number[][]): Graph => {
	const idProvider = new IdProvider();
	const graph: Graph = {};
	layers.forEach((layer, layerIndex) => {
		layer.forEach((node, nodeIndex) => {
			const isLastLayer = layerIndex === layers.length - 1;
			const nextLayer = layers[layerIndex + 1];
			const connections = isLastLayer ? null : [nextLayer[nodeIndex], nextLayer[nodeIndex + 1]];
			graph[idProvider.getNext()] = {
				weight: node,
				connections,
			};
		});
	});
	return graph;
};

const parsed = parseLines(readFile(path));
const graph = makeGraph(parsed.layers);
console.log(graph);