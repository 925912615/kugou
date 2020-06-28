const request = require('request');

const url = {
  xinge: "http://m.kugou.com/?json=true", //新歌
  paihang: {
    src: "http://m.kugou.com/rank/list&json=true", //排行榜
    list: "http://m.kugou.com/rank/info/?rankid=8888&page=1&json=true" //排行榜列表
  },
  gedan: {
    src: "http://m.kugou.com/plist/index&json=true",  //歌单
    list: "http://m.kugou.com/plist/list/125032?json=true"  //歌单列表
  },
  geshou: {
    src: "http://m.kugou.com/singer/class&json=true",  //歌手
    list: "http://m.kugou.com/singer/list/88?json=true",  //歌手列表
    info: "http://m.kugou.com/singer/info/3060&json=true"  //歌手信息
  }
}

let paihangList=function(){
  return new Promise((resolve,reject)=>{
    request("http://m.kugou.com/rank/list&json=true", function (error, res, body) {
      let arr=[]
      if(res.statusCode == 200 || res.statusCode == 304){
        let data=JSON.parse(body);
        data.rank.list.forEach((item,index)=>{
          arr[index]=item.rankid;
        })
      }
      resolve(arr)
      reject(error);
    });
  })
}

let gedanList=function(){
  return new Promise((resolve,reject)=>{
    request("http://m.kugou.com/plist/index&json=true", function (error, res, body) {
      let arr=[]
      if(res.statusCode == 200 || res.statusCode == 304){
        let data=JSON.parse(body);
        data.plist.list.info.forEach((item,index)=>{
          arr[index]=item.specialid;
          console.log(item.specialid);
        })
      }
      resolve(arr)
      reject(error);
    });
  })
}

gedanList()
module.exports = {url,paihangList,gedanList};
