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
* `| kSa ∩ kSb | = 7`, `| kSa ∪ kSb | = 9`, so similarity is `0.7777777777777778`

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

### With 2-grams

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


### With 3-grams

```
node dist/command.js -a basket -b basket -k 3
# 1
```

```
node dist/command.js -a usa -a basket -b basket -b usa -k 3
# 0.5555555555555556
```

```
node dist/command.js -a basket -a usa -b basket -b ball -b usa -k 3
# 0.38461538461538464
```

```
node dist/command.js -a usa -a basket -b basket -b ball -b usa -k 3
# 0.38461538461538464
```

### Real-world examples (STS2016)

*abortion vote delayed amid debate irish politicians will spend a second day debating divisive laws that will legislate for the first time for abortion in limited circumstances*

*abortion bill second night of debating in the dail new irish politicians have begun a second night of debating divisive laws that will legislate for the first time for abortion in limited circumstances*

**With 2-grams**:

```
node dist/command.js -a abortion -a vote -a delayed -a amid -a debate -a irish -a politicians -a will -a spend -a a -a second -a day -a debating -a divisive -a laws -a that -a will -a legislate -a for -a the -a first -a time -a for -a abortion -a in -a limited -a circumstances -b abortion -b bill -b second -b night -b of -b debating -b in -b the -b dail -b new -b irish -b politicians -b have -b begun -b a -b second -b night -b of -b debating -b divisive -b laws -b that -b will -b legislate -b for -b the -b first -b time -b for -b abortion -b in -b limited -b circumstances -k 2
# 0.7027027027027027
```

**With 3-grams**:

```
node dist/command.js -a abortion -a vote -a delayed -a amid -a debate -a irish -a politicians -a will -a spend -a a -a second -a day -a debating -a divisive -a laws -a that -a will -a legislate -a for -a the -a first -a time -a for -a abortion -a in -a limited -a circumstances -b abortion -b bill -b second -b night -b of -b debating -b in -b the -b dail -b new -b irish -b politicians -b have -b begun -b a -b second -b night -b of -b debating -b divisive -b laws -b that -b will -b legislate -b for -b the -b first -b time -b for -b abortion -b in -b limited -b circumstances -k 3
# 0.608433734939759
```

---------------------------------------

*how should i store eggs in the refrigerator*

*how should i store steaks in the freezer*

**With 2-grams**:

```
node dist/command.js -a how -a should -a i -a store -a eggs -a in -a the -a refrigerator -b how -b should -b i -b store -b steaks -b in -b the -b freezer -k 2
# 0.5945945945945946
```

**With 3-grams**:

```
node dist/command.js -a how -a should -a i -a store -a eggs -a in -a the -a refrigerator -b how -b should -b i -b store -b steaks -b in -b the -b freezer -k 3
# 0.4222222222222222
```
