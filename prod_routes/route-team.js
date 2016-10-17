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
			cover: "/wiki/images/7/76/T--NCKU_Tainan--Team.png",
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
			cover: "/wiki/images/9/90/T--NCKU_Tainan--Attributions.png"
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
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Attributions_css" + typecss,
			cover: "/wiki/images/2/22/T--NCKU_Tainan--Acknowledgement.png",
      imgDiamond: "/wiki/images/8/8f/T--NCKU_Tainan--sponsorDiamond.png",
      imgMicroBio: "/wiki/images/2/29/T--NCKU_Tainan--sponsorMicroBio.png",
      imgDow: "/wiki/images/5/59/T--NCKU_Tainan--sponsorDow.png",
      imgNCKU: "/wiki/images/0/0c/T--NCKU_Tainan--sponsorNCKU.png",
      imgGeneOnline: "/wiki/images/d/dc/T--NCKU_Tainan--sponsorGeneOnline.png",
      imgIDT: "/wiki/images/8/8e/T--NCKU_Tainan--sponsorIDT.png",
      imgMathWorks: "/wiki/images/3/36/T--NCKU_Tainan--sponsorMathWorks.svg",
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
    	css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Layout_css" + typecss,
			cover: "/wiki/images/0/06/T--NCKU_Tainan--Collaborations.png",
			fig1: "/wiki/images/d/d8/T--NCKU_Tainan--collaborations1.jpg",
			fig2: "/wiki/images/8/8f/T--NCKU_Tainan--collaborations2.jpg",
    },
    layout:  "./view/Team/collaborations.hbs",
    filename: "./product/Collaborations.html"
  }
 ];
