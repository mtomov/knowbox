// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.

import { createConsumer } from '@rails/actioncable'
import { hostname } from '../../../extension/source/scripts/popup/configuration'

console.log('document.cookie ', document.cookie)

export default createConsumer(hostname + '/cable')
