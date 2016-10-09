var teamData = require('../team.json');

module.exports = [
 {
    data: {
      title: "Team - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/wiki/css/T--NCKU_Tainan--Team.css",
      member: teamData.Member
    },
    layout:  "./view/Team/index.hbs",
    filename: "./docs/team/index.html"
  },
  {
    data: {
      title: "Team Attributions - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/wiki/css/T--NCKU_Tainan--Attributions.css",
    },
    layout:  "./view/Team/attributions.hbs",
    filename: "./docs/team/attributions.html"
  },
  {
    data: {
      title: "Team Acknowledgement - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/wiki/css/T--NCKU_Tainan--Attributions.css",
    },
    layout:  "./view/Team/acknowledgement.hbs",
    filename: "./docs/team/acknowledgement.html"
  },
  {
    data: {
      title: "Team Collaborations - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/wiki/css/T--NCKU_Tainan--Layout.css",
			fig1: "/wiki/images/Team/T--NCKU_Tainan--collaborations1.jpg",
			fig2: "/wiki/images/Team/T--NCKU_Tainan--collaborations2.jpg",
    },
    layout:  "./view/Team/collaborations.hbs",
    filename: "./docs/team/collaborations.html"
  }
 ];
