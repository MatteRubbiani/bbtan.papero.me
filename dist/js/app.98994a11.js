(function(e){function t(t){for(var i,c,r=t[0],a=t[1],l=t[2],b=0,A=[];b<r.length;b++)c=r[b],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&A.push(o[c][0]),o[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(A.length)A.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var a=n[r];0!==o[a]&&(i=!1)}i&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},s=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ducktan/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0214":function(e,t,n){e.exports=n.p+"img/fullScreen.f9a7f51c.png"},2826:function(e,t,n){"use strict";n("e8a9")},3383:function(e,t,n){"use strict";n("acd6")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function o(e,t,n,o,s,c){var r=Object(i["k"])("Game");return Object(i["g"])(),Object(i["b"])(r)}var s=Object(i["o"])("data-v-520a0624");Object(i["i"])("data-v-520a0624");var c={class:"home_wrapper"};Object(i["h"])();var r=s((function(e,t,o,s,r,a){var l=Object(i["k"])("UserHamburgerMenu"),u=Object(i["k"])("ActionsMenu"),b=Object(i["k"])("GameScene");return Object(i["g"])(),Object(i["b"])("div",c,[Object(i["e"])(l,{show:r.showHamburgerMenu,src:n("c749"),onToggleShow:t[1]||(t[1]=function(e){return r.showHamburgerMenu=e})},null,8,["show","src"]),Object(i["e"])(u,{"highest-score":r.game.highestScore},null,8,["highest-score"]),Object(i["e"])(b)])})),a=n("bc3a"),l=n.n(a),u=n("5502"),b=Object(u["a"])({state:{logged:-1,username:""},mutations:{SET_LOGGED:function(e,t){e.logged=t},SET_USERNAME:function(e,t){e.username=t}},actions:{setUsername:function(e,t){var n=e.commit;n("SET_USERNAME",t)},setLogged:function(e,t){var n=e.commit;n("SET_LOGGED",t)}}}),A=n("cf05"),d=n.n(A),h=Object(i["o"])("data-v-46b0159a");Object(i["i"])("data-v-46b0159a");var f={class:"user-hamburger-menu__menu"},g={key:0,class:"user-menu"},v=Object(i["d"])("Username: "),m={key:1,class:"user-menu"},U=Object(i["e"])("p",null,"You are currently not logged in",-1);Object(i["h"])();var p=h((function(e,t,n,o,s,c){return Object(i["g"])(),Object(i["b"])("div",{class:["user-hamburger-menu__main-panel",{hidden:!n.show}],onClick:t[6]||(t[6]=Object(i["n"])((function(){}),["stop"]))},[Object(i["e"])("div",{class:["user-hamburger-menu__icon",{rotated:n.show}],onClick:t[1]||(t[1]=function(){return c.toggleMenu&&c.toggleMenu.apply(c,arguments)})},[Object(i["e"])("img",{src:n.src,alt:"menu"},null,8,["src"])],2),Object(i["e"])("div",f,[Object(i["e"])("img",{class:"home-button",src:d.a,onClick:t[2]||(t[2]=function(){return c.redirectToHome&&c.redirectToHome.apply(c,arguments)}),alt:"Home"}),c.username?(Object(i["g"])(),Object(i["b"])("div",g,[Object(i["e"])("div",null,[Object(i["e"])("p",null,[v,Object(i["e"])("strong",null,Object(i["l"])(decodeURIComponent(c.username)),1)]),Object(i["e"])("button",{onClick:t[3]||(t[3]=function(){return c.logout&&c.logout.apply(c,arguments)})},"Logout")]),c.logged?Object(i["c"])("",!0):(Object(i["g"])(),Object(i["b"])("button",{key:0,class:"proceed-with-google",onClick:t[4]||(t[4]=function(){return c.redirectToGoogle&&c.redirectToGoogle.apply(c,arguments)})},"Activate sync with google"))])):(Object(i["g"])(),Object(i["b"])("div",m,[U,Object(i["e"])("button",{class:"proceed-with-google",onClick:t[5]||(t[5]=function(){return c.redirectToGoogle&&c.redirectToGoogle.apply(c,arguments)})},"Sign in now with google")]))])],2)})),w=n("d4ef"),F=n.n(w),V=function(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"arcade";return{type:F.a.AUTO,physics:{default:s,arcade:{debug:!1},matter:{debug:!1}},canvasStyle:"border: 2px solid white;",parent:t,width:n,height:i,scene:e,scaleMode:o}},R={width:800,height:1e3,blockWidth:100,blockHeight:100,bulletSpeed:1e3},k="https://papero.me",O={baseUrl:"https://papero.me",getLoginInfoUrl:k+"/user/get_info",createLocalAccountUrl:k+"/auth/local",logoutUrl:k+"/auth/logout",game:k+"/server/bbtan/game"},j=[6534552,13532536,15375984,10783390,13033960,6586743,1835877,1354157,5022457,10806335,13801698,6363600,13792125,12624956,15880462,6626278,7962734,6412894,13446912,9652399,109651,12952827,10053173,11605363,4961395,3096468,3111833,14325373,3442975,11589755,13256529,8278184,12899911,14741176,1171137,2660370,5663904,16767969,3084665,9657197,9529736,5324184,11447610,10382705,4938716,840557,2426466,13327338,2263318,11288091,14635338,5477271,8915319,16160705,12228302,6790301,13026348,6106194,4764699,14798651,6022384,5752024,10801530,140728,12476555,9875468,560047,15816895,14763450,15634915,381809,5514976,4732112,8397364,6769128,618992,9417747,11711728,12830877,13216065,4313432,16458147,5353177,6009645,526331,2184078,9033012,13854279,8369169,9144,3902506,9988947,16057378,9977722,15344803,7943468,5378640,13082322,14081426,14892626,11714135,16385772,1816217,7024223,6586895,115313,2184078,9033012,13854279,8369169,9144,3902506,9988947,16057378,9977722,15344803,7943468,5378640,13082322,14081426,14892626,11714135,16385772,1816217,7024223,6586895,115313,10270282,10054728,10140087,450642,14918785,964129,16532878,11721493,11149933,7941848,7571242,5377338,13565112,10859481,8199557,12909911,15838742,9429546,15691324,2375403,121880,14521341,4162675,15195086,4333433,8011155,6512493,9695959,10181674,1423854,1005975,4231560,9510432,1265870,1107377,16774359,13313410,13500606,3331542,94770,6325618,13081538,63612,7829290,6919610,16542551,15759381,9427075,396839,9889169,2217262,13631555,11825506,2015783,5181295,1908056,9728002,12443730,14715990,2686205,766107,3557482,13643305,1763035,4081228,11029135,9510526,4134617,1004127,11303946,11845766,13227824,3198025,4024145,16468995,6557633,6471742,13846842,8956427,4222457,6380272,310855,2765876,4871231,7978144,11057364,61396,8049206,7495896,1960615,455738,8535129,14932300,14425094,16071466,11821624,3014646,11021193,1736721,4418207,1736810,5042333,12683426,6810443,11733203,16547393,11481345,1044581,7451124,10680485,14826960,13846637,63481,4671635,3992629,1861067,6102284,2981162,16725024,6086023,10639780,14986308,1830374,8886436,14121231,11715151,14578626,14092956,154471,8972728,12759266,8841615,11440354,1736811,4418206,966911,16257715,11632585,9268271,13838202,2924974,9864683,9082566,14394086,7797787,6328228,2160314,514038,14477178,7859402];function B(){for(var e=[],t=0;t<4;t++){var n=parseInt(8*Math.random());e[n]?t--:e[n]={x:n,y:1,left:1,start:1}}var i=[];return e.forEach((function(e){e&&i.push(e)})),{level:1,spritePosition:3*R.blockWidth,blocks:i}}var S={name:"UserHamburgerMenu",props:{src:{required:!0},show:Boolean},computed:{logged:function(){return this.$store.state.logged},username:function(){return this.$store.state.username}},mounted:function(){var e=this;window.addEventListener("click",(function(){e.$emit("toggle-show",!1)}))},methods:{toggleMenu:function(){this.$emit("toggle-show",!this.show)},redirectToHome:function(){window.location.href="/"},redirectToGoogle:function(){var e=window.location;window.location.href="/auth/google?from_location="+e},logout:function(){l.a.get(O.logoutUrl)}}};n("2826");S.render=p,S.__scopeId="data-v-46b0159a";var y=S,L=n("af3a"),P=n.n(L),T=n("f773"),x=n.n(T),C=Object(i["o"])("data-v-27ec7ba6");Object(i["i"])("data-v-27ec7ba6");var H={class:"menu_wrapper_container"},Q=Object(i["e"])("img",{src:P.a,alt:""},null,-1),W={class:"menu_wrapper",id:"actions_menu"},J=Object(i["e"])("div",{class:"home_title"},[Object(i["e"])("img",{src:x.a,alt:"title"})],-1),E={class:"menu_container"},G={class:"level_info_wrapper"},z={class:"level_info_label"},Z={class:"restart_wrapper"},I=Object(i["e"])("div",{class:"quit_wrapper"},[Object(i["e"])("button",{class:"quit_button",id:"quit_button"},"Save & Quit")],-1);Object(i["h"])();var M=C((function(e,t,n,o,s,c){return Object(i["g"])(),Object(i["b"])("div",H,[Object(i["e"])("div",{class:"up-arrow-container",id:"arrow-container",onClick:t[1]||(t[1]=function(){return c.changeVisible&&c.changeVisible.apply(c,arguments)})},[Q]),Object(i["e"])("div",W,[J,Object(i["e"])("div",E,[Object(i["e"])("div",G,[Object(i["e"])("a",z,"Highest score: "+Object(i["l"])(n.highestScore),1)]),Object(i["e"])("div",Z,[Object(i["e"])("button",{class:"restart_button",onClick:t[2]||(t[2]=function(){return c.restartGame&&c.restartGame.apply(c,arguments)})},"Restart")]),I])])])})),N=(n("a9e3"),n("14b7"));window.mitt=window.mitt||new N["a"];var X={name:"ActionsMenu",props:{highestScore:Number},methods:{restartGame:function(){window.mitt.emit("restart"),document.getElementById("actions_menu").classList.remove("visible"),document.getElementById("quit_button").innerHTML="Save & Quit"},changeVisible:function(){var e=document.getElementById("actions_menu"),t=document.getElementById("arrow-container");e.classList.contains("visible")?(e.classList.remove("visible"),t.classList.remove("visible")):(e.classList.add("visible"),t.classList.add("visible"))}}};n("8d77");X.render=M,X.__scopeId="data-v-27ec7ba6";var q=X,D=n("0214"),K=n.n(D),Y=Object(i["o"])("data-v-034c8072");Object(i["i"])("data-v-034c8072");var _={class:"scene_wrapper-container",id:"parent-container"},$={class:"scene_wrapper",id:"parent"},ee=Object(i["e"])("img",{src:K.a,alt:"full screen"},null,-1);Object(i["h"])();var te=Y((function(e,t,n,o,s,c){return Object(i["g"])(),Object(i["b"])("div",_,[Object(i["e"])("div",$,[Object(i["e"])("div",{id:"fullScreenButton",class:"full-screen",onClick:t[1]||(t[1]=function(){return c.fullScreen&&c.fullScreen.apply(c,arguments)})},[ee])])])})),ne=n("d4ec"),ie=n("bee2"),oe=n("257e"),se=n("262e"),ce=n("2caf"),re=n("ade3");n("159b");window.mitt=window.mitt||new N["a"];var ae={font:"30px Arial",fill:"#000000",wordWrap:!0,wordWrapWidth:R.blockWidth,align:"left"},le=function(e){Object(se["a"])(n,e);var t=Object(ce["a"])(n);function n(e){var i;return Object(ne["a"])(this,n),i=t.call(this),Object(re["a"])(Object(oe["a"])(i),"nextFire",0),Object(re["a"])(Object(oe["a"])(i),"fireRate",100),Object(re["a"])(Object(oe["a"])(i),"fireX",0),Object(re["a"])(Object(oe["a"])(i),"fireY",0),Object(re["a"])(Object(oe["a"])(i),"gameOver",!1),i.raw_blocks=e.blocks,i.level=e.level,i.spritePosition=e.spritePosition,i.shooting=!1,i.bulletsKilled=0,i.bulletsShot=0,i}return Object(ie["a"])(n,[{key:"preload",value:function(){this.load.image("sprite","./sprite.png"),this.load.image("bullet","./bullet.png")}},{key:"create",value:function(){var e=this;this.graphics=this.add.graphics({lineStyle:{width:2,color:11141290}}),this.createGroups(),this.createBlocks(),this.sprite=this.physics.add.sprite(this.spritePosition,R.height-R.blockHeight/2,"sprite");var t=this.add.rectangle(R.width/2,R.height-R.blockHeight/4,R.width,R.blockHeight/2);this.bottomLines.add(t),this.physics.add.collider(this.bullets,this.blocks,(function(t,n){e.removeLifeFromBlock(n)})),this.physics.add.collider(this.bullets,this.bottomLines,(function(t){0===e.bulletsKilled&&(e.spritePosition=t.x),e.bulletsKilled++,e.bulletsKilled>=e.level&&e.newLevel(),t.destroy()})),this.input.on("pointerup",(function(){if(!e.shooting&&(e.shooting=!0,e.input.y<R.height-.5*R.blockHeight)){var t=R.height-R.blockHeight/2-e.input.y,n=e.input.x-e.spritePosition,i=t/n;i*i>.05&&(e.fireX=e.input.x,e.fireY=e.input.y)}})),this.checkGameEnded()}},{key:"update",value:function(){if(this.graphics.clear(),!this.gameOver){if(this.input.y>R.height-.5*R.blockHeight)return null;var e=R.height-R.blockHeight/2-this.input.y,t=this.input.x-this.spritePosition,n=e/t;if(n*n<.05)return null;this.shooting&&this.fire(),this.shooting||this.sprite.x===this.spritePosition||(this.sprite.x=this.spritePosition),0!==this.bulletsShot||this.shooting||(this.line=new w["Geom"].Line(this.spritePosition+28,R.height-R.blockHeight/2,this.input.x,this.input.y),this.graphics.strokeLineShape(this.line))}}},{key:"createGroups",value:function(){this.blocks=this.physics.add.group({collideWorldBounds:!0,immovable:!0}),this.bullets=this.physics.add.group({collideWorldBounds:!0,bounceX:1,bounceY:1}),this.bottomLines=this.physics.add.group({collideWorldBounds:!0,immovable:!0})}},{key:"createBlocks",value:function(){for(var e=0;e<this.raw_blocks.length;e++){var t=this.add.rectangle((this.raw_blocks[e].x+.5)*R.blockWidth,(this.raw_blocks[e].y+.5)*R.blockHeight,R.blockWidth,R.blockHeight,j[this.raw_blocks[e].start%j.length]),n=this.add.text((this.raw_blocks[e].x+.1)*R.blockWidth,(this.raw_blocks[e].y+.1)*R.blockHeight,this.raw_blocks[e].left,ae);t.left=this.raw_blocks[e].left,t.rawOriginBlock=this.raw_blocks[e],t.textBlock=n,this.blocks.add(t)}}},{key:"createBullet",value:function(e,t){var n=t-(R.height-R.blockHeight/2),i=e-(this.sprite.x+28),o=n/i,s=180*Math.atan(o)/3.1415;i<0&&(s=180+s);var c=this.physics.velocityFromAngle(s,R.bulletSpeed),r=c.x,a=c.y,l=this.bullets.create(this.sprite.x+28,R.height-R.blockHeight/2,"bullet");l.setVelocity(r,a)}},{key:"fire",value:function(){this.bulletsShot<this.level?this.time.now>this.nextFire&&(this.nextFire=this.time.now+this.fireRate,this.createBullet(this.fireX,this.fireY),this.bulletsShot++):this.shooting=!1}},{key:"removeLifeFromBlock",value:function(e){e.left--,e.textBlock.text=parseInt(e.textBlock.text)-1,e.rawOriginBlock.left--,e.left<=0&&(e.textBlock.text="",e.destroy())}},{key:"newLevel",value:function(){var e=this;this.level++,this.bulletsKilled=0,this.bulletsShot=0;var t=[];this.raw_blocks.forEach((function(n){n&&n.left>0&&(n.y++,t.push(n),n.y>=9&&(e.gameOver=!0)),n&&n.textBlock&&n.textBlock.destroy()})),this.raw_blocks=t;var n=this.generateRow(5,this.level);n.forEach((function(t){t&&e.raw_blocks.push(t)})),this.blocks.clear(!0),this.createBlocks(),this.saveToDb(),this.gameOver&&this.finishGame()}},{key:"checkGameEnded",value:function(){var e=this;this.raw_blocks.forEach((function(t){t&&t.left>0&&t.y>=9&&(e.gameOver=!0)})),this.gameOver&&this.finishGame()}},{key:"saveToDb",value:function(){var e={blocks:this.raw_blocks,level:this.level,position:this.spritePosition};l.a.post(O.game,e)}},{key:"generateRow",value:function(e,t){for(var n=[],i=0;i<e;i++){var o=parseInt(8*Math.random());n[o]?i--:n[o]={x:o,y:1,left:t,start:t}}return n}},{key:"finishGame",value:function(){document.getElementById("actions_menu").classList.add("visible"),document.getElementById("arrow-container").classList.add("visible"),document.getElementById("quit_button").innerHTML="Quit",document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}}]),n}(w["Scene"]);window.mitt=window.mitt||new N["a"];var ue={name:"GameScene",data:function(){return{inFullScreen:!1}},mounted:function(){var e=this,t=document.getElementById("parent");l.a.get(O.game).then((function(n){var i={level:n.data.level,spritePosition:n.data.position,blocks:n.data.blocks};n.data?e.gameScene=new F.a.Game(V(new le(i),t,R.width,R.height,F.a.Scale.FIT)):e.gameScene=new F.a.Game(V(new le(B()),t,R.width,R.height,F.a.Scale.FIT))})),window.mitt.on("restart",(function(){e.gameScene.destroy(!0),e.gameScene=new F.a.Game(V(new le(B()),t,R.width,R.height,F.a.Scale.FIT))}))},methods:{fullScreen:function(){var e=document.getElementById("parent-container"),t=document.getElementById("fullScreenButton");this.inFullScreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?(e.requestFullscreen(),t.requestFullscreen()):e.webkitRequestFullscreen?(e.webkitRequestFullscreen(),t.webkitRequestFullscreen()):e.msRequestFullscreen&&(e.msRequestFullscreen(),t.msRequestFullscreen()),this.inFullScreen=!this.inFullScreen}}};n("3383");ue.render=te,ue.__scopeId="data-v-034c8072";var be=ue,Ae={name:"Game",components:{GameScene:be,ActionsMenu:q,UserHamburgerMenu:y},data:function(){return{showHamburgerMenu:!1,game:{highestScore:0}}},methods:{createNewGame:function(){var e=[1,0,1,1,1];return{blocks:e,level:1}}},mounted:function(){var e=this;l.a.get(O.game).then((function(t){e.game=t.data?t.data:e.createNewGame()}))},beforeMount:function(){var e=this,t=function(){e.$forceUpdate()},n=function(){l.a.get(O.createLocalAccountUrl).then((function(e){b.dispatch("setLogged",!1),b.dispatch("setUsername",e.data.username),t()})).catch((function(){location.href=location.origin+"/error?from="+location.pathname}))};-1===b.state.logged||""===b.state.username?l.a.get(O.getLoginInfoUrl).then((function(e){e.data?(b.dispatch("setLogged",e.data.google_signed_in),b.dispatch("setUsername",e.data.username),t()):n()})).catch((function(){})):null===b.state.username&&!1===b.state.logged?n():t()}};n("b4ed");Ae.render=r,Ae.__scopeId="data-v-520a0624";var de=Ae,he={name:"App",components:{Game:de}};n("a5c2");he.render=o;var fe=he;Object(i["a"])(fe).use(b).mount("#app")},"7ebc":function(e,t,n){},"8d77":function(e,t,n){"use strict";n("ea89")},a5c2:function(e,t,n){"use strict";n("7ebc")},acd6:function(e,t,n){},af3a:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAACOlBMVEUAAAAAAACAgIBVVVVAQEBmZmZVVVVJSUlgYGBVVVVNTU1GRkZVVVVOTk5JSUlVVVVLS0tVVVVRUVFNTU1VVVVOTk5VVVVSUlJOTk5SUlJPT09VVVVSUlJQUFBQUFBRUVFOTk5RUVFPT09TU1NRUVFTU1NRUVFQUFBTU1NSUlJQUFBQUFBSUlJRUVFPT09SUlJRUVFPT09SUlJRUVFSUlJRUVFRUVFTU1NQUFBTU1NRUVFPT09SUlJRUVFSUlJRUVFQUFBSUlJRUVFQUFBSUlJRUVFQUFBRUVFRUVFQUFBRUVFQUFBSUlJRUVFQUFBSUlJRUVFQUFBSUlJQUFBSUlJRUVFRUVFSUlJRUVFRUVFRUVFQUFBSUlJRUVFQUFBQUFBSUlJSUlJRUVFSUlJRUVFSUlJRUVFQUFBRUVFRUVFQUFBSUlJSUlJRUVFRUVFSUlJRUVFSUlJRUVFSUlJRUVFRUVFRUVFRUVFQUFBRUVFRUVFQUFBRUVFSUlJSUlJRUVFRUVFSUlJRUVFQUFBRUVFRUVFQUFBRUVFQUFBRUVFRUVFRUVFRUVFRUVFRUVFRUVFSUlJRUVFRUVFRUVFQUFBRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFSUlJRUVFSUlJRUVFRUVFQUFBRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFSUlJRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFhXJimAAAAvXRSTlMAAQIDBAUGBwgJCgsMDQ4PERITFBUXGBkaHB0eHyAjJicpKissLi8wMTIzNjg5Ojs8PT4/QUJFR0lKTE1OT1FVVldYWVpbXF5hY2VmZ2hpamtsbW9wcXJzdHV3eXp7fH+Ag4WGiImLjI2Oj5OWl5iZm5yen6Cho6SlpqeoqayvsLGys7W2t7i6u7y+wMHCw8TFxsfKy83Q09TV1tfY2tvd3t/g4eLk5ebn6uvs7e7v8PHz9PX29/j5+vv8/f4irnzyAAAHJ0lEQVR42u3d6Z+WYxjH4XuammhTGjEqEZUtkrUohCg7kS277Hv2fSlblCzZQpL2Usgk9//mDd60zTPz9FzXfZ/H8R+c1/f3afZPRQEAAAAA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"},b4ed:function(e,t,n){"use strict";n("b52b")},b52b:function(e,t,n){},c749:function(e,t,n){e.exports=n.p+"img/hamburger_icon_dark.65809c1c.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.452bb9ec.png"},e8a9:function(e,t,n){},ea89:function(e,t,n){},f773:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.98994a11.js.map