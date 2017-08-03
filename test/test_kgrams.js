import { describe, it } from 'mocha'
import { expect } from 'chai'

import { kgrams } from '../src/kgrams'

describe('kgrams', () => {
    it('should return 2-grams of a string', () => {
        let twograms = kgrams('obiwankenobi', 2)
        expect(twograms).to.deep.equal(['ob', 'bi', 'iw', 'wa', 'an', 'nk', 'ke', 'en', 'no', 'ob', 'bi'])
    })

    it('should return 3-grams of a string', () => {
        let twograms = kgrams('obiwankenobi', 3)
        expect(twograms).to.deep.equal(['obi', 'biw', 'iwa', 'wan', 'ank', 'nke', 'ken', 'eno', 'nob', 'obi'])
    })

    it('should return 4-grams of a string', () => {
        let twograms = kgrams('obiwankenobi', 4)
        expect(twograms).to.deep.equal(['obiw', 'biwa', 'iwan', 'wank', 'anke', 'nken', 'keno', 'enob', 'nobi'])
    })

    it('should return empty array on empty string', () => {
        let twograms = kgrams('', 2)
        expect(twograms).to.deep.equal([])
    })

    it('should return empty array when string is too short', () => {
        let twograms = kgrams('a', 2)
        expect(twograms).to.deep.equal([])
    })
})
