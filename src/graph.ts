import { Graph, ParsedNode } from '../types';

import { IdProvider } from './helpers';

export const parseLines = (lines: string[]): ParsedNode[][] => {
	const idProvider = new IdProvider();
	const [length, ...layers] = lines;
	// console.log(layers.slice(0, Number(length)));
	return layers.slice(0, Number(length))
		.map((layer) => layer.split(' ')
			.map((weight) => ({
				id: idProvider.getNext(),
				weight: Number(weight),
			})));
};

export const buildGraph = (layers: ParsedNode[][]): Graph => {
	const graph: Record<number, Record<number, number>> = {};
	graph[0] = { [layers[0][0].id]: layers[0][0].weight };
	layers.forEach((layer, layerIndex) => {
		layer.forEach((node, nodeIndex) => {
			const isLastLayer = layerIndex === layers.length - 1;
			const nextLayer = layers[layerIndex + 1];
			graph[node.id] = isLastLayer ? {} : {
				[nextLayer[nodeIndex].id]: nextLayer[nodeIndex].weight,
				[nextLayer[nodeIndex + 1].id]: nextLayer[nodeIndex + 1].weight,
			};
		});
	});
	return graph;
};
