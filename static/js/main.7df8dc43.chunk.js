(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(n,e,t){n.exports=t.p+"static/media/profile picture.efe46d1d.png"},31:function(n,e,t){n.exports=t.p+"static/media/markdown previewer.35544bbf.png"},32:function(n,e,t){n.exports=t.p+"static/media/product landing.3ea3b4f7.png"},33:function(n,e,t){n.exports=t.p+"static/media/random quote machine.a49bcf35.png"},34:function(n,e,t){n.exports=t.p+"static/media/survey form.d1ef6d03.png"},35:function(n,e,t){n.exports=t.p+"static/media/technical documentation.632c0521.png"},36:function(n,e,t){n.exports=t.p+"static/media/tribute page.c799d783.png"},38:function(n,e,t){n.exports=t(49)},49:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(18),o=t.n(i),c=t(1),u=t(9),l=t(16),s=t(12),p={message:"It's Working!"},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;switch((arguments.length>1?arguments[1]:void 0).type){case"DOSOMETHING":return Object(s.a)({},n,{message:"And it does one thing!"});default:return n}},m={show:!1},f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;switch((arguments.length>1?arguments[1]:void 0).type){case"SHOWABOUT":return Object(s.a)({},n,{show:!0});default:return n}},b={scrolled:!1},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;switch((arguments.length>1?arguments[1]:void 0).type){case"SCROLLHAPPENED":return Object(s.a)({},n,{scrolled:!0});default:return n}},x={menuopen:!1,iconhovered:!1},g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;switch((arguments.length>1?arguments[1]:void 0).type){case"MENUBURGERCLICKED":return Object(s.a)({},n,{menuopen:!n.menuopen});default:return n}},v=Object(l.b)({myReducer:d,displayAboutMe:f,displaySummary:h,headerHandler:g}),w=Object(l.c)(v),y=t(6),j=t(7),E=t(10),O=t(8),k=t(11),C=t(2),S=function(){return{type:"SHOWABOUT"}},I=function(){return{type:"SCROLLHAPPENED"}},z=t(4),M=t(5);function L(){var n=Object(c.a)(["\n  cursor: pointer;\n\n  :hover {\n    color: #283618;\n  }\n\n  @media (min-width: 700px) {\n    font-size: 28px;\n    margin: 0px 10px;\n  }\n"]);return L=function(){return n},n}function H(){var n=Object(c.a)(["\n  align-self: flex-start;\n  padding: 10px;\n  display: flex;\n  justify-content: space-around;\n  width: 100px;\n\n  @media (min-width: 700px) {\n    flex-direction: row;\n    margin-right: 20px;\n    align-self: center;\n  }\n"]);return H=function(){return n},n}function T(){var n=Object(c.a)(["\n  @media (min-width: 700px) {\n    align-self: center;\n    display: flex;\n    flex-direction: row;\n    margin-left: 10px;\n  }\n"]);return T=function(){return n},n}function D(){var n=Object(c.a)(["\n  transform: ",";\n\n  -webkit-transform: ",";\n"]);return D=function(){return n},n}function R(){var n=Object(c.a)(["\n  transform: ",";\n\n  -webkit-transform: ",";\n"]);return R=function(){return n},n}function A(){var n=Object(c.a)(["\n  transform: ",";\n\n  -webkit-transform: ",";\n"]);return A=function(){return n},n}function P(){var n=Object(c.a)(["\n  width: 25px;\n  height: 3px;\n  margin: 5px 0;\n  transition: 0.3s linear;\n  -webkit-transition: 0.3s linear;\n  -moz-transition: 0.3s linear;\n  -o-transition: 0.3s linear;\n\n  background-color: ",";\n"]);return P=function(){return n},n}function B(){var n=Object(c.a)(["\n  display: inline-block;\n  padding: 5px;\n  margin-left: 10px;\n  align-self: flex-start;\n\n  @media (min-width: 700px) {\n    display: none;\n  }\n"]);return B=function(){return n},n}function F(){var n=Object(c.a)(["\n  position: fixed;\n  background: #606c38;\n  width: 100%;\n  z-index: 9999;\n\n  display: flex;\n  justify-content: space-between;\n\n  transition: height 0.2s;\n\n  box-shadow: 1px 1px 5px;\n\n  height: ",";\n\n  @media (min-width: 700px) {\n    height: 50px;\n  }\n"]);return F=function(){return n},n}function _(){var n=Object(c.a)(["\n  display: ",";\n  flex-direction: column;\n  font-size: 20px;\n  @media (max-width: 699px) {\n    animation: "," 1s;\n  }\n  @media (min-width: 700px) {\n    display: flex;\n    flex-direction: row;\n    font-size: 20px;\n  }\n"]);return _=function(){return n},n}function W(){var n=Object(c.a)(["\nfrom { \n  opacity: 1; \n}\nto { \n  opacity: 0;\n}\n"]);return W=function(){return n},n}function N(){var n=Object(c.a)(["\nfrom { \n  opacity: 0; \n}\nto { \n  opacity: 1; \n}\n"]);return N=function(){return n},n}function G(){var n=Object(c.a)(["\n  cursor: pointer;\n  margin: 4px; 5px;\n  text-decoration:none;\n  color:black;\n  :hover {\n    color: #283618;\n  }\n\n  @media (min-width: 700px) {\n    margin: 0 8px;\n  }\n"]);return G=function(){return n},n}var U=C.b.a(G()),J=Object(C.c)(N()),V=Object(C.c)(W()),q=C.b.div(_(),function(n){return n.menuopen?"flex":"none"},function(n){return n.menuopen?J:V}),Y=C.b.nav(F(),function(n){return n.menuopen?"150px":"40px"}),K=C.b.div(B()),Q=C.b.div(P(),function(n){return n.menuopen,"black"}),Z=Object(C.b)(Q)(A(),function(n){return n.menuopen?"rotate(45deg) translate(4px, 7px)":"rotate(0deg) translate(0px, 0px)"},function(n){return n.menuopen?"rotate(45deg) translate(4px, 7px)":"rotate(0deg) translate(0px, 0px)"}),X=Object(C.b)(Q)(R(),function(n){return n.menuopen?"rotate(180deg) translate(2px, -15px)":"rotate(0deg) translate(0px, 0px)"},function(n){return n.menuopen?"rotate(180deg) translate(2px, -15px)":"rotate(0deg) translate(0px, 0px)"}),$=Object(C.b)(Q)(D(),function(n){return n.menuopen?"rotate(-45deg) translate(4px, -7.5px)":"rotate(0deg) translate(0px, 0px)"},function(n){return n.menuopen?"rotate(-45deg) translate(4px, -7.5px)":"rotate(0deg) translate(0px, 0px)"}),nn=C.b.div(T()),en=C.b.div(H()),tn=Object(C.b)(z.a)(L()),rn=function(n){function e(){return Object(y.a)(this,e),Object(E.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(k.a)(e,n),Object(j.a)(e,[{key:"render",value:function(){var n=this;return a.a.createElement(Y,{menuopen:this.props.menuopen},a.a.createElement(nn,null,a.a.createElement(K,{onClick:function(){return n.props.menuburgerclicked()}},a.a.createElement(Z,{menuopen:this.props.menuopen}),a.a.createElement(X,{menuopen:this.props.menuopen}),a.a.createElement($,{menuopen:this.props.menuopen})),a.a.createElement(q,{menuopen:this.props.menuopen},a.a.createElement(U,{onClick:function(){return n.props.showabout()},href:"#aboutsection"},"About Me"),a.a.createElement(U,{href:"#summarysection"},"Summary"),a.a.createElement(U,{href:"#projectsection"},"Projects"))),a.a.createElement(en,null,a.a.createElement(tn,{onClick:function(){return window.open("https://github.com/matthewmcintyre/")},icon:M.c,size:"lg"}),a.a.createElement(tn,{onClick:function(){return window.open("https://www.freecodecamp.org/matthewmcintyre")},icon:M.b,size:"lg"}),a.a.createElement(tn,{onClick:function(){return window.open("https://www.linkedin.com/in/matthew-mcintyre/")},icon:M.f,size:"lg"})))}}]),e}(r.Component),an={showabout:S,menuburgerclicked:function(){return{type:"MENUBURGERCLICKED"}}},on=Object(u.b)(function(n){return{show:n.displayAboutMe.show,menuopen:n.headerHandler.menuopen}},an)(rn);function cn(){var n=Object(c.a)(["\n  animation: "," 4s linear infinite;\n"]);return cn=function(){return n},n}function un(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 70px;\n"]);return un=function(){return n},n}function ln(){var n=Object(c.a)(["\n  font-size: 10px;\n  margin-right: 5px;\n"]);return ln=function(){return n},n}function sn(){var n=Object(c.a)(["\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n"]);return sn=function(){return n},n}function pn(){var n=Object(c.a)(["\n  font-size: 10px;\n  margin-left: 10px;\n"]);return pn=function(){return n},n}function dn(){var n=Object(c.a)(["\n  background: #606c38;\n  height: 30px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return dn=function(){return n},n}function mn(){var n=Object(c.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return mn=function(){return n},n}var fn=Object(C.c)(mn()),bn=C.b.footer(dn()),hn=C.b.p(pn()),xn=C.b.div(sn()),gn=C.b.p(ln()),vn=C.b.div(un()),wn=Object(C.b)(z.a)(cn(),fn),yn=function(n){function e(){return Object(y.a)(this,e),Object(E.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(k.a)(e,n),Object(j.a)(e,[{key:"render",value:function(){return a.a.createElement(bn,null,a.a.createElement(hn,null,"Matthew McIntyre, 2019"),a.a.createElement(xn,null,a.a.createElement(gn,null,"Created with:"),a.a.createElement(vn,null,a.a.createElement(wn,{icon:M.g}),a.a.createElement(z.a,{icon:M.a}),a.a.createElement(z.a,{icon:M.d}),a.a.createElement(z.a,{icon:M.e}))))}}]),e}(r.Component),jn=t(30),En=t.n(jn),On=t(14);function kn(){var n=Object(c.a)(["\n  position: absolute;\n  bottom: 5px;\n  font-size: 20px;\n  color: #606c38;\n  transition: 1.5s;\n  transition-delay: 4s;\n\n  animation: "," 2s linear infinite;\n\n  opacity: ",";\n"]);return kn=function(){return n},n}function Cn(){var n=Object(c.a)(["\n0%,\n20%,\n50%,\n80%,\n100% {\n  transform: translateY(0);\n}\n40% {\n  transform: translateY(-15px);\n}\n60% {\n  transform: translateY(-5px);\n}\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(c.a)(["\n  padding: 5px;\n  font-size: 15px;\n  transition: 1.5s;\n  transition-delay: 3.7s;\n  opacity: ",";\n"]);return Sn=function(){return n},n}function In(){var n=Object(c.a)(["\n  padding: 5px;\n  font-size: 18px;\n  transition: 1.5s;\n  transition-delay: 3s;\n  opacity: ",";\n"]);return In=function(){return n},n}function zn(){var n=Object(c.a)(["\n  padding: 5px;\n  font-size: 20px;\n  transition: 1.5s;\n  transition-delay: 2.3s;\n  opacity: ",";\n"]);return zn=function(){return n},n}function Mn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  flex-basis: 50%;\n  padding: 0px 20px;\n"]);return Mn=function(){return n},n}function Ln(){var n=Object(c.a)(["\n  width: 80%;\n  display: block;\n  align-self: center;\n  border: 1px solid black;\n\n  transition: 1s;\n  transition-delay: 1.3s;\n  opacity: ",";\n\n  @media (min-width: 700px) {\n    width: 70%;\n  }\n"]);return Ln=function(){return n},n}function Hn(){var n=Object(c.a)(["\n  flex-basis: 50%;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n"]);return Hn=function(){return n},n}function Tn(){var n=Object(c.a)(["\n  position: absolute;\n  height: 65vh;\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  @media (orientation: portrait) and (max-width: 1000px) {\n    top: 120px;\n  }\n\n  @media (orientation: landscape) {\n    justify-content: space-around;\n    flex-direction: row;\n  }\n\n  @media (min-width: 700px) {\n    justify-content: space-around;\n    flex-direction: row;\n  }\n"]);return Tn=function(){return n},n}function Dn(){var n=Object(c.a)(["\n  position: absolute;\n  cursor: pointer;\n  border-bottom: solid #606c38 5px;\n\n  transition: top 2s, width 0.5s;\n  border-bottom: solid #606c38 5px;\n  top: ",";\n  font-size: 25px;\n  text-align: center;\n\n  @media (min-width: 700px) {\n    top: ",";\n    font-size: 30px;\n    width: 185px;\n    :hover {\n      color: #002642;\n      width: 200px;\n    }\n  }\n"]);return Dn=function(){return n},n}function Rn(){var n=Object(c.a)(["\n  position: relative;\n  height: 100vh;\n  background: #fefae0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: background 2s ease-out 0.7s;\n"]);return Rn=function(){return n},n}var An=C.b.section(Rn()),Pn=C.b.h1(Dn(),function(n){return n.show?"55px":"50vh"},function(n){return n.show?"70px":"50vh"}),Bn=C.b.div(Tn()),Fn=C.b.div(Hn()),_n=C.b.img(Ln(),function(n){return n.show?"1":"0"}),Wn=C.b.div(Mn()),Nn=C.b.div(zn(),function(n){return n.show?"1":"0"}),Gn=C.b.div(In(),function(n){return n.show?"1":"0"}),Un=C.b.div(Sn(),function(n){return n.show?"1":"0"}),Jn=Object(C.c)(Cn()),Vn=Object(C.b)(z.a)(kn(),Jn,function(n){return n.show?"1":"0"}),qn=function(n){function e(){return Object(y.a)(this,e),Object(E.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(k.a)(e,n),Object(j.a)(e,[{key:"render",value:function(){var n=this;return a.a.createElement(An,{show:this.props.show,id:"aboutsection"},a.a.createElement(Bn,null,a.a.createElement(Fn,null,a.a.createElement(_n,{show:this.props.show,alt:"profile",src:En.a})),a.a.createElement(Wn,null,a.a.createElement(Nn,{show:this.props.show},"An aspiring Web Developer from New Zealand."),a.a.createElement(Gn,{show:this.props.show},"Self-taught, motivated, and dedicated to improving my skillset."),a.a.createElement(Un,{show:this.props.show},"Relocated to London and open to all opportunities."))),a.a.createElement(Pn,{onClick:function(){return n.props.showabout()},show:this.props.show},"Hi, I'm Matt."),a.a.createElement(Vn,{icon:On.a,show:this.props.show}))}}]),e}(r.Component),Yn={showabout:S},Kn=Object(u.b)(function(n){return{show:n.displayAboutMe.show}},Yn)(qn);function Qn(){var n=Object(c.a)(["\n  font-size: 12px;\n  padding: 5px 30px;\n  align-self: flex-start;\n\n  @media (min-width: 700px) {\n    font-size: 15px;\n    padding: 0px 30px;\n  }\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(c.a)(["\n  font-size: 14px;\n  padding: 5px;\n  align-self: flex-start;\n\n  @media (min-width: 700px) {\n    font-size: 17px;\n    padding: 10px;\n  }\n"]);return Zn=function(){return n},n}function Xn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 80%;\n"]);return Xn=function(){return n},n}function $n(){var n=Object(c.a)(["\n  font-size: 16px;\n  padding: 5px;\n  font-weight: bold;\n  text-decoration: underline;\n\n  @media (min-width: 700px) {\n    font-size: 19px;\n  }\n"]);return $n=function(){return n},n}function ne(){var n=Object(c.a)(["\n  font-size: 27px;\n  padding: 5px;\n"]);return ne=function(){return n},n}function ee(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  background-color: #99c29d;\n  border: 3px solid #717171;\n  padding: 5px;\n  @media (min-width: 700px) {\n    padding: 15px; 10px;\n  }\n"]);return ee=function(){return n},n}var te=C.b.div(ee()),re=Object(C.b)(z.a)(ne()),ae=C.b.div($n()),ie=C.b.div(Xn()),oe=C.b.div(Zn()),ce=C.b.div(Qn());var ue=function(n){return a.a.createElement(te,null,a.a.createElement(re,{icon:n.icon}),a.a.createElement(ae,null,n.title),a.a.createElement(ie,null,a.a.createElement(oe,null,n.contentIntro),a.a.createElement(ce,null,n.contentList)))};function le(){var n=Object(c.a)(["\n  padding: 0px 5px;\n"]);return le=function(){return n},n}function se(){var n=Object(c.a)(["\n  color: #ccc;\n  background: darkgreen;\n  border: 2px solid #777;\n  border-radius: 6px;\n  padding: 8px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: 0.5s;\n  text-align: center;\n  margin: 5px;\n\n  :hover {\n    color: #333333;\n    background: #ccc;\n  }\n"]);return se=function(){return n},n}function pe(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  padding: 20px 0px;\n  flex-direction: column;\n\n  @media (min-width: 700px) {\n    flex-direction: row;\n    padding: 20px;\n  }\n"]);return pe=function(){return n},n}function de(){var n=Object(c.a)(["\n  display: grid;\n  justify-content: space-around;\n\n  grid-template-columns: repeat(1, 90%);\n  grid-template-rows: repeat(4, 300px);\n\n  grid-gap: 40px;\n\n  @media (min-width: 700px) {\n    grid-template-columns: repeat(4, 23%);\n    grid-template-rows: repeat(1, auto);\n    grid-gap: 0px;\n  }\n"]);return de=function(){return n},n}function me(){var n=Object(c.a)(["\n  text-align: center;\n  text-decoration: underline;\n"]);return me=function(){return n},n}function fe(){var n=Object(c.a)(["\n  padding: 10px;\n"]);return fe=function(){return n},n}function be(){var n=Object(c.a)(["\n  align-self: center;\n  width: 90%;\n  background-color: #7b6771;\n  padding: 10px;\n  border: 3px solid #5a5a5a;\n  font-size: 14px;\n\n  @media (min-width: 700px) {\n    margin: 20px;\n    font-size: 15px;\n    width: 80%;\n  }\n"]);return be=function(){return n},n}function he(){var n=Object(c.a)(["\n  height: 1800px;\n  background: #dadada;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 0px 10px;\n\n  @media (min-width: 700px) {\n    height: 100vh;\n    padding: 0px 20px;\n  }\n"]);return he=function(){return n},n}var xe=C.b.section(he()),ge=C.b.div(be()),ve=C.b.p(fe()),we=C.b.p(me()),ye=C.b.div(de()),je=a.a.createElement("ul",null,a.a.createElement("li",null,"HTML"),a.a.createElement("li",null,"CSS"),a.a.createElement("li",null,"Mobile Responsive"),a.a.createElement("li",null,"JavaScript"),a.a.createElement("li",null,"React"),a.a.createElement("li",null,"Styled-Components"),a.a.createElement("li",null,"Redux")),Ee=a.a.createElement("ul",null,a.a.createElement("li",null,"GitHub"),a.a.createElement("li",null,"GitHub Pages"),a.a.createElement("li",null,"NPM"),a.a.createElement("li",null,"VSCode"),a.a.createElement("li",null,"MacOS"),a.a.createElement("li",null,"Windows"),a.a.createElement("li",null,"Chrome Dev Tools")),Oe=C.b.div(pe()),ke=C.b.div(se()),Ce=Object(C.b)(z.a)(le()),Se=function(n){function e(){return Object(y.a)(this,e),Object(E.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(k.a)(e,n),Object(j.a)(e,[{key:"render",value:function(){return a.a.createElement(xe,{id:"summarysection"},a.a.createElement(ye,null,a.a.createElement(ue,{icon:On.b,title:"Front End Skills",contentIntro:"My goal over the past 3 months of directed learning has been to start building my projects with a Front End Framework. I chose React. Below is what I have focused on learning so far:",contentList:je}),a.a.createElement(ue,{icon:On.d,title:"Development Toolbox",contentIntro:'As an Apple "Enthusiast", I do all of my development on my MacBook using Visual Studio Code. I am expanding my skillset by directing my learning towards Webpack, Babel, and Jest. This is my currently what I work with:',contentList:Ee}),a.a.createElement(ue,{icon:On.e,title:"Me",contentIntro:"I come from humble beginnings of softmodding consoles, building computers and managing private gaming servers. My ambition is to become a Full Stack Developer who will work on a diverse range of projects used by millions of people. I have relocated to London in order to experience Europe and pursue exciting career opportunities."}),a.a.createElement(ue,{icon:On.c,title:"Experience",contentIntro:"After much deliberation around when to make this career transition, I pulled the trigger at the end of January and the rest is history. I have spent countless hours honing my Front End Development skills with an intensive focus and I am ready for the next step. My projects are all published on GitHub and my previous work experience in IT Support is outlined on my LinkedIn."})),a.a.createElement(ge,null,a.a.createElement(ve,null,"I have structured my learning through freeCodeCamp's Front End Developer Course. In order to complete each certificate I have had to produce a number of projects that adhere to requirements outlined by freeCodeCamp. So far I have earned two Certificates and am close to finishing my third."),a.a.createElement(Oe,null,a.a.createElement(ke,{onClick:function(){return window.open("https://www.freecodecamp.org/certification/matthewmcintyre/responsive-web-design")}},a.a.createElement(Ce,{icon:M.b}),"Responsive Web Design"),a.a.createElement(ke,{onClick:function(){return window.open("https://www.freecodecamp.org/certification/matthewmcintyre/javascript-algorithms-and-data-structures")}},a.a.createElement(Ce,{icon:M.b}),"Algorithms and Data Structures")),a.a.createElement(we,null,"Check out some of my Front End projects below!")))}}]),e}(r.Component),Ie={scrollhappened:I},ze=Object(u.b)(function(n){return{scrolled:n.displaySummary.scrolled}},Ie)(Se),Me=t(31),Le=t.n(Me),He=t(32),Te=t.n(He),De=t(33),Re=t.n(De),Ae=t(34),Pe=t.n(Ae),Be=t(35),Fe=t.n(Be),_e=t(36),We=t.n(_e);function Ne(){var n=Object(c.a)(["\n  width: 100%;\n  display: block;\n  border: 1px solid black;\n  margin-bottom: 10px;\n  transition: 1s;\n"]);return Ne=function(){return n},n}function Ge(){var n=Object(c.a)(["\n  cursor: pointer;\n  background: #606c38;\n  border-radius: 2px;\n  padding: 5px;\n  box-shadow: 1px 2px 4px;\n\n  :hover {\n    -webkit-transform: translate(1px, 1px);\n    transform: translate(1px, 1px);\n    box-shadow: 1px 1px 3px;\n  }\n"]);return Ge=function(){return n},n}function Ue(){var n=Object(c.a)(["\n  position: absolute;\n  top: 60%;\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n"]);return Ue=function(){return n},n}function Je(){var n=Object(c.a)(["\n  position: absolute;\n  top: 15%;\n"]);return Je=function(){return n},n}function Ve(){var n=Object(c.a)(["\n  text-align: center;\n"]);return Ve=function(){return n},n}function qe(){var n=Object(c.a)(["\n  opacity: 0;\n  transition: 1s;\n  display: flex;\n  justify-content: center;\n"]);return qe=function(){return n},n}function Ye(){var n=Object(c.a)(["\n  :hover img {\n    opacity: 0.1;\n  }\n\n  :hover div {\n    opacity: 1;\n  }\n"]);return Ye=function(){return n},n}function Ke(){var n=Object(c.a)(["\n  display: block;\n  justify-self: center;\n  object-fit: cover;\n  transition: 1s;\n  position: relative;\n"]);return Ke=function(){return n},n}var Qe=C.b.div(Ke()),Ze=C.b.div(Ye()),Xe=C.b.div(qe()),$e=C.b.p(Ve()),nt=C.b.p(Je()),et=C.b.div(Ue()),tt=C.b.div(Ge()),rt=C.b.img(Ne());var at=function(n){return a.a.createElement(Qe,null,a.a.createElement(Ze,null,a.a.createElement(rt,{src:n.src}),a.a.createElement(Xe,null,a.a.createElement(nt,null,"Built With: ",n.stack),a.a.createElement(et,null,a.a.createElement(tt,{onClick:function(){return window.open("https://matthewmcintyre.github.io/"+n.id)}},"View Live"),a.a.createElement(tt,{onClick:function(){return window.open("https://github.com/matthewmcintyre/"+n.id)}},"View Source")))),a.a.createElement($e,null,n.name))};function it(){var n=Object(c.a)(["\n  display: grid;\n  align-self: center;\n  height: 100%;\n  justify-content: center;\n  align-content: space-around;\n\n  padding: 10px;\n  grid-template-columns: repeat(1, 80%);\n  grid-template-rows: repeat(6, auto);\n\n  @media (orientation: landscape) {\n    grid-template-columns: repeat(2, 35%);\n    grid-template-rows: repeat(3, 20%);\n    justify-content: space-evenly;\n  }\n\n  @media (min-width: 700px) {\n    grid-template-columns: repeat(2, 35%);\n    grid-template-rows: repeat(3, 20%);\n    justify-content: space-evenly;\n  }\n"]);return it=function(){return n},n}function ot(){var n=Object(c.a)(["\n  height: 200vh;\n  background: #fefae0;\n  display: flex;\n  justify-content: center;\n\n  @media (min-width: 700px) {\n    height: 150vh;\n  }\n"]);return ot=function(){return n},n}var ct=C.b.section(ot()),ut=C.b.div(it()),lt=function(n){function e(){return Object(y.a)(this,e),Object(E.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(k.a)(e,n),Object(j.a)(e,[{key:"render",value:function(){return a.a.createElement(ct,null,a.a.createElement(ut,{id:"projectsection"},a.a.createElement(at,{src:Le.a,name:"Markdown Previewer",stack:"HTML/CSS",id:"markdown_previewer"}),a.a.createElement(at,{src:Te.a,name:"Product Landing",stack:"HTML/CSS",id:"Product_Landing_Page"}),a.a.createElement(at,{src:Re.a,name:"Random Quote Machine",stack:"React/CSS",id:"random_quote_machine"}),a.a.createElement(at,{src:Pe.a,name:"Survey Form",stack:"HTML/CSS",id:"Survey_Form"}),a.a.createElement(at,{src:Fe.a,name:"Technical Documentation",stack:"HTML/CSS",id:"Technical_Documentation_Page"}),a.a.createElement(at,{src:We.a,name:"Tribute Page",stack:"HTML/CSS",id:"Tribute_Page"})))}}]),e}(r.Component),st={scrollhappened:I},pt=Object(u.b)(function(n){return{scrolled:n.displaySummary.scrolled}},st)(lt);function dt(){var n=Object(c.a)(["\n\n@import url('https://fonts.googleapis.com/css?family=Bitter');\n\n  body {\n    background: #fefae0;\n    font-family: 'Bitter', serif;\n   \n  }\n  * {\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n  }\n"]);return dt=function(){return n},n}var mt=Object(C.a)(dt()),ft=function(){return a.a.createElement(u.a,{store:w},a.a.createElement(mt,null),a.a.createElement(on,null),a.a.createElement(Kn,null),a.a.createElement(ze,null),a.a.createElement(pt,null),a.a.createElement(yn,null))};o.a.render(a.a.createElement(ft,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.7df8dc43.chunk.js.map