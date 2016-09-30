var path = require('path');
var url = require('url');
var routeProject = require('./nav_routes/route-project');
var routeTeam = require('./nav_routes/route-team');

var route = []
.concat(routeProject)
.concat(routeTeam)
.concat([
  {
		data: {
	    "title": "iGEM NCKU",
    	"url": "",
			"img": "",
    	"description": "",
			"cssHome": "/wiki/css/T--NCKU_Tainan--home.css",
			"logoUrl": "/wiki/images/T--NCKU_Tainan--ulogo.png",
			"sample1": "/wiki/images/T--NCKU_Tainan--sample1.png"
		},
    "layout":  "./view/index.hbs",
    "filename": "./docs/index.html"
  },
  {
		data: {
	    "title": "Human Practices - iGEM NCKU",
  	  "url": "",
    	"img": "",
    	"description": "",
			"cssHP": "/wiki/css/T--NCKU_Tainan--HP.css",
			"sample2": "/wiki/images/T--NCKU_Tainan--sample2.jpg",
			"sample3": "/wiki/images/T--NCKU_Tainan--sample3.png"
		},
    "layout":  "./view/Human_Practices/index.hbs",
    "filename": "./docs/Human_Practices/index.html"
  }
]);

var commonData = {
	cssLink1: "/wiki/css/frame/T--NCKU_Tainan--bootstrap.min.css",
	cssLink2: "/wiki/font/T--NCKU_Tainan--NotoSans.css",
	cssLink3: "/wiki/font/T--NCKU_Tainan--font-awesome.min.css",
	jsLink1: "/wiki/js/frame/T--NCKU_Tainan--jquery-1.12.0.min.js",
	jsLink2: "/wiki/js/frame/T--NCKU_Tainan--bootstrap.min.js",
	commonjs: "/wiki/js/T--NCKU_Tainan--common.js",
	font: "/wiki/font/T--NCKU_Tainan--NotoSansCJKtc-Regular.woff",
	icon: "/wiki/T--NCKU_Tainan--favicon.ico",
	home: "/wiki",
	project: "/wiki/Project",
	wetlab: "/wiki/Wetlab",
	drylab: "/wiki/Drylab",
	hp: "/wiki/Human_Practices",
	projParts: '/wiki/Project/parts',
  team: '/wiki/team',
  teamCollaborations: '/wiki/team/collaborations',
  teamAttributions: '/wiki/team/attributions',
  teamAcknowledgement: '/wiki/team/acknowledgement',
};

// add commonData to all data in route
for (var page in route) {
	for (var key in commonData) {
		route[page].data[key] = commonData[key];
		route[page].partials = './partials.js';
  }
}

module.exports = route;
