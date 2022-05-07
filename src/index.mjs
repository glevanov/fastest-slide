import { resolve } from 'node:path';

import { readFile } from './readFile.mjs';

const path = resolve('tests/fixtures/1.txt');

console.log(readFile(path));