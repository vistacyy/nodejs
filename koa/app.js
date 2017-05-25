const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async(ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// 解析POST请求数据到ctx.request.body
app.use(bodyParser());

// 添加路由
app.use(controller());

app.listen(8000);
console.log('app started at port 8000...');