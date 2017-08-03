import { intersection, union } from 'lodash'

import { kgrams } from './kgrams'

const wordsimilarity = (list1, list2, k=2) => {
    /* Implode the lists into a single string and get their k-grams */
    let kgrams1 = kgrams(list1.join(''), k)
    let kgrams2 = kgrams(list2.join(''), k)

    /* Compute Jaccard coefficient */
    return intersection(kgrams1, kgrams2).length / union(kgrams1, kgrams2).length
}

export {wordsimilarity}
