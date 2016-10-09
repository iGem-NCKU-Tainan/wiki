var typecss = '?ctype=text/css&action=raw';

module.exports = [
  {
    data: {
      title: "Project Overview - iGEM NCKU",
      url: "",
      img: "",
      description: "",
    	css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Layout_css" + typecss,
    	diabetes1: "/wiki/images/c/c6/T--NCKU_Tainan--projDiabetes1.png",
    	diabetes2: "http://2016.igem.org/wiki/images/a/a8/T--NCKU_Tainan--projDiabetes2.jpg",
    },
    layout:  "./view/Project/index.hbs",
    filename: "./product/Project/index.html"
  },
  {
    data: {
      title: "Project Description - iGEM NCKU",
      url: "",
      img: "",
      description: "",
    },
    layout:  "./view/Project/description.hbs",
    filename: "./product/Description.html"
  },
  {
    data: {
      title: "Project Results - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      sample2: "/Team:NCKU_Tainan/images/T--NCKU_Tainan--sample2.jpg",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Results_css" + typecss
    },
    layout:  "./view/Project/results.hbs",
    filename: "./product/Results.html"
  },
  {
    data: {
      title: "Project Modeling - iGEM NCKU",
      url: "",
      img: "",
      description: "",
    	css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Layout_css" + typecss,
			image1: "/wiki/images/b/b7/T--NCKU_Tainan--project-modeling-fitting-image1.jpg",
			image2: "/wiki/images/f/f7/T--NCKU_Tainan--project-modeling-fitting-image2.jpg",
			image3: "/wiki/images/0/08/T--NCKU_Tainan--project-modeling-fitting-image3.jpg",
			image4: "/wiki/images/c/c0/T--NCKU_Tainan--project-modeling-statistic-image1.jpg",
			image5: "/wiki/images/0/04/T--NCKU_Tainan--project-modeling-statistic-image2.jpg",
			image6: "/wiki/images/a/a3/T--NCKU_Tainan--project-modeling-statistic-image3.jpg"
    },
		layout: "./view/Project/modeling.hbs",
    filename: "./product/Model.html"
  },
  {
    data: {
      title: "Project Modeling : Fitting Theory - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      cssModeling: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Model_css" + typecss,
			image1: "/wiki/images/b/b7/T--NCKU_Tainan--project-modeling-fitting-image1.jpg",
			image2: "/wiki/images/f/f7/T--NCKU_Tainan--project-modeling-fitting-image2.jpg",
			image3: "/wiki/images/0/08/T--NCKU_Tainan--project-modeling-fitting-image3.jpg",
			image4: "/wiki/images/3/34/T--NCKU_Tainan--project-modeling-fitting-image4.jpg",
    },
    layout:  "./view/Project/Model_Fitting_Theory.hbs",
    filename: "./product/Model_Fitting_Theory.html"
  },
  {
    data: {
      title: "Project Parts - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      cssParts: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Parts_css" + typecss,
      sample2: "/Team:NCKU_Tainan/images/T--NCKU_Tainan--sample2.jpg"
    },
    layout:  "./view/Project/parts.hbs",
    filename: "./product/Parts.html"
  }
];
