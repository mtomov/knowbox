// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.

import { createConsumer } from '@rails/actioncable'
import { hostname } from 'scripts/popup/configuration'

export default createConsumer(hostname + '/cable')
