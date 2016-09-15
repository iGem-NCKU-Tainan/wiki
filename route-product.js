var path = require('path');
var url = require('url');

var commonData = {
	"cssLink1": "/Team:NCKU_Tainan/css/frame/T--NCKU_Tainan--bootstrap_min_css?ctype=text/css&action=raw",
	"cssLink2": "/Team:NCKU_Tainan/font/T--NCKU_Tainan--NotoSans_css?ctype=text/css&action=raw",
	"cssLink3": "/Team:NCKU_Tainan/font/T--NCKU_Tainan--font-awesome_min_css?ctype=text/css&action=raw",
	"jsLink1": "/Team:NCKU_Tainan/js/frame/T--NCKU_Tainan--jquery-1_12_0_min_js?ctype=text/javascript&action=raw",
	"jsLink2": "/Team:NCKU_Tainan/js/frame/T--NCKU_Tainan--bootstrap_min_js?ctype=text/javascript&action=raw",
	"commonjs": "/Team:NCKU_Tainan/js/T--NCKU_Tainan--common_js?ctype=text/javascript&action=raw",
	"font": "/wiki/images/0/0b/T--NCKU_Tainan--NotoSansCJKtc-Regular.woff",
	"icon": "/wiki/images/8/80/T--NCKU_Tainan--favicon.png",
	"home": "/Team:NCKU_Tainan",
	"project": "/Team:NCKU_Tainan/Project",
	"wetlab": "/Team:NCKU_Tainan/Wetlab",
	"drylab": "/Team:NCKU_Tainan/Drylab",
	"hp": "/Team:NCKU_Tainan/Human_Practices"
};

route = [
  {
		data: {
			commonData,
	    "title": "iGEM NCKU",
    	"url": "",
			"img": "",
    	"description": "",
			"cssHome": "/Team:NCKU_Tainan/css/T--NCKU_Tainan--home_css?ctype=text/css&action=raw",
			"logoUrl": "/wiki/images/4/4b/T--NCKU_Tainan--ulogo.png",
			"sample1": "/wiki/images/a/ad/T--NCKU_Tainan--sample1.png"
		},
    "partials": './partials.js',
    "layout":  "./view/index.hbs",
    "filename": "./product/index.html"
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
    "filename": "./product/Project/index.html"
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
    "filename": "./product/Wetlab/index.html"
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
    "filename": "./product/Drylab/index.html"
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
    "filename": "./product/Team/index.html"
  },
]

// add commonData to all data in route 
for (i in route)
	for (j in commonData)
		route[i].data[j]=commonData[j];

module.exports = route;
