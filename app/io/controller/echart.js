'use strict';

const Controller = require('egg').Controller;

class EchartController extends Controller {
  async index() {
    const { ctx } = this;
    //只查询heat和keywords
    const data = await this.ctx.model.Heat.find({}, { heat: 1, keywords: 1 });
    ctx.socket.emit('getEchart',data);
    }
}

module.exports = EchartController;
