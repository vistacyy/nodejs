const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  var start = new Date().getTime(),
      execTime;
  await next();
  execTime = new Date().getTime() - start;
  console.log(`Process ${ctx.request.method} ${ctx.request.url},用时： ${execTime}`);
  // ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// 处理static目录文件的请求
if (!isProduction) {
  let staticFiles = require('./static-files');
  app.use(staticFiles('/static/', __dirname + '/static'));
}

// 处理POST请求
app.use(bodyParser());

// add nunjucks as view:
app.use(templating('views', {
  noCache: !isProduction,
  watch: !isProduction
}));

// add controller:
app.use(controller());

app.listen(8000);
console.log('app started at port 8000...');