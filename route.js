var path = require('path');
var url = require('url');
var routeProject = require('./dev_routes/route-project');
var routeTeam = require('./dev_routes/route-team');
var routeJudging = require('./dev_routes/route-judging');

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
      "cssHome": "/wiki/css/T--NCKU_Tainan--home.css",
      "logoUrl": "/wiki/images/T--NCKU_Tainan--ulogo.png",
      "sample1": "/wiki/images/T--NCKU_Tainan--sample1.png",
      "sample4": "/wiki/images/T--NCKU_Tainan--sample4.png",
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
  ,
  {
        data: {
        "title": "Modeling - iGEM NCKU",
      "url": "",
        "img": "",
        "description": "",
            "cssModeling": "/wiki/css/T--NCKU_Tainan--Model.css",
            "image1": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image1.jpg",
            "image2": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image2.jpg",
            "image3": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image3.jpg",
            "image4": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image4.jpg",
            "image5": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image5.jpg",
            "image6": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image6.jpg",
            "image7": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image7.jpg",
            "image8": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image8.jpg",
            "image9": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image9.jpg",
            "image10": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image10.jpg",
            "image11": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image11.jpg",
            "image12": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image12.jpg",
            "image13": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image13.jpg",
            "image14": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image14.jpg",
            "image15": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image15.jpg",
            "image16": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image16.jpg",
            "image17": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image17.jpg",
            "image18": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image18.jpg",
            "image19": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image19.jpg",
            "image20": "/wiki/images/Modeling/T--NCKU_Tainan--project-modeling-statistic-image20.jpg"
        },
    "layout":  "./view/Project/modeling.hbs",
    "filename": "./docs/Project/modeling.html"
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
  projResults: '/wiki/Project/results',
  projModeling: '/wiki/Project/modeling',
  team: '/wiki/team',
  teamCollaborations: '/wiki/team/collaborations',
  teamAttributions: '/wiki/team/attributions',
  teamAcknowledgement: '/wiki/team/acknowledgement',
  judgingMedal: '/wiki/judging/medal',
  judgingSafetyForm: '/wiki/judging/safety_form'
};

// add commonData to all data in route
for (var page in route) {
  for (var key in commonData) {
    route[page].data[key] = commonData[key];
    route[page].partials = './partials.js';
  }
}

module.exports = route;
