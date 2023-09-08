(function(){"use strict";var e={597:function(e,a,t){var i=t(963),c=t(252);function n(e,a,t,i,n,o){const s=(0,c.up)("Home");return(0,c.wg)(),(0,c.j4)(s)}const o={class:"main"};function s(e,a,t,i,n,s){const d=(0,c.up)("Navbar"),r=(0,c.up)("Head"),l=(0,c.up)("AboutMe"),v=(0,c.up)("Skills"),p=(0,c.up)("Projects");return(0,c.wg)(),(0,c.iD)("div",o,[(0,c.Wm)(d),(0,c.Wm)(r),(0,c.Wm)(l),(0,c.Wm)(v),(0,c.Wm)(p)])}const d=e=>((0,c.dD)("data-v-26234b30"),e=e(),(0,c.Cn)(),e),r={class:"navbar"},l=d((()=>(0,c._)("span",{class:"material-symbols-outlined"}," home ",-1))),v=d((()=>(0,c._)("span",{class:"material-symbols-outlined"}," data_object ",-1))),p=d((()=>(0,c._)("span",{class:"material-symbols-outlined"}," receipt_long ",-1)));function u(e,a,t,i,n,o){return(0,c.wg)(),(0,c.iD)("nav",r,[(0,c._)("a",{onClick:a[0]||(a[0]=e=>o.scrollToSection("home"))},[l,(0,c.Uk)(" Home ")]),(0,c._)("a",{onClick:a[1]||(a[1]=e=>o.scrollToSection("skills"))},[v,(0,c.Uk)(" Tech ")]),(0,c._)("a",{onClick:a[2]||(a[2]=e=>o.scrollToSection("projects"))},[p,(0,c.Uk)(" Projects ")])])}var m={name:"Navbar",methods:{scrollToSection(e){const a=document.getElementById(e);a&&a.scrollIntoView({behavior:"smooth"})}}},g=t(744);const f=(0,g.Z)(m,[["render",u],["__scopeId","data-v-26234b30"]]);var h=f,k=t.p+"img/linkedin.8669e37f.svg",b=t.p+"img/github.66047a2c.svg";const w=e=>((0,c.dD)("data-v-6ce8e570"),e=e(),(0,c.Cn)(),e),y={class:"head",id:"home"},j={class:"info"},_=w((()=>(0,c._)("div",{class:"name"},[(0,c.Uk)(" Hi, I am "),(0,c._)("p",null,"Ritik Sharma")],-1))),x=w((()=>(0,c._)("div",{class:"about"}," An enthusiastic and self-driven individual who likes working in diverse environments and taking up vast challenges. A determined computer science graduate looking for opportunities to use my knowledge and enhance my skills in order to drive results and make a substantial contribution to a business. ",-1))),S={class:"contact"},P=(0,c.uE)('<a href="../assets/Ritik_Sharma_Resume.pdf" download="Ritik_Sharma_Resume.pdf" data-v-6ce8e570><button id="contact-me" data-v-6ce8e570>CV</button></a><div class="links" data-v-6ce8e570><a href="https://www.linkedin.com/in/ritikxsharma/" target="blank" data-v-6ce8e570><img id="icon" src="'+k+'" alt="in" data-v-6ce8e570></a><a href="https://github.com/ritikxsharma" target="blank" data-v-6ce8e570><img id="icon" src="'+b+'" alt="git" data-v-6ce8e570></a></div>',2);function C(e,a,t,i,n,o){return(0,c.wg)(),(0,c.iD)("section",y,[(0,c._)("div",j,[_,x,(0,c._)("div",S,[(0,c._)("button",{id:"contact-me",onClick:a[0]||(a[0]=(...e)=>o.showLinks&&o.showLinks(...e))},"Contact"),P])])])}var T={name:"Head",methods:{showLinks(){const e=document.querySelector(".links");e.style.display="flex",setTimeout((()=>{e.style.display="none"}),5e3)}}};const N=(0,g.Z)(T,[["render",C],["__scopeId","data-v-6ce8e570"]]);var O=N,D=t.p+"img/express.1978c3d3.png";const I={class:"skills-container",id:"skills"},L=(0,c.uE)('<div class="desc" data-v-03c38c40><p data-v-03c38c40>My Top Skills</p></div><div class="skills" data-v-03c38c40><div class="card" id="java" data-v-03c38c40><img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_logo_icon_146458.png" alt="" data-v-03c38c40></div><div class="card" id="python" data-v-03c38c40><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="" data-v-03c38c40></div><div class="card" id="JavaScript" data-v-03c38c40><img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="" data-v-03c38c40></div><div class="card" id="NodeJS" data-v-03c38c40><img src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png" alt="" data-v-03c38c40></div><div class="card" id="ExpressJS" data-v-03c38c40><img src="'+D+'" alt="" data-v-03c38c40></div><div class="card" id="NodeJS" data-v-03c38c40><img src="https://vuejs.org/images/logo.png" alt="" data-v-03c38c40></div><div class="card" id="NodeJS" data-v-03c38c40><img src="https://ojt.com/wp-content/uploads/2021/08/sql.png" alt="" data-v-03c38c40></div></div>',2),H=[L];function E(e,a,t,i,n,o){return(0,c.wg)(),(0,c.iD)("section",I,H)}var R={name:"Skills"};const A=(0,g.Z)(R,[["render",E],["__scopeId","data-v-03c38c40"]]);var J=A,M=t.p+"img/contacts-manager.db91f56d.svg",U=t.p+"img/todo.a91e03c0.svg",W=t.p+"img/nlp.14b0f852.svg";const Z={class:"projects-section",id:"projects"},F=(0,c.uE)('<div class="desc" data-v-e9e24c8e><p data-v-e9e24c8e>PROJECTS</p></div><div class="projects" data-v-e9e24c8e><article data-v-e9e24c8e><div class="project-wrapper" data-v-e9e24c8e><div class="front" data-v-e9e24c8e><figure data-v-e9e24c8e><img src="'+M+'" alt="" data-v-e9e24c8e></figure><div class="project-body" data-v-e9e24c8e><h3 data-v-e9e24c8e>Contacts Manager</h3></div></div><div class="back" data-v-e9e24c8e><ul data-v-e9e24c8e><li data-v-e9e24c8e>Working on a Contact Manager Project</li><li data-v-e9e24c8e>Utilizing Node.js and Express.js to handle API requests</li><li data-v-e9e24c8e>CRUD functionalities to efficiently create, retrieve, update and delete contact records.</li><li data-v-e9e24c8e>Leveraging MongoDB for data storage and retrieval of contact information</li><li data-v-e9e24c8e>Front-end design and layout with Vue.js</li></ul><a href="https://github.com/ritikxsharma/contactManager" target="blank" data-v-e9e24c8e><span class="material-symbols-outlined" data-v-e9e24c8e> link </span></a></div></div></article><article data-v-e9e24c8e><div class="project-wrapper" data-v-e9e24c8e><div class="front" data-v-e9e24c8e><figure data-v-e9e24c8e><img src="'+U+'" alt="" data-v-e9e24c8e></figure><div class="project-body" data-v-e9e24c8e><h3 data-v-e9e24c8e>TO-DO List</h3></div></div><div class="back" data-v-e9e24c8e><ul data-v-e9e24c8e><li data-v-e9e24c8e>Developed web application for to-do lists</li><li data-v-e9e24c8e>Implemented CRUD funcationalities to manage tasks, enabling users to add, view, edit and delete tasks </li><li data-v-e9e24c8e>Front-end development using HTML, CSS and JavaScript.</li></ul><a href="https://github.com/ritikxsharma/Todo-Flask" target="blank" data-v-e9e24c8e><span class="material-symbols-outlined" data-v-e9e24c8e> link </span></a></div></div></article><article data-v-e9e24c8e><div class="project-wrapper" data-v-e9e24c8e><div class="front" data-v-e9e24c8e><figure data-v-e9e24c8e><img src="'+W+'" alt="" data-v-e9e24c8e></figure><div class="project-body" data-v-e9e24c8e><h3 data-v-e9e24c8e>Intelligent Text Analyser (NLP)</h3></div></div><div class="back" data-v-e9e24c8e><ul data-v-e9e24c8e><li data-v-e9e24c8e>The project showcases the multifaceted capabilities of Natural Language Processing (NLP) and its potential to transform how we interact with textual data. </li><li data-v-e9e24c8e>The project leveraged Natural Language Processing (NLP) functionalities to determine sentiment polarity, classify spam emails, extract key topics from text, generate a text summary </li><li data-v-e9e24c8e>Also created a web application for the project using Flask.</li></ul></div></div></article></div>',2),q=[F];function V(e,a,t,i,n,o){return(0,c.wg)(),(0,c.iD)("section",Z,q)}var z={name:"Projects"};const B=(0,g.Z)(z,[["render",V],["__scopeId","data-v-e9e24c8e"]]);var G=B,K={name:"Home",components:{Navbar:h,Head:O,Skills:J,Projects:G}};const Q=(0,g.Z)(K,[["render",s],["__scopeId","data-v-aedf8a0a"]]);var X=Q,Y={name:"App",components:{Home:X}};const $=(0,g.Z)(Y,[["render",n]]);var ee=$,ae=t(636),te=t(810),ie=t(24);ae.vI.add(ie.hwn,ie.zhw),(0,i.ri)(ee).component("font-awesome-icon",te.GN).mount("#app")}},a={};function t(i){var c=a[i];if(void 0!==c)return c.exports;var n=a[i]={exports:{}};return e[i](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(a,i,c,n){if(!i){var o=1/0;for(l=0;l<e.length;l++){i=e[l][0],c=e[l][1],n=e[l][2];for(var s=!0,d=0;d<i.length;d++)(!1&n||o>=n)&&Object.keys(t.O).every((function(e){return t.O[e](i[d])}))?i.splice(d--,1):(s=!1,n<o&&(o=n));if(s){e.splice(l--,1);var r=c();void 0!==r&&(a=r)}}return a}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[i,c,n]}}(),function(){t.d=function(e,a){for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/portfolio/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,i){var c,n,o=i[0],s=i[1],d=i[2],r=0;if(o.some((function(a){return 0!==e[a]}))){for(c in s)t.o(s,c)&&(t.m[c]=s[c]);if(d)var l=d(t)}for(a&&a(i);r<o.length;r++)n=o[r],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(l)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(597)}));i=t.O(i)})();
//# sourceMappingURL=app.08416651.js.map