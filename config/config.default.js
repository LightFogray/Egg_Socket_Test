/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605760965016_7483';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['connection'],
        packetMiddleware: [],
      }
    },
  };
  config.mongoose = {
    client:{
       url: 'mongodb://127.0.0.1:27017/socket_test',
       options: {},
    }
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
