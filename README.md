# Fastest Slide

### Problem
Find the lowest cost to traverse a pyramid from the top to the bottom.
```
1
2 3
4 5 6
7 8 9 10
```

Each node is connected to two nodes below, i.e.:
```
1: 2, 3
2: 4, 5
3: 5, 6
```

The expected output for this pyramid is `14`.

### Usage
1. Install dependecies

```bash
npm i
```

2. Pipe `stdin` to `src/index.ts` to receive output. Examples can be found in `tests/fixtures/*.txt`.

```bash
cat tests/fixtures/a.txt | ts-node src/index.ts
```
