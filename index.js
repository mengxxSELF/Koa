let koa = require('koa');
let app = new koa();
let Router = require('koa-router')
let router = new Router()
let render = require('koa-ejs')
let path = require('path');
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'index',
    viewExt: 'html',
    cache: false,
    debug: true
});

router.get('/user/:id', function * (next) {
    console.log(this.params);
    this.body = 'say moring'
    yield next
})

app.use(router.routes()).use(router.allowedMethods())

app.use(function * (next) {
  this.body = 'Hello World';
  yield this.render('index',{koaRender:'try layout'})
  yield next

});

app.listen(3000);
