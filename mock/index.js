const Mock = require('mockjs');
const units = require('./units');

module.exports = {
  api: [
    {id: "1", method: 'post', path: '/test/post', dataFile: "post.json", describe: "post-test"},
    {id: "2", method: 'get', path: '/test/get', dataFile: "get.json", describe: "get-test"},
    {
      id: "3", method: 'post', path: '/oauth/login', dataFile: "login.json", callback: (rep, res) => {
        const fileMap = {
          0: "login_male.json",
          1: "login_female.json",
          2: "login.json"
        };

        var json = units.getJsonFile(fileMap[rep.body.sex]);
        res.json(Mock.mock(json));
      },
      describe: "post-other-test"
    },

    {id: "4", method: 'get', path: '/nav/list', dataFile: "nav.json", describe: "nav-data"},
    {id: "5", method: 'get', path: '/area/list', dataFile: "area.json", describe: "area-data"},


    /**
     * 架构组 - 基础组件调试 - Api
     */
    {id: "20", method: 'get', path: '/api/frameBasic/getnav', dataFile: "FB_NavList.json", describe: "主页、侧边栏 - 导航数据"},

  ]
};


