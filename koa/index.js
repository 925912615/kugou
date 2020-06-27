const koa = require('koa');
const router = require('koa-router');
const request = require('request');
const path = require('path');
const {url,fn} = require(path.resolve('url'));

let app = new koa();
app.listen(2020,function(){
  console.log("start server success! listen in 2020 port!");
});

// 处理跨域
app.use(async (ctx,next)=>{
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
})
let r1 = router();
app.use(r1.routes());

// 主页信息
r1.get('/',async ctx=>{
  ctx.body = "欢迎来到巴挂后台API，请更换路由获取数据\n\n\n\n数据来源：酷狗音乐：http://m.kugou.com"
})
// 路由分配----API接口
proxyResponse(url.xinge,'/xinge');
proxyResponse(url.paihang.src,'/paihang');
proxyResponse(url.paihang.list,'/paihang/list');
proxyResponse(url.gedan.src,'/gedan');
proxyResponse(url.gedan.list,'/gedan/list');
proxyResponse(url.geshou.src,'/geshou');
proxyResponse(url.geshou.list,'/geshou/list');
proxyResponse(url.geshou.info,'/geshou/info');
paihangInfo()


function proxyResponse(src,routername){
  request(src, function (error, res, body) {
    if(res.statusCode == 200 || res.statusCode == 304){
      r1.get(routername,ctx=>{
        ctx.body=body
      })
    }
  });
}

async function paihangInfo(){
  let data;
  try{
    data=await fn();
    data.forEach(item=>{
      request(`http://m.kugou.com/rank/info/?rankid=${item}&page=1&json=true`, function (error, res, body) {
        if(res.statusCode == 200 || res.statusCode == 304){
          r1.get(`/paihang/${item}`,ctx=>{
            ctx.body=body
          })
        }
      });
    })
  }catch(e){
    throw e;
  }
}
