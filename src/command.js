/* Command line script to test word similarity algorithm */
import argv from 'yargs'

import { wordsimilarity } from './wordsimilarity'

/* Define usage */
let options = argv
    .usage('Usage: $0 -a [word] -a [word] -b [word] -k [num]')
    .example('$0 -a usa -a basket -b basket -b usa -k 2', 'compute the similarity between [usa, basket] and [basket, usa] with 2-grams')
    .options({
        'a': {
            describe: 'First word set',
            type: 'array',
            demandOption: true
        }
    })
    .options({
        'b': {
            describe: 'Second word set',
            type: 'array',
            demandOption: true
        }
    })
    .options({
        'k': {
            describe: 'Length of k-grams. Default 2.',
            type: 'number',
            demandOption: false
        }
    })
    .help()
    .argv

process.stdout.write(wordsimilarity(options.a, options.b, options.k ? options.k : 2).toString() + '\n')
