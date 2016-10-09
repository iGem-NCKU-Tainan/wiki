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
			"home_bg": "/wiki/images/e/e4/T--NCKU_Tainan--home_bg.jpg",
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
      "cssHP": "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Human_Practices_css?ctype=text/css&action=raw",
    },
    "partials": './partials.js',
    "layout":  "./view/Human_Practices/index.hbs",
    "filename": "./product/Human_Practices.html"
  }
]);

var commonData = {
  cssLink1: "/Team:NCKU_Tainan/css/frame/T--NCKU_Tainan--bootstrap_min_css?ctype=text/css&action=raw",
  cssLink2: "/Team:NCKU_Tainan/font/T--NCKU_Tainan--NotoSans_css?ctype=text/css&action=raw",
  cssLink3: "/Team:NCKU_Tainan/font/T--NCKU_Tainan--font-awesome_min_css?ctype=text/css&action=raw",
  jsLink1: "/Team:NCKU_Tainan/js/frame/T--NCKU_Tainan--jquery-1_12_0_min_js?ctype=text/javascript&action=raw",
  jsLink2: "/Team:NCKU_Tainan/js/frame/T--NCKU_Tainan--bootstrap_min_js?ctype=text/javascript&action=raw",
  MathJaxConfigjs:"/Team:NCKU_Tainan/js/T--NCKU_Tainan--MathjaxConfigIgem_js?ctype=text/javascript&action=raw",
	MathJaxjs: "/common/MathJax-2.5-latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML",
  commonjs: "/Team:NCKU_Tainan/js/T--NCKU_Tainan--common_js?ctype=text/javascript&action=raw",
  sample2: "/wiki/images/c/c1/T--NCKU_Tainan--sample2.jpg",
  sample3: "/wiki/images/2/29/T--NCKU_Tainan--sample3.png",
  font: "/wiki/images/0/0b/T--NCKU_Tainan--NotoSansCJKtc-Regular.woff",
  icon: "/wiki/images/8/80/T--NCKU_Tainan--favicon.png",
  home: "/Team:NCKU_Tainan",
  hp: "/Team:NCKU_Tainan/Human_Practices",
  projOverview: '/Team:NCKU_Tainan/Project',
  projParts: '/Team:NCKU_Tainan/Parts',
  projResults: '/Team:NCKU_Tainan/Results',
  projModeling: '/Team:NCKU_Tainan/Model',
  projModel1: '/Team:NCKU_Tainan/Model_Fitting_Theory',
  projModel2: '/Team:NCKU_Tainan/Model_Statistics_Analysis',
  team: '/Team:NCKU_Tainan/Team',
  teamCollaborations: '/Team:NCKU_Tainan/Collaborations',
  teamAttributions: '/Team:NCKU_Tainan/Attributions',
  teamAcknowledgement: '/Team:NCKU_Tainan/Acknowledgement',
  judgingMedal: '/Team:NCKU_Tainan/Medal',
  judgingSafety: '/Team:NCKU_Tainan/Safety'
};


// add commonData to all data in route
for (var page in route) {
  for (var key in commonData) {
    route[page].data[key] = commonData[key];
    route[page].partials = './partials.js';
  }
}

module.exports = route;
