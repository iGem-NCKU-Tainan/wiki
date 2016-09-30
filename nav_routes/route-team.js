var teamData = require('../team.json');

module.exports = [
 {
    data: {
			title: "Team - iGEM NCKU",
  	  url: "",
 	   	img: "",
  	  description: "",
	    css: "/wiki/css/T--NCKU_Tainan--Team.css",
			sample2: "/wiki/images/T--NCKU_Tainan--sample2.jpg",
			member: teamData.Member
		},
    layout:  "./view/Team/index.hbs",
    filename: "./docs/Team/index.html"
  },
  {
    data: {
			title: "Team Attributions - iGEM NCKU",
  	  url: "",
 	   	img: "",
  	  description: "",
	    css: "/wiki/css/T--NCKU_Tainan--Team--Attributions.css",
			sample2: "/wiki/images/T--NCKU_Tainan--sample2.jpg"
		},
    layout:  "./view/Team/attributions.hbs",
    filename: "./docs/Team/attributions.html"
  },
  {
    data: {
			title: "Team Acknowledgement - iGEM NCKU",
  	  url: "",
 	   	img: "",
  	  description: "",
	    css: "/wiki/css/T--NCKU_Tainan--Team--Acknowledgement.css"
		},
    layout:  "./view/Team/acknowledgement.hbs",
    filename: "./docs/Team/acknowledgement.html"
  },
  {
    data: {
			title: "Team Collaborations - iGEM NCKU",
  	  url: "",
 	   	img: "",
  	  description: "",
	    css: "/wiki/css/T--NCKU_Tainan--Team--Collaborations.css"
		},
    layout:  "./view/Team/collaborations.hbs",
    filename: "./docs/Team/collaborations.html"
  }
 ];
