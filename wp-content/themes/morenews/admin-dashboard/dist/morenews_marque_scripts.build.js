!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=72)}({72:function(e,t){var i;(i=jQuery).fn.marquee=function(e){return this.each((function(){var t,n,r,a,s,o=i.extend({},i.fn.marquee.defaults,e),u=i(this),d=3,p="animation-play-state",l=!1,c=function(e,t,i){for(var n=["webkit","moz","MS","o",""],r=0;r<n.length;r++)n[r]||(t=t.toLowerCase()),e.addEventListener(n[r]+t,i,!1)},f=function(){u.timer=setTimeout(V,o.delayBeforeStart)},m={pause:function(){l&&o.allowCss3Support?t.css(p,"paused"):i.fn.pause&&t.pause(),u.data("runningStatus","paused"),u.trigger("paused")},resume:function(){l&&o.allowCss3Support?t.css(p,"running"):i.fn.resume&&t.resume(),u.data("runningStatus","resumed"),u.trigger("resumed")},toggle:function(){m["resumed"==u.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(u.timer),u.find("*").addBack().unbind(),u.html(u.find(".js-marquee:first").html())}};if("string"!=typeof e){var g;i.each(o,(function(e,t){if(void 0!==(g=u.attr("data-"+e))){switch(g){case"true":g=!0;break;case"false":g=!1}o[e]=g}})),o.duration=o.speed||o.duration,a="up"==o.direction||"down"==o.direction,o.gap=o.duplicated?parseInt(o.gap):0,u.wrapInner('<div class="js-marquee"></div>');var h=u.find(".js-marquee").css({"margin-right":o.gap,float:"left"});if(o.duplicated&&h.clone(!0).appendTo(u),u.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),t=u.find(".js-marquee-wrapper"),a){var v=u.height();t.removeAttr("style"),u.height(v),u.find(".js-marquee").css({float:"none","margin-bottom":o.gap,"margin-right":0}),o.duplicated&&u.find(".js-marquee:last").css({"margin-bottom":0});var y=u.find(".js-marquee:first").height()+o.gap;o.startVisible&&!o.duplicated?(o._completeDuration=(parseInt(y,10)+parseInt(v,10))/parseInt(v,10)*o.duration,o.duration=parseInt(y,10)/parseInt(v,10)*o.duration):o.duration=(parseInt(y,10)+parseInt(v,10))/parseInt(v,10)*o.duration}else s=u.find(".js-marquee:first").width()+o.gap,n=u.width(),o.startVisible&&!o.duplicated?(o._completeDuration=(parseInt(s,10)+parseInt(n,10))/parseInt(n,10)*o.duration,o.duration=parseInt(s,10)/parseInt(n,10)*o.duration):o.duration=(parseInt(s,10)+parseInt(n,10))/parseInt(n,10)*o.duration;if(o.duplicated&&(o.duration=o.duration/2),o.allowCss3Support){var b=document.body||document.createElement("div"),x="marqueeAnimation-"+Math.floor(1e7*Math.random()),S="Webkit Moz O ms Khtml".split(" "),I="animation",w="",j="";if(b.style.animation&&(j="@keyframes "+x+" ",l=!0),!1===l)for(var q=0;q<S.length;q++)if(void 0!==b.style[S[q]+"AnimationName"]){var O="-"+S[q].toLowerCase()+"-";I=O+I,p=O+p,j="@"+O+"keyframes "+x+" ",l=!0;break}l&&(w=x+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s infinite "+o.css3easing,u.data("css3AnimationIsSupported",!0))}var _=function(){t.css("margin-top","up"==o.direction?v+"px":"-"+y+"px")},C=function(){t.css("margin-left","left"==o.direction?n+"px":"-"+s+"px")};o.duplicated?(a?o.startVisible?t.css("margin-top",0):t.css("margin-top","up"==o.direction?v+"px":"-"+(2*y-o.gap)+"px"):o.startVisible?t.css("margin-left",0):t.css("margin-left","left"==o.direction?n+"px":"-"+(2*s-o.gap)+"px"),o.startVisible||(d=1)):o.startVisible?d=2:a?_():C();var V=function(){if(o.duplicated&&(1===d?(o._originalDuration=o.duration,o.duration=a?"up"==o.direction?o.duration+v/(y/o.duration):2*o.duration:"left"==o.direction?o.duration+n/(s/o.duration):2*o.duration,w&&(w=x+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing),d++):2===d&&(o.duration=o._originalDuration,w&&(x+="0",j=i.trim(j)+"0 ",w=x+" "+o.duration/1e3+"s 0s infinite "+o.css3easing),d++)),a?o.duplicated?(d>2&&t.css("margin-top","up"==o.direction?0:"-"+y+"px"),r={"margin-top":"up"==o.direction?"-"+y+"px":0}):o.startVisible?2===d?(w&&(w=x+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing),r={"margin-top":"up"==o.direction?"-"+y+"px":v+"px"},d++):3===d&&(o.duration=o._completeDuration,w&&(x+="0",j=i.trim(j)+"0 ",w=x+" "+o.duration/1e3+"s 0s infinite "+o.css3easing),_()):(_(),r={"margin-top":"up"==o.direction?"-"+t.height()+"px":v+"px"}):o.duplicated?(d>2&&t.css("margin-left","left"==o.direction?0:"-"+s+"px"),r={"margin-left":"left"==o.direction?"-"+s+"px":0}):o.startVisible?2===d?(w&&(w=x+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing),r={"margin-left":"left"==o.direction?"-"+s+"px":n+"px"},d++):3===d&&(o.duration=o._completeDuration,w&&(x+="0",j=i.trim(j)+"0 ",w=x+" "+o.duration/1e3+"s 0s infinite "+o.css3easing),C()):(C(),r={"margin-left":"left"==o.direction?"-"+s+"px":n+"px"}),u.trigger("beforeStarting"),l){t.css(I,w);var e=j+" { 100%  "+function(e){var t=[];for(var i in e)e.hasOwnProperty(i)&&t.push(i+":"+e[i]);return t.push(),"{"+t.join(",")+"}"}(r)+"}",p=t.find("style");0!==p.length?p.filter(":last").html(e):i("head").append("<style>"+e+"</style>"),c(t[0],"AnimationIteration",(function(){u.trigger("finished")})),c(t[0],"AnimationEnd",(function(){V(),u.trigger("finished")}))}else t.animate(r,o.duration,o.easing,(function(){u.trigger("finished"),o.pauseOnCycle?f():V()}));u.data("runningStatus","resumed")};u.bind("pause",m.pause),u.bind("resume",m.resume),o.pauseOnHover&&u.bind("mouseenter mouseleave",m.toggle),l&&o.allowCss3Support?V():f()}else i.isFunction(m[e])&&(t||(t=u.find(".js-marquee-wrapper")),!0===u.data("css3AnimationIsSupported")&&(l=!0),m[e]())}))},i.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,gap:20,pauseOnCycle:!1,pauseOnHover:!1,startVisible:!1}}});