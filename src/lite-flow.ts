export const parseLinesLite = (lines: string[]): number[][] => {
	const [length, ...layers] = lines;
	return layers.slice(0, Number(length))
		.map((layer) => layer.split(' ')
			.map((weight) => Number(weight)));
};

export const solveForLite = (parsed: number[][]) => {
	const reversed = parsed.reverse();
	const reducer = (acc: number[], current: number[]) => {
		const traversalCosts = current.map((el, index) => {
			const minUpwardTraversalCost = Math.min(acc[index], acc[index + 1]);
			return minUpwardTraversalCost + el;
		});
		return traversalCosts;
	};
	const traversalCosts = reversed.reduce(reducer, reversed.shift() ?? []);
	return traversalCosts.pop();
};
