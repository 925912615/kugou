const koa = require('koa');
const router = require('koa-router');
const request = require('request');
const path = require('path');
const { resolve } = require('path');
const { rejects } = require('assert');
const { url, paihangList, gedanList } = require(path.resolve('url'));
const bodyParser = require('koa-bodyparser');
const { log } = require('console');

let app = new koa();
app.listen(2020, function () {
  console.log("start server success! listen in 2020 port!");
});

// 处理跨域
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
})
let r1 = router();
app.use(r1.routes());
app.use(bodyParser());

// 主页信息
r1.get('/', async ctx => {
  ctx.body = "欢迎来到巴挂后台API，请更换路由获取数据\n\n\n\n数据来源：酷狗音乐：http://m.kugou.com"
})

r1.post('/',async ctx => {
  console.log(ctx.request.body);
})

// 路由分配----API接口
proxyResponse(url.xinge, '/xinge');
proxyResponse(url.paihang.src, '/paihang');
proxyResponse(url.paihang.list, '/paihang/list');
proxyResponse(url.gedan.src, '/gedan');
proxyResponse(url.gedan.list, '/gedan/list');
proxyResponse(url.geshou.src, '/geshou');
proxyResponse(url.geshou.list, '/geshou/list');
proxyResponse(url.geshou.info, '/geshou/info');
paihangInfo();
gedanInfo();
// 歌曲播放信息
r1.get('/play/getdata', async ctx => {
  const { hash } = ctx.query;
  const body = await songDetail(hash);
  ctx.body = body;
})


function proxyResponse(src, routername) {
  request(src, function (error, res, body) {
    if (res.statusCode == 200 || res.statusCode == 304) {
      r1.get(routername, ctx => {
        ctx.body = body;
      })
    }
  });
}

// 排行榜详情页
async function paihangInfo() {
  let data;
  let obj = null;
  try {
    data = await paihangList();
    data.forEach(item => {
      request(`http://m.kugou.com/rank/info/?rankid=${item}&page=1&json=true`, function (error, res, body) {
        if (res.statusCode == 200 || res.statusCode == 304) {
          r1.get(`/paihang/${item}`, ctx => {
            obj = JSON.parse(body);
            ctx.body = obj
          })
        }
      });
    })
  } catch (e) {
    throw e;
  }
}

// 歌单详情页
async function gedanInfo() {
  let data;
  try {
    data = await gedanList();
    data.forEach(item => {
      request(`http://m.kugou.com/plist/list/${item}?json=true`, function (error, res, body) {
        if (res.statusCode == 200 || res.statusCode == 304) {
          r1.get(`/gedan/${item}`, ctx => {
            ctx.body = body
          })
        }
      });
    })
  } catch (e) {
    throw e;
  }
}

// 获取歌曲播放页面
async function songDetail(hash) {
  let options = {
    url: `http://www.kugou.com/yy/index.php?r=play/getdata&hash=${hash}`,
    method: "GET",
    headers: {
      "Cookie": "kg_mid=9cd923f89e06fab0c78dda72a4b9501f; kg_dfid=0Qqmwa17uDQN0wzxsj2BVqOm; KuGooRandom=66751599871752176; kg_dfid_collect=d41d8cd98f00b204e9800998ecf8427e; Hm_lvt_aedee6983d4cfc62f509129360d6bb3d=1599871998,1599872273,1599880841,1600071074; Hm_lpvt_aedee6983d4cfc62f509129360d6bb3d=1600071625"
    }
  }
  return new Promise((resolve, reject) => {
    request(options, (error, res, body) => {
      if (error) reject(error);
      if (res && res.statusCode === 200) {
        console.log(body);
        resolve(body)
      } else {
        reject('请求失败')
      }
    })
  })
}