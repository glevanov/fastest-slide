import { resolve } from 'node:path';

import { IdProvider, readFile } from './helpers.mjs';

const path = resolve('tests/fixtures/1.txt');

/**
 *
 * @param lines {string[]}
 * @returns {{layers: number[], layersNumber: number}}
 */
const parseLines = (lines) => {
	const [layersNumber, ...layers] = lines;
	const parsedLayers = layers.map((layer) => layer.split(' ').map(Number));
	return {
		layersNumber: Number(layersNumber),
		layers: parsedLayers,
	};
};

/**
 * @typedef GraphNode
 * @type {object}
 * @property {number} weight
 * @property {number[]} connections
 */

/**
 * @typedef Graph
 * @type {Object.<number,GraphNode>}
 */

/**
 * @param layers {number[]}
 * @returns {Graph}
 */
const makeGraph = (layers) => {
	const idProvider = new IdProvider();
	const graph = {};
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
const graph = makeGraph(parsed.layers)
console.log(graph);