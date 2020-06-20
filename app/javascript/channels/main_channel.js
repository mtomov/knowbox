import CableReady from 'cable_ready'
import consumer from './consumer'

consumer.subscriptions.create('MainChannel', {
  connected() {
    console.log('websocket connected!')
  },

  disconnected() {
    console.log('websocket disconnected!')
  },

  received(data) {
    console.log('data ', data)
    if (data.cableReady) CableReady.perform(data.operations)
  },
})
