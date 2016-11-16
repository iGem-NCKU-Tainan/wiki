var path = require('path');
var url = require('url');
var routeProject = require('./dev_routes/route-project');
var routeDevice = require('./dev_routes/route-device');
var routeTeam = require('./dev_routes/route-team');
var routeJudging = require('./dev_routes/route-judging');
var routeHP = require('./dev_routes/route-hp');
var routeNotebook = require('./dev_routes/route-notebook');

var route = []
.concat(routeProject)
.concat(routeDevice)
.concat(routeTeam)
.concat(routeJudging)
.concat(routeHP)
.concat(routeNotebook)
.concat([
  {
    data: {
      "title": "iGEM NCKU",
      "url": "",
      "img": "",
      "description": "",
      "cssHome": "/wiki/css/T--NCKU_Tainan--home.css",
      "logoUrl": "/wiki/images/T--NCKU_Tainan--ulogo.png",
			"home_bg": "/wiki/images/T--NCKU_Tainan--home_bg.jpg",
    },
    "layout":  "./view/index.hbs",
    "filename": "./docs/index.html"
  }

]);

var commonData = {
  cssLink1: "/wiki/css/frame/T--NCKU_Tainan--bootstrap.min.css",
  cssLink2: "/wiki/font/T--NCKU_Tainan--NotoSans.css",
  cssLink3: "/wiki/font/T--NCKU_Tainan--font-awesome.min.css",
	cssHighlight: "/wiki/css/frame/T--NCKU_Tainan--hljs_github.css",
  jsLink1: "/wiki/js/frame/T--NCKU_Tainan--jquery-1.12.0.min.js",
  jsLink2: "/wiki/js/frame/T--NCKU_Tainan--bootstrap.min.js",
	jsHighlight: "/wiki/js/frame/T--NCKU_Tainan--highlight.pack.js",
	jsHljsNum: "/wiki/js/frame/T--NCKU_Tainan--highlightjs-line-numbers.js",
  MathJaxConfigjs: "/wiki/js/T--NCKU_Tainan--MathjaxConfigIgem.js",
	MathJaxjs: "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML",
  commonjs: "/wiki/js/T--NCKU_Tainan--common.js",
  font: "/wiki/font/T--NCKU_Tainan--NotoSansCJKtc-Regular.woff",
  icon: "/wiki/T--NCKU_Tainan--favicon.ico",
  home: "/wiki",
  hp: "/wiki/Human_Practices",
	hpIntegrated: "/wiki/Human_Practices/integrated",
	hpEngagement: "/wiki/Human_Practices/engagement",
  projOverview: '/wiki/Project/',
  projDescription: '/wiki/Project/description',
  projParts: '/wiki/Project/parts',
  projResults: '/wiki/Project/results',
  projModeling: '/wiki/Project/modeling',
  projModel1: '/wiki/Project/Model_Fitting_Theory',
  projModel2: '/wiki/Project/Model_Statistics_Analysis',
	video1: "/wiki/images/T--NCKU_Tainan--introVideo.mp4",
  deviceHardware: '/wiki/Device/hardware',
  deviceSoftware: '/wiki/Device/software',
  deviceDemo: '/wiki/Device/demonstrate',
  team: '/wiki/team',
  teamCollaborations: '/wiki/team/collaborations',
  teamAttributions: '/wiki/team/attributions',
  teamAcknowledgement: '/wiki/team/acknowledgement',
  judgingMedal: '/wiki/judging/medal',
  judgingSafety: '/wiki/judging/safety',
	notebookConstruction: '/wiki/Notebook/construction',
	notebookFunctional: '/wiki/Notebook/functional_test',
	notebookDevice: '/wiki/Notebook/device_design',
	notebookProtocol: '/wiki/Notebook/protocols',
  notebookModel: '/wiki/Notebook/notebookModel',
};

// add commonData to all data in route
for (var page in route) {
  for (var key in commonData) {
    route[page].data[key] = commonData[key];
    route[page].partials = './partials.js';
  }
}

module.exports = route;
