'use strict';

module.exports = {
  extends: [
    require.resolve('./es'),
    'plugin:node/recommended',
  ],
  env: {
    node: true,
  },
};
