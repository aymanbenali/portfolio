(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){e.exports=a(113)},105:function(e,t,a){},106:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),l=(a(105),a(81)),c=a(12),s=(a(106),a(170)),m=a(162),d=a(25),h=a(155),p=a(156),u=a(157),g=a(57),f=a(52),E=a.n(f),y=a(173),b=a(171),v=a(150),F=a(158),w=a(160),x=o.a.forwardRef((function(e,t){return o.a.createElement(v.a,Object.assign({direction:"up",ref:t},e))})),C=function(e){var t=e.state,a=e.handle,n=e.titleTheme;return o.a.createElement(y.a,{fullScreen:!0,open:t,onClose:a,TransitionComponent:x},o.a.createElement("div",{style:{backgroundColor:"#FFFFFF"}},o.a.createElement(h.a,null,o.a.createElement(p.a,null,o.a.createElement(u.a,{edge:"start",color:"inherit",onClick:a,"aria-label":"close"},o.a.createElement(E.a,null)),o.a.createElement(g.a,{variant:"h6"},"Contact me"))),o.a.createElement("div",{style:{marginTop:"100px",marginLeft:"20px",marginRight:"20px",padding:"30px"}},o.a.createElement(F.a,{container:!0,spacing:3},o.a.createElement(F.a,{item:!0,xs:12},o.a.createElement(g.a,{variant:"h3",style:n}," Thanks for taking the time to reach out. How can I help you today?")),o.a.createElement(F.a,{item:!0,xs:3}),o.a.createElement(F.a,{item:!0,xs:3},o.a.createElement(b.a,{id:"outlined-secondary",variant:"outlined",label:"Name"})),o.a.createElement(F.a,{item:!0,xs:3},o.a.createElement(b.a,{id:"outlined-secondary",variant:"outlined",label:"Email"})),o.a.createElement(F.a,{item:!0,xs:3}),o.a.createElement(F.a,{item:!0,xs:3}),o.a.createElement(F.a,{item:!0},o.a.createElement(b.a,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:14,style:{width:"226%"},variant:"outlined"})),o.a.createElement(F.a,{container:!0,justify:"center",alignItems:"stretch"},o.a.createElement(F.a,{item:!0,xs:2}),o.a.createElement(F.a,{item:!0,xs:4},o.a.createElement(w.a,{variant:"outlined",color:"primary",style:{borderStyle:"dotted",borderWidth:"5px",borderRadius:"25px"}},"Submit")))),o.a.createElement("br",null))))},T=a(72),D=a.n(T),j=function(e){var t=e.theme,a=o.a.useState(!1),n=Object(d.a)(a,2),r=n[0],i=n[1];return o.a.createElement("div",{style:{marginTop:"20px"}},o.a.createElement(C,{state:r,handle:function(){return i(!1)},titleTheme:t}),o.a.createElement(F.a,{container:!0,className:"resumeButton",justify:"center",alignItems:"stretch"},o.a.createElement(F.a,{item:!0,xs:2},o.a.createElement(w.a,{variant:"outlined",color:"primary",style:{borderStyle:"dotted",borderWidth:"5px",borderRadius:"25px"},href:D.a},"Resume")),o.a.createElement(F.a,{item:!0,xs:8}),o.a.createElement(F.a,{item:!0,xs:2},o.a.createElement(w.a,{variant:"outlined",color:"primary",style:{borderStyle:"dotted",borderWidth:"5px",borderRadius:"25px"},onClick:function(){return i(!0)}},"Say Hello"))))},k=a(73),S=a(74),O=a.n(S),B=function(e){var t=e.text;return Object(n.useEffect)((function(){k.a.timeline({loop:!1}).add({targets:".ml3 .letter",opacity:[0,1],easing:"easeInOutQuad",duration:2250,delay:function(e,t){return 150*(t+1)}})}),[]),o.a.createElement("h1",{className:O.a.ml3+" ml3"},t.split("").map((function(e,t){return o.a.createElement("span",{className:"letter",key:t},e)})))},W=function(e){var t=e.texts,a=e.theme;return o.a.createElement("div",{style:a.firestSalute},o.a.createElement(F.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},o.a.createElement("section",null,t.map((function(e){return o.a.createElement(B,{text:e})})))))},A=a(41),L=a.n(A),R=a(175),P=a(176),q=a(161),J=function(e){var t=e.chips,a=e.withTitle,n=e.isWhite,r=e.theme,i=r.typographyGreyColor,l=r.chips,c=l.withWhite,s=l.withoutWhite,m=l.div,d=l.orginize;return t?o.a.createElement("div",{style:m},a?o.a.createElement(g.a,{style:i}," Technologies: "):"",o.a.createElement("br",null),o.a.createElement("div",null,t.map((function(e){return o.a.createElement(P.a,{avatar:o.a.createElement(R.a,{style:{backgroundColor:"".concat(e.color)}},o.a.createElement("p",{style:i},e.name.charAt(0))),label:o.a.createElement("p",{style:n?c:s},e.name),clickable:!0,style:d,variant:"outlined"})})))):o.a.createElement(q.a,null)},M=function(e){var t=e.technologies,a=e.theme;return o.a.createElement("div",null,o.a.createElement("grid",{container:!0,direction:"column",justify:"center",alignItems:"stretch"},o.a.createElement(g.a,{style:a.description.text}," ",e.text," "),o.a.createElement(J,{chips:t,withTitle:!1,isWhite:!0,theme:a})))},N=a(75),I=a.n(N),H=function(e){var t=e.data,a=e.theme,n=t.description,r=t.technologies,i=n.split("."),l=a.description.text;return i.pop(),o.a.createElement("div",{class:"description"},o.a.createElement(L.a,{left:!0,cascade:!0},o.a.createElement("img",{src:I.a,alt:"avatar",className:"responsive"})),o.a.createElement("div",{class:"divDesc"},o.a.createElement(L.a,{right:!0,cascade:!0},o.a.createElement(g.a,{component:"div",class:"divTypo"},o.a.createElement("br",null),o.a.createElement(g.a,{variant:"h4",style:l},o.a.createElement("b",null," Hi I'm Ayman, Nice To Meet You ")),i.map((function(e){return o.a.createElement(g.a,{style:l}," ",e,". ")})),o.a.createElement(M,{theme:a,technologies:r,text:"Here are some of the most technologies i work with:"})))))},_=function(e){var t=e.titles,a=e.about,n=e.theme;return o.a.createElement("div",null,o.a.createElement(W,{texts:t,theme:n}),o.a.createElement(H,{data:a,theme:n}))},G=a(163),Y=a(165),Q=a(164),V=a(167),z=a(166),K=a(55),X=a.n(K),U=function(){var e="undefined"!==typeof window,t=Object(n.useState)({width:e?1200:window.innerWidth,height:e?800:window.innerHeight}),a=Object(d.a)(t,2),o=a[0],r=a[1];function i(){r({width:window.innerWidth,height:window.innerHeight})}return Object(n.useEffect)((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[]),o},Z=o.a.forwardRef((function(e,t){return o.a.createElement(v.a,Object.assign({direction:"up",ref:t},e))})),$=function(e){var t,a=e.state,n=e.handle,r=e.data,i=e.theme,l=U(),c=r.description,s=r.name,d=r.images,f=r.technologies;if(!c)return o.a.createElement("div",null);Array.isArray(c)?t=c:(t=c.split(".")).pop(),console.log(t);var b=l>1246?300:280;return o.a.createElement(X.a,null,o.a.createElement(y.a,{fullScreen:!0,open:a,onClose:n,TransitionComponent:Z},o.a.createElement("div",{style:{backgroundColor:"#FFFFFF"}},o.a.createElement(h.a,null,o.a.createElement(p.a,null,o.a.createElement(u.a,{edge:"start",color:"inherit",onClick:n,"aria-label":"close"},o.a.createElement(E.a,null)),o.a.createElement(g.a,{variant:"h6"},s))),o.a.createElement("div",{style:{borderStyle:"solid",borderColor:"#7510F7",borderRadius:"25px",marginTop:"100px",marginLeft:"20px",marginRight:"20px",padding:"30px"}},o.a.createElement(F.a,{container:!0,direction:l<1246?"column":"",justify:"center",alignItems:"stretch"},o.a.createElement(F.a,{item:!0,xs:3},o.a.createElement("img",{alt:"complex",src:d[0],width:b,height:"200"})),o.a.createElement(F.a,{item:!0},o.a.createElement(g.a,{style:i.typographyWhiteColor}," ",s," "),o.a.createElement(m.a,{maxWidth:"la"},t.map((function(e){return o.a.createElement(g.a,{style:i.typographyWhiteColor}," ","\u2713",e,"."," ")}))))),o.a.createElement("br",null),o.a.createElement(J,{chips:f,theme:i})))))},ee=function(e){var t=e.projects,a=e.theme,r=e.hasHeader,i=a.card.media,l=Object(n.useState)(!1),c=Object(d.a)(l,2),s=c[0],m=c[1],h=Object(n.useState)(!1),p=Object(d.a)(h,2),u=p[0],f=p[1],E=function(){return m(!1)};return o.a.createElement(X.a,null,o.a.createElement(F.a,{container:!0,class:"cards"},t.map((function(e){var t=e.description,n=e.name,l=e.images,c=e.startingTime,d=e.endingTime,h=e.job;return o.a.createElement(F.a,{item:!0},o.a.createElement($,{state:s,handle:E,data:u,theme:a}),o.a.createElement(G.a,{class:"card"},o.a.createElement(Q.a,{onClick:function(){return f(e),void m(!0)}},r&&o.a.createElement(Y.a,{title:h,subheader:"".concat(c," - ").concat(d)}),o.a.createElement(z.a,{style:i,image:l[0],title:"Contemplative Reptile"}),o.a.createElement(V.a,null,o.a.createElement(g.a,{noWrap:"true",gutterBottom:!0,variant:"h5",component:"h2"},n),o.a.createElement(g.a,{noWrap:"true",variant:"body2",color:"textSecondary",component:"p"},t)))))}))))},te=function(e){var t=e.data,a=e.theme,n=a.title,r=t.jobs,i=t.projects;return o.a.createElement("div",{style:{margin:"30px"},className:"projects"},o.a.createElement("div",{className:"professionalCarrer"},o.a.createElement(g.a,{component:"div"},o.a.createElement("div",null,o.a.createElement(g.a,{variant:"h4",style:n},"Professional career"),o.a.createElement(ee,{projects:r,theme:a,hasHeader:!0})))),o.a.createElement("div",{style:{marginTop:"20px"}},o.a.createElement(g.a,{variant:"h4",style:n},"Projects",o.a.createElement(L.a,null,o.a.createElement(ee,{projects:i,theme:a,hasHeader:!1})))))},ae=a(82),ne="'Roboto Condensed', sans-serif",oe=function(){var e=U().width;return Object(ae.a)({palette:{firestSalute:{color:"#7510F7"},chips:{div:{marginLeft:"20px"},withWhite:{color:"#FFFFFF"},withoutWhite:{color:"#141C3A"},orginize:{margin:5,color:"#FFFFFF"}},description:{grid:{marginTop:"7%"},mask:{backgroundColor:"#7510F7",height:"105%",borderRadius:"25px",marginLeft:"7%",width:e>1246?"120%":"90%"},text:{fontFamily:ne,color:"#F8F8F8",button:{textTransform:"none"},margin:"20px"}},card:{grid:{margin:"2%",maxWidth:e>1246?"100%":330,width:e>1246?"auto":""},media:{height:140,borderRadius:"20px"}},jobs:{mask:{padding:"20px"}},typographyWhiteColor:{fontFamily:ne,color:"#141C3A",button:{textTransform:"none"},marginLeft:"20px"},mask:{borderStyle:"solid",borderColor:"#7510F7",height:"105%",borderRadius:"25px"},typographyGreyColor:{fontFamily:ne,color:"#3A4756",button:{textTransform:"none"}},primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}})},re=a(168),ie=a(76),le=a.n(ie),ce=a(169),se=a(174),me=a(78),de=a.n(me),he=a(79),pe=a.n(he),ue=a(80),ge=a.n(ue),fe=Object(re.a)((function(e){return{fab:{margin:e.spacing(2)},title:{fontFamily:"'Roboto Condensed', sans-serif",color:"#FFFFFF",button:{textTransform:"none"},textAlign:"center"},absolute:{position:"absolute",bottom:e.spacing(2),right:e.spacing(3)}}})),Ee=function(){var e=fe();return o.a.createElement("div",null,o.a.createElement(F.a,null,o.a.createElement(g.a,{component:"div",style:{backgroundColor:"#7510F7",padding:"25px"}},o.a.createElement("div",{style:{marginLeft:"20%"}},o.a.createElement("img",{src:le.a,width:"70%",height:"70%",alt:""})),function(e){return o.a.createElement("div",null,o.a.createElement(F.a,{container:!0,justify:"center",alignItems:"stretch"},o.a.createElement(F.a,{item:!0,xs:3},o.a.createElement(se.a,{title:"Github","aria-label":"add",href:"https://github.com/aymanbenali"},o.a.createElement(ce.a,{style:{color:"#7510F7"},className:e.fab},o.a.createElement(de.a,null))),o.a.createElement(se.a,{title:"Github","aria-label":"add",href:"https://www.linkedin.com/in/ayman-benali"},o.a.createElement(ce.a,{style:{color:"#7510F7"},className:e.fab},o.a.createElement(pe.a,null))),o.a.createElement(se.a,{title:"Github","aria-label":"add",href:"https://www.facebook.com/ayman.benali.37"},o.a.createElement(ce.a,{style:{color:"#7510F7"},className:e.fab},o.a.createElement(ge.a,null))))))}(e),function(e){return o.a.createElement("div",{className:e.title},o.a.createElement(g.a,{variant:"h6"},"Ayman Benali \xa9 2020"))}(e))))},ye=a(56),be=function(){var e=ye.titles,t=ye.about;if(oe())return o.a.createElement("div",null,o.a.createElement(m.a,{maxWidth:"la"},o.a.createElement(s.a,null,o.a.createElement(j,{theme:oe().palette.title}),o.a.createElement(_,{titles:e,about:t,theme:oe().palette}),o.a.createElement(te,{data:ye,theme:oe().palette}))),o.a.createElement(Ee,null))},ve=function(e){return o.a.createElement(l.a,null,o.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/portfolio",component:be}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e){e.exports=JSON.parse('{"about":{"description":"My name is Ayman Benali, Informatics Engineer, graduate of the Faculty of Science and Technology in Tangier, Morocco.Passionate about computer science and agile software development, I always enjoy exploring and mastering new technologies with the goal of building innovative solutions for web and mobile platforms.I always strive to produce effective solutions to solve various problems by writing clean, high-quality, scalable and well-tested code. ","technologies":[{"name":"JavaScript (ES6+)","color":"#EFD81D"},{"name":"HTML & CSS","color":"#DD4B25"},{"name":"ReactJs","color":"#5CD2F3"},{"name":"Python","color":"#F7BD2F"},{"name":"Node.js","color":"#7FC728"},{"name":"TFLearn","color":"#F7BD2F"},{"name":"Scikit-Learn","color":"#F79100"}]},"jobs":[{"name":"Data Scientist Jr & FullStack Web Developer","startingTime":"Jul 2018","endingTime":"Nov 2020 . 2 yrs 5 mos","images":["https://i.suar.me/Gwgzq/l"],"job":"MyOpla Software Solutions","description":["Creation of a platform to set up a tool to control and accelerate for managing the database.","Creation of a platform to set up a tool to accelerate the integration of Fedex requests into Gescar ERP - Chabe Group","Energy Pack Tracking System - Green Yellow - Group Casino."],"technologies":[{"name":"ReactJs","color":"#5CD2F3"},{"name":"ExpressJs","color":"#7B7B7B"},{"name":"Docker","color":"#5CD2F3"},{"name":"MySQL","color":"#DD8A00"},{"name":"Node.js","color":"#7FC728"},{"name":"RestApi","color":"#F7BD2F"},{"name":"Git","color":"#F79100"}]},{"name":"Data Scientist Jr","startingTime":"Feb 2018","endingTime":"Jul 2018 . 5 month internship","images":["https://i.suar.me/AZrVN/l"],"job":"MyOpla Call Center","description":["Creation of an algorithmic and mathematical model for the analysis and the processing of the audio files in order to extract arguments necessary to convince the customers to continue their purchases."],"technologies":[{"name":"Shell","color":"#2C0A21"},{"name":"Pandas","color":"#120751"},{"name":"Hadoop","color":"#5CD2F3"},{"name":"Spacy","color":"#5CD2F3"},{"name":"NLTK","color":"#5CD2F3"},{"name":"Python","color":"#F7BD2F"},{"name":"Node.js","color":"#7FC728"},{"name":"TFLearn","color":"#F7BD2F"},{"name":"Scikit-Learn","color":"#F79100"}]},{"name":"Artificial Vision Developer ","startingTime":"Mar 2018","endingTime":"Mar 2019 . 1 yr","images":["https://i.suar.me/X0W5B/l"],"job":"FABLAB, FST Tangier","description":["Object detection using classifier-based systems and a learning model (YOLO <You Only Look Once>). Detection and estimation of markings (white lines) from a Kinect camera on the vehicle."],"technologies":[{"name":"Python","color":"#F7BD2F"},{"name":"OpenCv","color":"#0000F7"},{"name":"Pandas","color":"#120751"},{"name":"Tensorflow","color":"#F7BD2F"},{"name":"YOLO V2","color":"#F7BD2F"},{"name":"Openkinect","color":"#359C45"}]}],"projects":[{"name":"Face recognition system with only a picture","description":"Identifying known faces with their names, also detect strangers as unknown and implemented on a Raspberry Pi.","technologies":[{"name":"Python","color":"#F7BD2F"},{"name":"Sqlite3","color":"#120751"},{"name":"smtplib(gmail api)","color":"#D02F24"},{"name":"Tkinter","color":"#120751"},{"name":"face_recognition","color":"#120751"},{"name":"dlib","color":"#5AA157"},{"name":"OpenCv","color":"#0000F7"}],"images":["https://i.suar.me/xKQgr/m","https://i.suar.me/7AKjX/m"]},{"name":"Car Plate Detection System","description":"Detecting cars, detecting the plates position and extracting information from it (European plates).","short":"Identifying car plate with a surveillance camera.","technologies":[{"name":"Python","color":"#F7BD2F"},{"name":"OpenCv","color":"#0000F7"},{"name":"Pandas","color":"#120751"},{"name":"numpy","color":"#4B73C9"},{"name":"Tensorflow","color":"#F7BD2F"},{"name":"YOLO V2","color":"#F7BD2F"},{"name":"pytesseract","color":"#D02F24"},{"name":"openalpr","color":"#F7BD2F"},{"name":"Tkinter","color":"#F7BD2F"},{"name":"Sqlite3","color":"#F7BD2F"}],"images":["https://i.suar.me/zoQM4/m","https://i.suar.me/plvjv/l","https://i.suar.me/XO8rv/l","https://i.suar.me/na4Og/l"]},{"name":"Electric car project","description":"Object detection using classifier-based systems and a learning model (YOLO <You Only Look Once>). Detection and estimation of markings (white lines) from a Kinect camera on the vehicle.Creating a dashboard indicating the speed, the energy consumed, the battery level, the external temperature, time, speed, the circuit, the driving mode (autonomous / normal), the battery temperature.","short":"T\xdcB\u0130TAK Efficiency Challenge Electric Vehicle","technologies":[{"name":"Python","color":"#F7BD2F"},{"name":"OpenCv","color":"#0000F7"},{"name":"Pandas","color":"#120751"},{"name":"Tensorflow","color":"#F7BD2F"},{"name":"YOLO V2","color":"#F7BD2F"},{"name":"Openkinect","color":"#359C45"}],"images":["https://i.suar.me/YGwyJ/m","https://i.suar.me/zoQM4/m","https://i.suar.me/JMay7/m","https://i.suar.me/MMqEJ/m"]},{"name":"Electronic library management platform","description":"The project contains many advantages, including:.The ability to control books classified for a group of sections and languages.The ability to download books, comment on them, and like them.The ability to view the calendar and upcoming events added by the administration (such as book fairs, for example).The possibility of correspondence between members.The ability to add topics.Control all the features of the site.The same features are found on an Android app connected via API.","technologies":[{"name":"HTML & CSS","color":"#DD4B25"},{"name":"JavaScript","color":"#EFD81D"},{"name":"PHP","color":"#7377AD"},{"name":"Laravel","color":"#E73122"}],"images":["https://mostaql.hsoubcdn.com/uploads/385230-Wy3vp-1532440237-3.png","https://mostaql.hsoubcdn.com/uploads/385230-OoIjm-1532440237-4.png","https://mostaql.hsoubcdn.com/uploads/385230-pVldE-1532440237-5.png","https://mostaql.hsoubcdn.com/uploads/385230-7YgGU-1532440237-6.png","https://mostaql.hsoubcdn.com/uploads/385230-4CQeY-1532440238-7.png","https://mostaql.hsoubcdn.com/uploads/385230-7KWg6-1532440238-8.png","https://mostaql.hsoubcdn.com/uploads/385230-uFDY5-1532440239-12.png","https://mostaql.hsoubcdn.com/uploads/385230-B17wO-1532440239-2.png"]},{"name":"School or college administration web application","description":"School or college administration web application.The script can be administered by a school or college, so it provides many advantages to four types of users, which are:.The visitor who can view the main pages of the site, view basic information and contact the site\u2019s management.The student who enables the site to view the latest news related to the school or his class, so that each class has its own page, enables him to:.The professor can, through the site.","technologies":[{"name":"HTML & CSS","color":"#DD4B25"},{"name":"JavaScript","color":"#EFD81D"},{"name":"PHP","color":"#7377AD"},{"name":"Laravel","color":"#E73122"}],"images":["https://i.suar.me/na4px/l","https://i.suar.me/adMv9/l","https://i.suar.me/EXO74/l","https://i.suar.me/plvp9/l","https://i.suar.me/WNjvQ/l","https://i.suar.me/vj4pq/l","https://i.suar.me/L5xzx/l","https://i.suar.me/20GWW/l"]},{"name":"QR Code Reader and Generator","description":"The work is an Android application, programmed in Java in addition to the OpenCV library, the application extracts the content of the QR code captured by a camera and displays it on the screen, and if the QR code contains a link, it opens the link on the browser, and the application allows the possibility of generating a QR Code From a text or link and save it as an image or send it through various sharing methods.","technologies":[{"name":"C++","color":"#6195CB"},{"name":"OpenCv","color":"#0000F7"},{"name":"Android","color":"#6195CB"}],"images":["https://mostaql.hsoubcdn.com/uploads/385230-9vciV-1532266174-photo_2018-07-22_14-19-55.jpg","https://mostaql.hsoubcdn.com/uploads/385230-u51B8-1532266174-photo_2018-07-22_14-19-58.jpg","https://mostaql.hsoubcdn.com/uploads/385230-yVlaW-1532266174-photo_2018-07-22_14-19-52.jpg","https://mostaql.hsoubcdn.com/uploads/385230-yJjIT-1532266174-photo_2018-07-22_14-19-46.jpg","https://mostaql.hsoubcdn.com/uploads/385230-Jw52n-1532266175-photo_2018-07-22_14-19-43.jpg"]}],"titles":["Hello World \ud83d\udc4b","My name is Ayman Benali","Data Scientist Jr & Full Stack Web Developer."]}')},72:function(e,t,a){e.exports=a.p+"static/media/Ayman_CV_Eng.e6916e28.pdf"},74:function(e,t,a){e.exports={ml3:"greatthings_ml3__3Vb6Q"}},75:function(e,t,a){e.exports=a.p+"static/media/Ayman.bd533718.png"},76:function(e,t,a){e.exports=a.p+"static/media/quoteWhite.df1e2f2c.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.7ef3eb16.chunk.js.map