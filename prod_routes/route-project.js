var typecss = '?ctype=text/css&action=raw';

module.exports = [
  {
    data: {
      title: "Project Overview - iGEM NCKU",
      url: "",
      img: "",
      description: "",
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
    filename: "./product/Project/description.html"
  },
  {
    data: {
      title: "Project Results - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      sample2: "/Team:NCKU_Tainan/images/T--NCKU_Tainan--sample2.jpg",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Project--Results.css" + typecss
    },
    layout:  "./view/Project/results.hbs",
    filename: "./product/Project/results.html"
  },
  {
    data: {
      title: "Project Modeling - iGEM NCKU",
      url: "",
      img: "",
      description: "",
    },
    layout:  "./view/Project/modeling.hbs",
    filename: "./product/Project/modeling.html"
  },
  {
    data: {
      title: "Project Parts - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      cssParts: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Project--Parts.css" + typecss,
      sample2: "/Team:NCKU_Tainan/images/T--NCKU_Tainan--sample2.jpg"
    },
    layout:  "./view/Project/parts.hbs",
    filename: "./product/Project/parts.html"
  }
];
