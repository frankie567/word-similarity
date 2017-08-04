# Word similarity

[![Build Status](https://travis-ci.org/frankie567/word-similarity.svg?branch=master)](https://travis-ci.org/frankie567/word-similarity)

Utility written in JS to compute proximity factor between two sets of words.

## Algorithm

The algorithm is quite simple:
* First, implode each sets `A` and `B` into single strings `Sa` and `Sb`;
* Compute the k-grams for `Sa` and `Sb`, respectively `kSa` and `kSb`;
* Return the Jaccard coefficient: `| kSa ∩ kSb | / | kSa ∪ kSb |`

Example with `A = [usa, basket]` and `B = [basket, usa]` and `k = 2`:
* `Sa = usabasket` and `Sb = basketusa`
* `kSa = [us, sa, ab, ba, as, sk, ke, et]` and `kSa = [ba, as, sk, ke, et, tu, us, sa]`
* `| kSa ∩ kSb | = 7`, `| kSa ∪ kSb | = 9`, so similarity is `0.7777777777777778

## Installation

Install the dependencies and build:

```
npm install && npm run build
```

## Usage

A command-line script is provided to test the algorithm quickly:

```
node dist/command.js -a [word] -a [word] -b [word] -b [word] -b [word]
```

Each `word` after an `-a` option will be appended to to the first set of words, each `word` after a `-b` option will be appended to the second set of words.

Optionaly, you can provide the parameter `k`, the length of the k-grams (**default to 2**) :

```
node dist/command.js -a [word] -a [word] -b [word] -b [word] -b [word] -k 3
```

## Examples

```
node dist/command.js -a basket -b basket
# 1
```

```
node dist/command.js -a usa -a basket -b basket -b usa
# 0.7777777777777778
```

```
node dist/command.js -a basket -a usa -b basket -b ball -b usa
# 0.5833333333333334
```

```
node dist/command.js -a usa -a basket -b basket -b ball -b usa
# 0.5833333333333334
```