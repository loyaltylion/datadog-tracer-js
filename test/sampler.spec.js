'use strict'
const Sampler = require('../src/sampler')

describe('Sampler', () => {
  describe('With no sample rate', () => {
    const sampler = new Sampler()
    it('should always sample', () => {
      expect(sampler.isSampled()).to.be.true
    })
  })

  describe('When a sample rate is provided', () => {
    const sampleRate = 0.5

    it('samples proportionally', () => {
      const sampler = new Sampler(sampleRate)
      const observations = 10000
      const sampleCount = Array(observations)
        .fill(0)
        .map(() => sampler.isSampled())
        .filter(sampled => sampled).length
      expect(sampleCount).to.be.closeTo(sampleRate * observations, 100)
    })
  })
})
