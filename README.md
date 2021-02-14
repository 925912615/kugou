# 仿酷狗web移动端页面（[酷狗音乐](http://m.kugou.com)）
## 引用[官网API](https://github.com/ecitlm/Kugou-api),nodejs+koa做代理，webpack+vuejs+vuex+mint-ui打造迷你酷狗web移动端页面

### 使用：
```
  开启koa服务器:
    cd kugou
    cd koa
    npm install
    node index.js
  执行vue项目：
    cd kugou
    cd vue-music
    npm install
    npm run dev
```
 **说明**：能力有限没有获取到酷狗音乐播放的API，所以没有音乐播放功能
  - 排行榜引用mint-ui中cell组件
  - 歌单页面使用自主开发的bg-cell组件，欠优化
  - 路由使用懒加载优化首屏加载卡顿
  - 状态：开发中
  

