var typecss = '?ctype=text/css&action=raw';

module.exports = [
 {
    data: {
      title: "Software - iGEM NCKU",
      url: "",
      img: "",
      description: "",
    	css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Layout_css" + typecss,
			fig1: "/wiki/images/8/88/T--NCKU_Tainan--deviceSW1.png",
			fig2: "/wiki/images/c/c7/T--NCKU_Tainan--deviceSW2.png",
			fig3a: "/wiki/images/9/96/T--NCKU_Tainan--deviceSW3a.png",
			fig3b: "/wiki/images/6/65/T--NCKU_Tainan--deviceSW3b.png"
    },
    layout:  "./view/Device/software.hbs",
    filename: "./product/Software.html"
  },
  {
    data: {
      title: "Hardware - iGEM NCKU",
      url: "",
      img: "",
      description: "",
    	css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Layout_css" + typecss,
			fig1: "/wiki/images/1/10/T--NCKU_Tainan--deviceHW1.png",
			fig2: "/wiki/images/7/7a/T--NCKU_Tainan--deviceHW2.png",
			fig3: "/wiki/images/0/09/T--NCKU_Tainan--deviceHW3.png",
			fig4: "/wiki/images/9/97/T--NCKU_Tainan--deviceHW4.png",
			ref1: "/wiki/images/3/37/T--NCKU_Tainan--ref1.pdf",
			ref2: "/wiki/images/5/5a/T--NCKU_Tainan--ref2.pdf"
    },
    layout:  "./view/Device/hardware.hbs",
    filename: "./product/Hardware.html"
  },
  {
    data: {
      title: "Demonstrate - iGEM NCKU",
      url: "",
      img: "",
      description: "",
    	css: "/Team:NCKU_Tainan/css/T--NCKU_Tainan--Demo_css" + typecss,
			video2: "/wiki/images/5/55/T--NCKU_Tainan--UrineCollector.mp4",
    },
    layout:  "./view/Device/demonstrate.hbs",
    filename: "./product/Demonstrate.html"
  },
 ];

