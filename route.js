var path = require('path');
var url = require('url');

var commonData = {
	"cssLink1": "/wiki/css/frame/T--NCKU_Tainan--bootstrap.min.css",
	"cssLink2": "/wiki/font/T--NCKU_Tainan--NotoSans.css",
	"cssLink3": "/wiki/font/T--NCKU_Tainan--font-awesome.min.css",
	"jsLink1": "/wiki/js/frame/T--NCKU_Tainan--jquery-1.12.0.min.js",
	"jsLink2": "/wiki/js/frame/T--NCKU_Tainan--bootstrap.min.js",
	"commonjs": "/wiki/js/T--NCKU_Tainan--common.js",
	"font": "/wiki/font/T--NCKU_Tainan--NotoSansCJKtc-Regular.woff",
	"icon": "/wiki/T--NCKU_Tainan--favicon.ico",
	"home": "/wiki",
	"project": "/wiki/Project",
	"wetlab": "/wiki/Wetlab",
	"drylab": "/wiki/Drylab",
	"hp": "/wiki/Human_Practices"
};

route = [
  {
		data: {
			commonData,
	    "title": "iGEM NCKU",
    	"url": "",
			"img": "",
    	"description": "",
			"cssHome": "/wiki/css/T--NCKU_Tainan--home.css",
			"logoUrl": "/wiki/images/T--NCKU_Tainan--ulogo.png",
			"sample1": "/wiki/images/T--NCKU_Tainan--sample1.png"
		},
    "partials": './partials.js',
    "layout":  "./view/index.hbs",
    "filename": "./docs/index.html"
  },
  {
    data: {
			"title": "Project - iGEM NCKU",
  	  "url": "",
 	   	"img": "",
  	  "description": "",
		},
    "partials": './partials.js',
    "layout":  "./view/Project/index.hbs",
    "filename": "./docs/Project/index.html"
  },
  {
		data: {
  	  "title": "Wet lab - iGEM NCKU",
	    "url": "",
  	  "img": "",
  	  "description": "",
		},
    "partials": './partials.js',
    "layout":  "./view/Wetlab/index.hbs",
    "filename": "./docs/Wetlab/index.html"
  },
  {
		data: {
	    "title": "Dry lab - iGEM NCKU",
  	  "url": "",
 	  	"img": "",
  	  "description": "",
		},
    "partials": './partials.js',
    "layout":  "./view/Drylab/index.hbs",
    "filename": "./docs/Drylab/index.html"
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
    "partials": './partials.js',
    "layout":  "./view/Human_Practices/index.hbs",
    "filename": "./docs/Human_Practices/index.html"
  },
  {
		data: {
	    "title": "Team - iGEM NCKU",
  	  "url": "",
    	"img": "",
    	"description": "",
		},
    "partials": './partials.js',
    "layout":  "./view/Team/index.hbs",
    "filename": "./docs/Team/index.html"
  },
]

// add commonData to all data in route 
for (i in route)
	for (j in commonData)
		route[i].data[j]=commonData[j];

module.exports = route;
