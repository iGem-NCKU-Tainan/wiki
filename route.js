var path = require('path');
var url = require('url');

route = [
  {
		data: {
	    "title": "iGEM NCKU",
    	"url": "",
			"img": "",
    	"description": "",
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

module.exports = route;
