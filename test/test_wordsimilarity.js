import { describe, it } from 'mocha'
import { expect } from 'chai'

import { wordsimilarity } from '../src/wordsimilarity'

describe('word similarity', () => {
    it('should be 1 for same sets', () => {
        let similarity = wordsimilarity(['basket'], ['basket'])
        expect(similarity).to.equal(1)
    })

    it('should be 0 for dissimilar sets', () => {
        let similarity = wordsimilarity(['basket'], ['tennis', 'table'])
        expect(similarity).to.equal(0)
    })

    it('should be less than 1 for same sets in different orders', () => {
        let similarity = wordsimilarity(['usa', 'basket'], ['basket', 'usa'])
        expect(similarity).to.be.within(0.5, 1)
    })

    it('should be greater than 0 for distant sets', () => {
        let similarity = wordsimilarity(['obi', 'wan', 'kenobi', 'jedi'], ['anakin', 'skywalker'])
        expect(similarity).to.be.above(0)
    })
})
