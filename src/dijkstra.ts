import { Graph } from '../types';

type Costs = Record<number, number>;

const lowestCostNode = (costs: Costs, processed: number[]): number | null => {
	return Object.keys(costs).reduce<null | number>((lowest, nodeKey) => {
		const node = Number(nodeKey);
		if (lowest === null || costs[node] < costs[lowest]) {
			if (!processed.includes(node)) {
				lowest = node;
			}
		}
		return lowest;
	}, null);
};

export const dijkstra = (graph: Graph, last: number[]) => {
	const costs: Record<number, number> = {
		...graph[0],
		...(last.reduce((acc, curr) => {
			return {
				...acc,
				[curr]: Infinity,
			};
		}, {})),
	};

	const parents: Record<number, number | null> = { ...(last.reduce((acc, curr) => {
		return {
			...acc,
			[curr]: null,
		};
	}, {})) };

	for (const child in graph[0]) {
		parents[child] = 0;
	}

	const processed: number[] = [];

	let node = lowestCostNode(costs, processed);

	while (node) {
		const cost = costs[node];
		const children = graph[node];
		for (const n in children) {
			const newCost = cost + children[n];
			if (!costs[n] || costs[n] > newCost) {
				costs[n] = newCost;
				parents[n] = node;
			}
		}
		processed.push(node);
		node = lowestCostNode(costs, processed);
	}

	const endNodesCosts = last.map((id) => [id, costs[id]])
		.sort(([,firstCost], [,secondCost]) => firstCost - secondCost);

	const [optimalId, optimalCost] = endNodesCosts[0];

	const optimalPath = [optimalId];
	let parent = parents[optimalId];
	while (parent) {
		optimalPath.unshift(parent);
		parent = parents[parent];
	}

	return {
		optimalCost,
		optimalPath,
	};
};