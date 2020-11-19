'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { io } = app;

  router.get('/', controller.home.index);
  
    io.of('/').route('echart', io.controller.echart.index)
};
