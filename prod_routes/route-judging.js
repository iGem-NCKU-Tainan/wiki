var typecss = '?ctype=text/css&action=raw';

module.exports = [
 {
    data: {
      title: "Judging Medal - iGEM NCKU",
      url: "",
      img: "",
      description: "",
      css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Medal_css" + typecss,
			cover: "/wiki/images/5/56/T--NCKU_Tainan--Medal.png"
    },
    layout:  "./view/judging/medal.hbs",
    filename: "./product/Medal.html"
  },
  {
    data: {
      title: "Judging Safety Form - iGEM NCKU",
      url: "",
      img: "",
      description: "",
    	css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Layout_css" + typecss,
			cover: "/wiki/images/d/d6/T--NCKU_Tainan--Safety.png",
			ref3: "/wiki/images/6/6c/T--NCKU_Tainan--ref3.pdf",
			ref4: "/wiki/images/a/a1/T--NCKU_Tainan--ref4.pdf",
			image0: "/wiki/images/c/c4/T--NCKU_Tainan--safety5.png"
    },
    layout:  "./view/judging/safety.hbs",
    filename: "./product/Safety.html"
  }

 ];
