var teamData = require('../team-product.json');
var typecss = '?ctype=text/css&action=raw';

module.exports = [
 {
    data: {
      title: "Team - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Team_css" + typecss,
      member: teamData.Member
    },
    layout:  "./view/Team/index.hbs",
    filename: "./product/Team.html"
  },
  {
    data: {
      title: "Team Attributions - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Attributions_css" + typecss,
    },
    layout:  "./view/Team/attributions.hbs",
    filename: "./product/Attributions.html"
  },
  {
    data: {
      title: "Team Acknowledgement - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Acknowledgement_css" + typecss
    },
    layout:  "./view/Team/acknowledgement.hbs",
    filename: "./product/Acknowledgement.html"
  },
  {
    data: {
      title: "Team Collaborations - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Collaborations_css" + typecss
    },
    layout:  "./view/Team/collaborations.hbs",
    filename: "./product/Collaborations.html"
  }
 ];
