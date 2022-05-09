import { IdProvider } from './helpers';
import { Graph, ParsedNode } from './types';

export const parseLines = (lines: string[]): ParsedNode[][] => {
	const idProvider = new IdProvider();
	const [length, ...layers] = lines;
	return layers.slice(0, Number(length))
		.map((layer) => layer.split(' ')
			.map((weight) => ({
				id: idProvider.getNext(),
				weight: Number(weight),
			})));
};

export const makeGraph = (layers: ParsedNode[][]): Graph => {
	const graph: Graph = {};
	layers.forEach((layer, layerIndex) => {
		layer.forEach((node, nodeIndex) => {
			const isLastLayer = layerIndex === layers.length - 1;
			const nextLayer = layers[layerIndex + 1];
			const connections = isLastLayer ? null : [nextLayer[nodeIndex].id, nextLayer[nodeIndex + 1].id];
			graph[node.id] = {
				...node,
				connections: connections,
			};
		});
	});
	return graph;
};

export const makeGraphTheirWay = (layers: ParsedNode[][]) => {
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
