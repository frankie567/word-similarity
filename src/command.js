/* Command line script to test word similarity algorithm */
import argv from 'yargs'

import { wordsimilarity } from './wordsimilarity'

/* Define usage */
let options = argv
    .usage('Usage: $0 -a [word] -a [word] -b [word]')
    .example('$0 -a usa -a basket -b basket -b usa', 'compute the similarity between [usa, basket] and [basket, usa]')
    .demandOption(['a', 'b'])
    .array('a')
    .array('b')
    .argv

process.stdout.write(wordsimilarity(options.a, options.b).toString() + '\n')
