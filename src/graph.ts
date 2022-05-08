import { IdProvider } from './helpers';

interface GraphNode {
	id: number
	weight: number
	connections: number[] | null
}

type Graph = Record<number, GraphNode>;

type ParsedNode = Pick<GraphNode, 'id' | 'weight'>;

export const parseLines = (lines: string[]): ParsedNode[][] => {
	const idProvider = new IdProvider();
	const [, ...layers] = lines;
	return layers
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
