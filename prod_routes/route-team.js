var teamData = require('../team.json');
var typecss = '?ctype=text/css&action=raw';

module.exports = [
 {
    data: {
      title: "Team - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Team.css" + typecss,
      sample2: "/Team:NCKU_Tainan/images/T--NCKU_Tainan--sample2.jpg",
      member: teamData.Member
    },
    layout:  "./view/Team/index.hbs",
    filename: "./product/team/index.html"
  },
  {
    data: {
      title: "Team Attributions - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Team--Attributions.css" + typecss,
      sample2: "/Team:NCKU_Tainan/images/T--NCKU_Tainan--sample2.jpg"
    },
    layout:  "./view/Team/attributions.hbs",
    filename: "./product/team/attributions.html"
  },
  {
    data: {
      title: "Team Acknowledgement - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Team--Acknowledgement.css" + typecss
    },
    layout:  "./view/Team/acknowledgement.hbs",
    filename: "./product/team/acknowledgement.html"
  },
  {
    data: {
      title: "Team Collaborations - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Team--Collaborations.css" + typecss
    },
    layout:  "./view/Team/collaborations.hbs",
    filename: "./product/team/collaborations.html"
  }
 ];
