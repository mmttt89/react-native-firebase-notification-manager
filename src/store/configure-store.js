const DEV = 'pro';

if (DEV === 'pro') {
  module.exports = require('./configure-store.prod')
} else {
  module.exports = require('./configure-store.dev')
}
