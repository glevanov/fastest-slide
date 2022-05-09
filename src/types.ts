export interface GraphNode {
	id: number
	weight: number
	connections: number[] | null
}

export type Graph = Record<number, GraphNode>;

export type ParsedNode = Pick<GraphNode, 'id' | 'weight'>;