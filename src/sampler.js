'use strict'

class DatadogSampler {
  constructor(rate) {
    if (!rate) {
      rate = 1.0
    }
    this.rate = rate
  }

  isSampled(span) {
    return Math.random() <= this.rate
  }
}

module.exports = DatadogSampler
