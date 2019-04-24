'use strict'

const {encode, isFunction} = require('./helpers')

module.exports = class Rewards {
  constructor (client) {
    this.client = client
  }

  list (params, callback) {
    if (isFunction(params)) {
      callback = params
      params = {}
    }

    return this.client.get('/rewards', params, callback)
  }

  create (reward, callback) {
    return this.client.post('/rewards', reward, callback)
  }

  get (rewardId, callback) {
    return this.client.get(`/rewards/${encode(rewardId)}`, callback)
  }
}
