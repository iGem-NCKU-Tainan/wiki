var path = require('path');
var url = require('url');
var routeProject = require('./prod_routes/route-project');
var routeTeam = require('./prod_routes/route-team');
var routeJudging = require('./prod_routes/route-judging');

var route = []
.concat(routeProject)
.concat(routeTeam)
.concat(routeJudging)
.concat([
  {
    data: {
      "title": "iGEM NCKU",
      "url": "",
      "img": "",
      "description": "",
      "cssHome": "/Team:NCKU_Tainan/css/T--NCKU_Tainan--home_css?ctype=text/css&action=raw",
      "logoUrl": "/wiki/images/4/4b/T--NCKU_Tainan--ulogo.png",
      "sample1": "/wiki/images/a/ad/T--NCKU_Tainan--sample1.png"
    },
    "layout":  "./view/index.hbs",
    "filename": "./product/index.html"
  },
  {
    data: {
      "title": "Human Practices - iGEM NCKU",
      "url": "",
      "img": "",
      "description": "",
      "cssHP": "/Team:NCKU_Tainan/css/T--NCKU_Tainan--HP_css?ctype=text/css&action=raw",
      "sample2": "/wiki/images/c/c1/T--NCKU_Tainan--sample2.jpg",
      "sample3": "/wiki/images/2/29/T--NCKU_Tainan--sample3.png",
    },
    "partials": './partials.js',
    "layout":  "./view/Human_Practices/index.hbs",
    "filename": "./product/Human_Practices/index.html"
  }
]);

var commonData = {
  cssLink1: "/Team:NCKU_Tainan/css/frame/T--NCKU_Tainan--bootstrap_min_css?ctype=text/css&action=raw",
  cssLink2: "/Team:NCKU_Tainan/font/T--NCKU_Tainan--NotoSans_css?ctype=text/css&action=raw",
  cssLink3: "/Team:NCKU_Tainan/font/T--NCKU_Tainan--font-awesome_min_css?ctype=text/css&action=raw",
  jsLink1: "/Team:NCKU_Tainan/js/frame/T--NCKU_Tainan--jquery-1_12_0_min_js?ctype=text/javascript&action=raw",
  jsLink2: "/Team:NCKU_Tainan/js/frame/T--NCKU_Tainan--bootstrap_min_js?ctype=text/javascript&action=raw",
  commonjs: "/Team:NCKU_Tainan/js/T--NCKU_Tainan--common_js?ctype=text/javascript&action=raw",
  font: "/wiki/images/0/0b/T--NCKU_Tainan--NotoSansCJKtc-Regular.woff",
  icon: "/wiki/images/8/80/T--NCKU_Tainan--favicon.png",
  home: "/Team:NCKU_Tainan",
  project: "/Team:NCKU_Tainan/Project",
  hp: "/Team:NCKU_Tainan/Human_Practices",
  projParts: '/Team:NCKU_Tainan/Project/parts',
  projResults: '/Team:NCKU_Tainan/Project/results',
  team: '/Team:NCKU_Tainan/team',
  teamCollaborations: '/Team:NCKU_Tainan/team/collaborations',
  teamAttributions: '/Team:NCKU_Tainan/team/attributions',
  teamAcknowledgement: '/Team:NCKU_Tainan/team/acknowledgement',
  judgingMedal: '/Team:NCKU_Tainan/judging/medal',
  judgingSafetyForm: '/Team:NCKU_Tainan/judging/safety_form'
};


// add commonData to all data in route
for (var page in route) {
  for (var key in commonData) {
    route[page].data[key] = commonData[key];
    route[page].partials = './partials.js';
  }
}

module.exports = route;
