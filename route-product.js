var path = require('path');
var url = require('url');
var routeProject = require('./prod_routes/route-project');
var routeDevice = require('./prod_routes/route-device');
var routeTeam = require('./prod_routes/route-team');
var routeHP = require('./prod_routes/route-hp');
var routeJudging = require('./prod_routes/route-judging');
var routeNotebook = require('./prod_routes/route-notebook');

var route = []
.concat(routeProject)
.concat(routeDevice)
.concat(routeTeam)
.concat(routeHP)
.concat(routeJudging)
.concat(routeNotebook)
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
  }
]);

var commonData = {
  cssLink1: "/Team:NCKU_Tainan/css/frame/T--NCKU_Tainan--bootstrap_min_css?ctype=text/css&action=raw",
  cssLink2: "/Team:NCKU_Tainan/font/T--NCKU_Tainan--NotoSans_css?ctype=text/css&action=raw",
  cssLink3: "/Team:NCKU_Tainan/font/T--NCKU_Tainan--font-awesome_min_css?ctype=text/css&action=raw",
	cssHighlight: "/Team:NCKU_Tainan/css/frame/T--NCKU_Tainan--hljs_github_css?ctype=text/css&action=raw",
  jsLink1: "/Team:NCKU_Tainan/js/frame/T--NCKU_Tainan--jquery-1_12_0_min_js?ctype=text/javascript&action=raw",
  jsLink2: "/Team:NCKU_Tainan/js/frame/T--NCKU_Tainan--bootstrap_min_js?ctype=text/javascript&action=raw",
	jsHighlight: "/Team:NCKU_Tainan/js/frame/T--NCKU_Tainan--highlight_pack_js?ctype=text/javascript&action=raw",
	jsHljsNum: "/Team:NCKU_Tainan/js/frame/T--NCKU_Tainan--highlightjs-line-numbers_js?ctype=text/javascript&action=raw",
  MathJaxConfigjs:"/Team:NCKU_Tainan/js/T--NCKU_Tainan--MathjaxConfigIgem_js?ctype=text/javascript&action=raw",
	MathJaxjs: "/common/MathJax-2.5-latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML",
  commonjs: "/Team:NCKU_Tainan/js/T--NCKU_Tainan--common_js?ctype=text/javascript&action=raw",
  font: "/wiki/images/0/0b/T--NCKU_Tainan--NotoSansCJKtc-Regular.woff",
  icon: "/wiki/images/8/80/T--NCKU_Tainan--favicon.png",
  home: "/Team:NCKU_Tainan",
  hp: "/Team:NCKU_Tainan/Human_Practices",
	hpIntegrated: "/Team:NCKU_Tainan/Integrated_Practices",
	hpEngagement: "/Team:NCKU_Tainan/Engagement",
  projOverview: '/Team:NCKU_Tainan/Project',
  projDescription: '/Team:NCKU_Tainan/Description',
  projParts: '/Team:NCKU_Tainan/Parts',
  projResults: '/Team:NCKU_Tainan/Results',
  projModeling: '/Team:NCKU_Tainan/Model',
  projModel1: '/Team:NCKU_Tainan/Model_Fitting_Theory',
  projModel2: '/Team:NCKU_Tainan/Model_Statistics_Analysis',
	video1: "/wiki/images/0/0b/T--NCKU_Tainan--introVideo.mp4",
  deviceHardware: '/Team:NCKU_Tainan/Hardware',
  deviceSoftware: '/Team:NCKU_Tainan/Software',
  deviceDemo: '/Team:NCKU_Tainan/Demonstrate',
  team: '/Team:NCKU_Tainan/Team',
  teamCollaborations: '/Team:NCKU_Tainan/Collaborations',
  teamAttributions: '/Team:NCKU_Tainan/Attributions',
  teamAcknowledgement: '/Team:NCKU_Tainan/Acknowledgement',
	notebookConstruction: '/Team:NCKU_Tainan/Notebook_Construction',
	notebookFunctional: '/Team:NCKU_Tainan/Notebook_Functional_Test',
	notebookDevice: '/Team:NCKU_Tainan/Notebook_Device_Design',
	notebookProtocol: '/Team:NCKU_Tainan/Notebook_Protocols',
  notebookModel: '/Team:NCKU_Tainan/Notebook_Model',
  judgingMedal: '/Team:NCKU_Tainan/Medal',
  judgingSafety: '/Team:NCKU_Tainan/Safety',
};


// add commonData to all data in route
for (var page in route) {
  for (var key in commonData) {
    route[page].data[key] = commonData[key];
    route[page].partials = './partials.js';
  }
}

module.exports = route;
