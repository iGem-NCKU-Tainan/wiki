var path = require('path');
var url = require('url');

route = [
  {
		data: {
	    "title": "iGEM NCKU",
    	"url": "",
			"img": "",
    	"description": "",
			"logoUrl": "/wiki/images/4/4b/T--NCKU_Tainan--ulogo.png"
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

module.exports = route;
