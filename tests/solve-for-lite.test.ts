import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { solveForLite } from '../src/lite-flow';

import { parsedALite, parsedBLite, parsedCLite, parsedDLite } from './fixtures';

const solutionA = 14;
const solutionB = 16;
const solutionC = 447;
const solutionD = 12;

test('solveForLite', () => {
	assert.type(solveForLite, 'function');

	assert.equal(solveForLite(parsedALite), solutionA);
	assert.equal(solveForLite(parsedBLite), solutionB);
	assert.equal(solveForLite(parsedCLite), solutionC);
	assert.equal(solveForLite(parsedDLite), solutionD);
});

test.run();
