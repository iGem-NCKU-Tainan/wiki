var path = require('path');
var url = require('url');

var commonData = {
	"font": "/wiki/images/0/0b/T--NCKU_Tainan--NotoSansCJKtc-Regular.woff"
};

route = [
  {
		data: {
			commonData,
	    "title": "iGEM NCKU",
    	"url": "",
			"img": "",
    	"description": "",
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
