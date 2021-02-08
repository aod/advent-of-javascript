# advent-of-javascript

Advent of Code solutions written in JavaScript using Node.

# Usage

Install dependencies:

```
npm install --production
```

Run a solution with [aoc-runner](https://github.com/aod/aoc-runner.js):

```
npx aoc-runner [-v] date[:excludeDate] [repeat_amount_per_solution=1]

Example usage:
  npx aoc-runner .7,8.                -> 2015,2016,2017,2018.7,8.1,2
  npx aoc-runner 2015,2018.1-7.2      -> 2015,2018.1,2,3,4,5,6,7.2
  npx aoc-runner 2015-2017.1-5.:.2-3. -> 2015,2016,2017.1,4,5.1,2
```

# Development

Install dev-depdencies:

```
npm install --only=dev
```

Run tests:

```
npm test
```

Format code:

```
npm run prettier
```
