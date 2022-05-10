export type GraphNode = Record<number, number>;

export type Graph = Record<number, GraphNode>;

export interface ParsedNode {
	id: number
	weight: number
}