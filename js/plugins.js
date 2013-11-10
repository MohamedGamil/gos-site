/*!
 * Avoid `console` errors in browsers that lack a console.
 */
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
	
    while (length--) {
        method = methods[length];
		
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license.
 * Copyright 2007, 2013 Brian Cherne
 */
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery)


/*!
 * jQuery FlexSlider v2.1
 */
;(function(a){a.flexslider=function(d,n){var b=a(d),l=a.extend({},a.flexslider.defaults,n),g=l.namespace,i=("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch,c=(i)?"touchend":"click",h=l.direction==="vertical",j=l.reverse,m=(l.itemWidth>0),f=l.animation==="fade",k=l.asNavFor!=="",e={};a.data(d,"flexslider",b);e={init:function(){b.animating=false;b.currentSlide=l.startAt;b.animatingTo=b.currentSlide;b.atEnd=(b.currentSlide===0||b.currentSlide===b.last);b.containerSelector=l.selector.substr(0,l.selector.search(" "));b.slides=a(l.selector,b);b.container=a(b.containerSelector,b);b.count=b.slides.length;b.syncExists=a(l.sync).length>0;if(l.animation==="slide"){l.animation="swing"}b.prop=(h)?"top":"marginLeft";b.args={};b.manualPause=false;b.transitions=!l.video&&!f&&l.useCSS&&(function(){var q=document.createElement("div"),p=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var o in p){if(q.style[p[o]]!==undefined){b.pfx=p[o].replace("Perspective","").toLowerCase();b.prop="-"+b.pfx+"-transform";return true}}return false}());if(l.controlsContainer!==""){b.controlsContainer=a(l.controlsContainer).length>0&&a(l.controlsContainer)}if(l.manualControls!==""){b.manualControls=a(l.manualControls).length>0&&a(l.manualControls)}if(l.randomize){b.slides.sort(function(){return(Math.round(Math.random())-0.5)});b.container.empty().append(b.slides)}b.doMath();if(k){e.asNav.setup()}b.setup("init");if(l.controlNav){e.controlNav.setup()}if(l.directionNav){e.directionNav.setup()}if(l.keyboard&&(a(b.containerSelector).length===1||l.multipleKeyboard)){a(document).bind("keyup",function(p){var o=p.keyCode;if(!b.animating&&(o===39||o===37)){var q=(o===39)?b.getTarget("next"):(o===37)?b.getTarget("prev"):false;b.flexAnimate(q,l.pauseOnAction)}})}if(l.mousewheel){b.bind("mousewheel",function(q,s,p,o){q.preventDefault();var r=(s<0)?b.getTarget("next"):b.getTarget("prev");b.flexAnimate(r,l.pauseOnAction)})}if(l.pausePlay){e.pausePlay.setup()}if(l.slideshow){if(l.pauseOnHover){b.hover(function(){if(!b.manualPlay&&!b.manualPause){b.pause()}},function(){if(!b.manualPause&&!b.manualPlay){b.play()}})}(l.initDelay>0)?setTimeout(b.play,l.initDelay):b.play()}if(i&&l.touch){e.touch()}if(!f||(f&&l.smoothHeight)){a(window).bind("resize focus",e.resize)}setTimeout(function(){l.start(b)},200)},asNav:{setup:function(){b.asNav=true;b.animatingTo=Math.floor(b.currentSlide/b.move);b.currentItem=b.currentSlide;b.slides.removeClass(g+"active-slide").eq(b.currentItem).addClass(g+"active-slide");b.slides.click(function(q){q.preventDefault();var p=a(this),o=p.index();if(!a(l.asNavFor).data("flexslider").animating&&!p.hasClass("active")){b.direction=(b.currentItem<o)?"next":"prev";b.flexAnimate(o,l.pauseOnAction,false,true,true)}})}},controlNav:{setup:function(){if(!b.manualControls){e.controlNav.setupPaging()}else{e.controlNav.setupManual()}},setupPaging:function(){var q=(l.controlNav==="thumbnails")?"control-thumbs":"control-paging",o=1,r;b.controlNavScaffold=a('<ol class="'+g+"control-nav "+g+q+'"></ol>');if(b.pagingCount>1){for(var p=0;p<b.pagingCount;p++){r=(l.controlNav==="thumbnails")?'<img src="'+b.slides.eq(p).attr("data-thumb")+'"/>':"<a>"+o+"</a>";b.controlNavScaffold.append("<li>"+r+"</li>");o++}}(b.controlsContainer)?a(b.controlsContainer).append(b.controlNavScaffold):b.append(b.controlNavScaffold);e.controlNav.set();e.controlNav.active();b.controlNavScaffold.delegate("a, img",c,function(s){s.preventDefault();var u=a(this),t=b.controlNav.index(u);if(!u.hasClass(g+"active")){b.direction=(t>b.currentSlide)?"next":"prev";b.flexAnimate(t,l.pauseOnAction)}});if(i){b.controlNavScaffold.delegate("a","click touchstart",function(s){s.preventDefault()})}},setupManual:function(){b.controlNav=b.manualControls;e.controlNav.active();b.controlNav.live(c,function(o){o.preventDefault();var q=a(this),p=b.controlNav.index(q);if(!q.hasClass(g+"active")){(p>b.currentSlide)?b.direction="next":b.direction="prev";b.flexAnimate(p,l.pauseOnAction)}});if(i){b.controlNav.live("click touchstart",function(o){o.preventDefault()})}},set:function(){var o=(l.controlNav==="thumbnails")?"img":"a";b.controlNav=a("."+g+"control-nav li "+o,(b.controlsContainer)?b.controlsContainer:b)},active:function(){b.controlNav.removeClass(g+"active").eq(b.animatingTo).addClass(g+"active")},update:function(o,p){if(b.pagingCount>1&&o==="add"){b.controlNavScaffold.append(a("<li><a>"+b.count+"</a></li>"))}else{if(b.pagingCount===1){b.controlNavScaffold.find("li").remove()}else{b.controlNav.eq(p).closest("li").remove()}}e.controlNav.set();(b.pagingCount>1&&b.pagingCount!==b.controlNav.length)?b.update(p,o):e.controlNav.active()}},directionNav:{setup:function(){var o=a('<ul class="'+g+'direction-nav"><li><a class="'+g+'prev" href="#">'+l.prevText+'</a></li><li><a class="'+g+'next" href="#">'+l.nextText+"</a></li></ul>");if(b.controlsContainer){a(b.controlsContainer).append(o);b.directionNav=a("."+g+"direction-nav li a",b.controlsContainer)}else{b.append(o);b.directionNav=a("."+g+"direction-nav li a",b)}e.directionNav.update();b.directionNav.bind(c,function(p){p.preventDefault();var q=(a(this).hasClass(g+"next"))?b.getTarget("next"):b.getTarget("prev");b.flexAnimate(q,l.pauseOnAction)});if(i){b.directionNav.bind("click touchstart",function(p){p.preventDefault()})}},update:function(){var o=g+"disabled";if(b.pagingCount===1){b.directionNav.addClass(o)}else{if(!l.animationLoop){if(b.animatingTo===0){b.directionNav.removeClass(o).filter("."+g+"prev").addClass(o)}else{if(b.animatingTo===b.last){b.directionNav.removeClass(o).filter("."+g+"next").addClass(o)}else{b.directionNav.removeClass(o)}}}else{b.directionNav.removeClass(o)}}}},pausePlay:{setup:function(){var o=a('<div class="'+g+'pauseplay"><a></a></div>');if(b.controlsContainer){b.controlsContainer.append(o);b.pausePlay=a("."+g+"pauseplay a",b.controlsContainer)}else{b.append(o);b.pausePlay=a("."+g+"pauseplay a",b)}e.pausePlay.update((l.slideshow)?g+"pause":g+"play");b.pausePlay.bind(c,function(p){p.preventDefault();if(a(this).hasClass(g+"pause")){b.manualPause=true;b.manualPlay=false;b.pause()}else{b.manualPause=false;b.manualPlay=true;b.play()}});if(i){b.pausePlay.bind("click touchstart",function(p){p.preventDefault()})}},update:function(o){(o==="play")?b.pausePlay.removeClass(g+"pause").addClass(g+"play").text(l.playText):b.pausePlay.removeClass(g+"play").addClass(g+"pause").text(l.pauseText)}},touch:function(){var t,r,p,u,x,v,s=false;d.addEventListener("touchstart",q,false);function q(y){if(b.animating){y.preventDefault()}else{if(y.touches.length===1){b.pause();u=(h)?b.h:b.w;v=Number(new Date());p=(m&&j&&b.animatingTo===b.last)?0:(m&&j)?b.limit-(((b.itemW+l.itemMargin)*b.move)*b.animatingTo):(m&&b.currentSlide===b.last)?b.limit:(m)?((b.itemW+l.itemMargin)*b.move)*b.currentSlide:(j)?(b.last-b.currentSlide+b.cloneOffset)*u:(b.currentSlide+b.cloneOffset)*u;t=(h)?y.touches[0].pageY:y.touches[0].pageX;r=(h)?y.touches[0].pageX:y.touches[0].pageY;d.addEventListener("touchmove",o,false);d.addEventListener("touchend",w,false)}}}function o(y){x=(h)?t-y.touches[0].pageY:t-y.touches[0].pageX;s=(h)?(Math.abs(x)<Math.abs(y.touches[0].pageX-r)):(Math.abs(x)<Math.abs(y.touches[0].pageY-r));if(!s||Number(new Date())-v>500){y.preventDefault();if(!f&&b.transitions){if(!l.animationLoop){x=x/((b.currentSlide===0&&x<0||b.currentSlide===b.last&&x>0)?(Math.abs(x)/u+2):1)}b.setProps(p+x,"setTouch")}}}function w(A){d.removeEventListener("touchmove",o,false);if(b.animatingTo===b.currentSlide&&!s&&!(x===null)){var z=(j)?-x:x,y=(z>0)?b.getTarget("next"):b.getTarget("prev");if(b.canAdvance(y)&&(Number(new Date())-v<550&&Math.abs(z)>50||Math.abs(z)>u/2)){b.flexAnimate(y,l.pauseOnAction)}else{if(!f){b.flexAnimate(b.currentSlide,l.pauseOnAction,true)}}}d.removeEventListener("touchend",w,false);t=null;r=null;x=null;p=null}},resize:function(){if(!b.animating&&b.is(":visible")){if(!m){b.doMath()}if(f){e.smoothHeight()}else{if(m){b.slides.width(b.computedW);b.update(b.pagingCount);b.setProps()}else{if(h){b.viewport.height(b.h);b.setProps(b.h,"setTotal")}else{if(l.smoothHeight){e.smoothHeight()}b.newSlides.width(b.computedW);b.setProps(b.computedW,"setTotal")}}}}},smoothHeight:function(o){if(!h||f){var p=(f)?b:b.viewport;(o)?p.animate({height:b.slides.eq(b.animatingTo).height()},o):p.height(b.slides.eq(b.animatingTo).height())}},sync:function(o){var q=a(l.sync).data("flexslider"),p=b.animatingTo;switch(o){case"animate":q.flexAnimate(p,l.pauseOnAction,false,true);break;case"play":if(!q.playing&&!q.asNav){q.play()}break;case"pause":q.pause();break}}};b.flexAnimate=function(w,x,q,s,t){if(k&&b.pagingCount===1){b.direction=(b.currentItem<w)?"next":"prev"}if(!b.animating&&(b.canAdvance(w,t)||q)&&b.is(":visible")){if(k&&s){var p=a(l.asNavFor).data("flexslider");b.atEnd=w===0||w===b.count-1;p.flexAnimate(w,true,false,true,t);b.direction=(b.currentItem<w)?"next":"prev";p.direction=b.direction;if(Math.ceil((w+1)/b.visible)-1!==b.currentSlide&&w!==0){b.currentItem=w;b.slides.removeClass(g+"active-slide").eq(w).addClass(g+"active-slide");w=Math.floor(w/b.visible)}else{b.currentItem=w;b.slides.removeClass(g+"active-slide").eq(w).addClass(g+"active-slide");return false}}b.animating=true;b.animatingTo=w;l.before(b);if(x){b.pause()}if(b.syncExists&&!t){e.sync("animate")}if(l.controlNav){e.controlNav.active()}if(!m){b.slides.removeClass(g+"active-slide").eq(w).addClass(g+"active-slide")}b.atEnd=w===0||w===b.last;if(l.directionNav){e.directionNav.update()}if(w===b.last){l.end(b);if(!l.animationLoop){b.pause()}}if(!f){var v=(h)?b.slides.filter(":first").height():b.computedW,u,r,o;if(m){u=(l.itemWidth>b.w)?l.itemMargin*2:l.itemMargin;o=((b.itemW+u)*b.move)*b.animatingTo;r=(o>b.limit&&b.visible!==1)?b.limit:o}else{if(b.currentSlide===0&&w===b.count-1&&l.animationLoop&&b.direction!=="next"){r=(j)?(b.count+b.cloneOffset)*v:0}else{if(b.currentSlide===b.last&&w===0&&l.animationLoop&&b.direction!=="prev"){r=(j)?0:(b.count+1)*v}else{r=(j)?((b.count-1)-w+b.cloneOffset)*v:(w+b.cloneOffset)*v}}}b.setProps(r,"",l.animationSpeed);if(b.transitions){if(!l.animationLoop||!b.atEnd){b.animating=false;b.currentSlide=b.animatingTo}b.container.unbind("webkitTransitionEnd transitionend");b.container.bind("webkitTransitionEnd transitionend",function(){b.wrapup(v)})}else{b.container.animate(b.args,l.animationSpeed,l.easing,function(){b.wrapup(v)})}}else{if(!i){b.slides.eq(b.currentSlide).fadeOut(l.animationSpeed,l.easing);b.slides.eq(w).fadeIn(l.animationSpeed,l.easing,b.wrapup)}else{b.slides.eq(b.currentSlide).css({opacity:0,zIndex:1});b.slides.eq(w).css({opacity:1,zIndex:2});b.slides.unbind("webkitTransitionEnd transitionend");b.slides.eq(b.currentSlide).bind("webkitTransitionEnd transitionend",function(){l.after(b)});b.animating=false;b.currentSlide=b.animatingTo}}if(l.smoothHeight){e.smoothHeight(l.animationSpeed)}}};b.wrapup=function(o){if(!f&&!m){if(b.currentSlide===0&&b.animatingTo===b.last&&l.animationLoop){b.setProps(o,"jumpEnd")}else{if(b.currentSlide===b.last&&b.animatingTo===0&&l.animationLoop){b.setProps(o,"jumpStart")}}}b.animating=false;b.currentSlide=b.animatingTo;l.after(b)};b.animateSlides=function(){if(!b.animating){b.flexAnimate(b.getTarget("next"))}};b.pause=function(){clearInterval(b.animatedSlides);b.playing=false;if(l.pausePlay){e.pausePlay.update("play")}if(b.syncExists){e.sync("pause")}};b.play=function(){b.animatedSlides=setInterval(b.animateSlides,l.slideshowSpeed);b.playing=true;if(l.pausePlay){e.pausePlay.update("pause")}if(b.syncExists){e.sync("play")}};b.canAdvance=function(q,o){var p=(k)?b.pagingCount-1:b.last;return(o)?true:(k&&b.currentItem===b.count-1&&q===0&&b.direction==="prev")?true:(k&&b.currentItem===0&&q===b.pagingCount-1&&b.direction!=="next")?false:(q===b.currentSlide&&!k)?false:(l.animationLoop)?true:(b.atEnd&&b.currentSlide===0&&q===p&&b.direction!=="next")?false:(b.atEnd&&b.currentSlide===p&&q===0&&b.direction==="next")?false:true};b.getTarget=function(o){b.direction=o;if(o==="next"){return(b.currentSlide===b.last)?0:b.currentSlide+1}else{return(b.currentSlide===0)?b.last:b.currentSlide-1}};b.setProps=function(r,o,p){var q=(function(){var s=(r)?r:((b.itemW+l.itemMargin)*b.move)*b.animatingTo,t=(function(){if(m){return(o==="setTouch")?r:(j&&b.animatingTo===b.last)?0:(j)?b.limit-(((b.itemW+l.itemMargin)*b.move)*b.animatingTo):(b.animatingTo===b.last)?b.limit:s}else{switch(o){case"setTotal":return(j)?((b.count-1)-b.currentSlide+b.cloneOffset)*r:(b.currentSlide+b.cloneOffset)*r;case"setTouch":return(j)?r:r;case"jumpEnd":return(j)?r:b.count*r;case"jumpStart":return(j)?b.count*r:r;default:return r}}}());return(t*-1)+"px"}());if(b.transitions){q=(h)?"translate3d(0,"+q+",0)":"translate3d("+q+",0,0)";p=(p!==undefined)?(p/1000)+"s":"0s";b.container.css("-"+b.pfx+"-transition-duration",p)}b.args[b.prop]=q;if(b.transitions||p===undefined){b.container.css(b.args)}};b.setup=function(p){if(!f){var q,o;if(p==="init"){b.viewport=a('<div class="'+g+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(b).append(b.container);b.cloneCount=0;b.cloneOffset=0;if(j){o=a.makeArray(b.slides).reverse();b.slides=a(o);b.container.empty().append(b.slides)}}if(l.animationLoop&&!m){b.cloneCount=2;b.cloneOffset=1;if(p!=="init"){b.container.find(".clone").remove()}b.container.append(b.slides.first().clone().addClass("clone")).prepend(b.slides.last().clone().addClass("clone"))}b.newSlides=a(l.selector,b);q=(j)?b.count-1-b.currentSlide+b.cloneOffset:b.currentSlide+b.cloneOffset;if(h&&!m){b.container.height((b.count+b.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){b.newSlides.css({display:"block"});b.doMath();b.viewport.height(b.h);b.setProps(q*b.h,"init")},(p==="init")?100:0)}else{b.container.width((b.count+b.cloneCount)*200+"%");b.setProps(q*b.computedW,"init");setTimeout(function(){b.doMath();b.newSlides.css({width:b.computedW,"float":"left",display:"block"});if(l.smoothHeight){e.smoothHeight()}},(p==="init")?100:0)}}else{b.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});if(p==="init"){if(!i){b.slides.eq(b.currentSlide).fadeIn(l.animationSpeed,l.easing)}else{b.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+l.animationSpeed/1000+"s ease",zIndex:1}).eq(b.currentSlide).css({opacity:1,zIndex:2})}}if(l.smoothHeight){e.smoothHeight()}}if(!m){b.slides.removeClass(g+"active-slide").eq(b.currentSlide).addClass(g+"active-slide")}};b.doMath=function(){var o=b.slides.first(),r=l.itemMargin,p=l.minItems,q=l.maxItems;b.w=b.width();b.h=o.height();b.boxPadding=o.outerWidth()-o.width();if(m){b.itemT=l.itemWidth+r;b.minW=(p)?p*b.itemT:b.w;b.maxW=(q)?q*b.itemT:b.w;b.itemW=(b.minW>b.w)?(b.w-(r*p))/p:(b.maxW<b.w)?(b.w-(r*q))/q:(l.itemWidth>b.w)?b.w:l.itemWidth;b.visible=Math.floor(b.w/(b.itemW+r));b.move=(l.move>0&&l.move<b.visible)?l.move:b.visible;b.pagingCount=Math.ceil(((b.count-b.visible)/b.move)+1);b.last=b.pagingCount-1;b.limit=(b.pagingCount===1)?0:(l.itemWidth>b.w)?((b.itemW+(r*2))*b.count)-b.w-r:((b.itemW+r)*b.count)-b.w-r}else{b.itemW=b.w;b.pagingCount=b.count;b.last=b.count-1}b.computedW=b.itemW-b.boxPadding};b.update=function(p,o){b.doMath();if(!m){if(p<b.currentSlide){b.currentSlide+=1}else{if(p<=b.currentSlide&&p!==0){b.currentSlide-=1}}b.animatingTo=b.currentSlide}if(l.controlNav&&!b.manualControls){if((o==="add"&&!m)||b.pagingCount>b.controlNav.length){e.controlNav.update("add")}else{if((o==="remove"&&!m)||b.pagingCount<b.controlNav.length){if(m&&b.currentSlide>b.last){b.currentSlide-=1;b.animatingTo-=1}e.controlNav.update("remove",b.last)}}}if(l.directionNav){e.directionNav.update()}};b.addSlide=function(o,q){var p=a(o);b.count+=1;b.last=b.count-1;if(h&&j){(q!==undefined)?b.slides.eq(b.count-q).after(p):b.container.prepend(p)}else{(q!==undefined)?b.slides.eq(q).before(p):b.container.append(p)}b.update(q,"add");b.slides=a(l.selector+":not(.clone)",b);b.setup();l.added(b)};b.removeSlide=function(o){var p=(isNaN(o))?b.slides.index(a(o)):o;b.count-=1;b.last=b.count-1;if(isNaN(o)){a(o,b.slides).remove()}else{(h&&j)?b.slides.eq(b.last).remove():b.slides.eq(o).remove()}b.doMath();b.update(p,"remove");b.slides=a(l.selector+":not(.clone)",b);b.setup();l.removed(b)};e.init()};a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,pauseOnAction:true,pauseOnHover:false,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};a.fn.flexslider=function(b){if(b===undefined){b={}}if(typeof b==="object"){return this.each(function(){var f=a(this),d=(b.selector)?b.selector:".slides > li",e=f.find(d);if(e.length===1){e.fadeIn(400);if(b.start){b.start(f)}}else{if(f.data("flexslider")==undefined){new a.flexslider(this,b)}}})}else{var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"next":c.flexAnimate(c.getTarget("next"),true);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),true);break;default:if(typeof b==="number"){c.flexAnimate(b,true)}}}}})(jQuery);


/*!
 * v1.4 | https://github.com/farinspace/jquery.imgpreload
 */
if("undefined"!=typeof jQuery){(function(a){a.imgpreload=function(b,c){c=a.extend({},a.fn.imgpreload.defaults,c instanceof Function?{all:c}:c);if("string"==typeof b){b=new Array(b)}var d=new Array;a.each(b,function(e,f){var g=new Image;var h=f;var i=g;if("string"!=typeof f){h=a(f).attr("src");i=f}a(g).bind("load error",function(e){d.push(i);a.data(i,"loaded","error"==e.type?false:true);if(c.each instanceof Function){c.each.call(i)}if(d.length>=b.length&&c.all instanceof Function){c.all.call(d)}a(this).unbind("load error")});g.src=h})};a.fn.imgpreload=function(b){a.imgpreload(this,b);return this};a.fn.imgpreload.defaults={each:null,all:null}})(jQuery)}


/*!
 *	tipsy, facebook style tooltips for jquery
 *	version 1.0.0a
 *	(c) 2008-2010 jason frame [jason@onehackoranother.com]
 *	releated under the MIT license
 */
(function ($) {
    function fixTitle($ele) {
        if ($ele.attr('title') || typeof ($ele.attr('original-title')) != 'string') {
            $ele.attr('original-title', $ele.attr('title') || '').removeAttr('title');
        }
    };

    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        fixTitle(this.$element);
    };
    Tipsy.prototype = {
        show: function () {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip(),
					$ele = this.$element;
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy';
                $tip.remove().css({
                    top: 0,
                    left: 0,
                    visibility: 'hidden',
                    display: 'block'
                }).appendTo(document.body);
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight;
                var gravity = (typeof this.options.gravity == 'function') ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
                var tp,
					nm = $.fn.tipsy.setOrigins( $ele, false, true ),
					om = this.options.margin,
					is = this.options.smart,
					cn = true;
                switch (gravity.charAt(0)) {
                case 'n':
                    tp = {
                        top: pos.top + pos.height + this.options.offset,
                        left: pos.left + pos.width / 2 - actualWidth / 2
                    };
					if ( is && !isNaN( nm.element.top ) && !isNaN( om.element.top ) && ( nm.element.top < om.element.top ) ) {
						cn = false;
						tp.top = tp.top - ( om.element.top - nm.element.top );
					}
					if ( is && cn && !isNaN( nm.parent.top ) && !isNaN( om.parent.top ) && ( nm.parent.top < om.parent.top ) ) {
						tp.top = tp.top - ( om.parent.top - nm.parent.top );
					}
					break;
                case 's':
                    tp = {
                        top: pos.top - actualHeight - this.options.offset,
                        left: pos.left + pos.width / 2 - actualWidth / 2
                    };
                    break;
                case 'e':
                    tp = {
                        top: pos.top + pos.height / 2 - actualHeight / 2,
                        left: pos.left - actualWidth - this.options.offset
                    };
					if ( is && !isNaN( nm.element.right ) && !isNaN( om.element.right ) && ( nm.element.right < om.element.right ) ) {
						cn = false;
						tp.left = tp.left + ( om.element.right - nm.element.right );
					}
					if ( is && cn && !isNaN( nm.parent.right ) && !isNaN( om.parent.right ) && ( nm.parent.right < om.parent.right ) ) {
						tp.left = tp.left + ( om.parent.right - nm.parent.right );
					}
                    break;
                case 'w':
                    tp = {
                        top: pos.top + pos.height / 2 - actualHeight / 2,
                        left: pos.left + pos.width + this.options.offset
                    };
					if ( is && !isNaN( nm.element.left ) && !isNaN( om.element.left ) && ( nm.element.left < om.element.left ) ) {
						cn = false;
						tp.left = tp.left - ( om.element.left - nm.element.left );
					}
					if ( is && cn && !isNaN( nm.parent.left ) && !isNaN( om.parent.left ) && ( nm.parent.left < om.parent.left ) ) {
						tp.left = tp.left - ( om.parent.left - nm.parent.left );
					}
                    break;
                };
                tp.left = (this.options.left !== 0) ? tp.left + this.options.left : tp.left;
                tp.top = (this.options.top !== 0) ? tp.top + this.options.top : tp.top;
				if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                };
                $tip.css(tp).addClass('tipsy-' + gravity);
                if (this.options.fade) {
                    $tip.stop().css({
                        opacity: 0,
                        display: 'block',
                        visibility: 'visible'
                    }).animate({
                        opacity: this.options.opacity
                    });
                } else {
                    $tip.css({
                        visibility: 'visible',
                        opacity: this.options.opacity
                    });
                }
            }
        },
        hide: function () {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function () {
                    $(this).remove();
                });
            } else {
                this.tip().remove();
            }
        },
        getTitle: function () {
            var title, $e = this.$element,
                o = this.options;
            fixTitle($e);
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            };
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        tip: function () {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>');
            };
            return this.$tip;
        },
        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        enable: function () {
            this.enabled = true;
        },
        disable: function () {
            this.enabled = false;
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled;
        }
    };
    $.fn.tipsy = function (options) {
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            return this.data('tipsy')[options]();
        };
        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
 				tipsy.options = $.fn.tipsy.setOrigins( ele, tipsy.options );
				$.data(ele, 'tipsy', tipsy);
            };
            return tipsy;
        };

        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                setTimeout(function () {
                    if (tipsy.hoverState == 'in') tipsy.show();
                }, options.delayIn);
            }
        };

        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function () {
                    if (tipsy.hoverState == 'out') tipsy.hide();
                }, options.delayOut);
            }
        };
        if (!options.live) this.each(function () {
            get(this);
        });
        if (options.trigger != 'manual') {
            var binder = options.live ? 'live' : 'bind',
                eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            if (options.live) {
                $(document).on(eventIn, this.selector, enter).on(eventOut, this.selector, leave);
            } else {
                this.bind(eventIn, enter).bind(eventOut, leave);
            }
        };
        return options === 'tip' ? this.$tip : this;
    };
    $.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover',
        top: 0,
        left: 0,
		smart: true
    };
    $.fn.tipsy.setOrigins = function (ele, options, get) {
		var _get_full_margin = function (){
			var $$ele = $(ele),
				$$par = $$ele.parent();
			
			if ( $$ele.is( 'a' ) && $$par.is( 'li' ) && $$ele.parents( 'ul' ).hasClass( 'rr' ) )
				$$par = $$ele.parents( 'ul:first' ).parent();
			
			return {
				parent: {
					top: parseInt( $$par.css('margin-top').replace('px', '') ),
					right: parseInt( $$par.css('margin-right').replace('px', '') ),
					bottom: parseInt( $$par.css('margin-bottom').replace('px', '') ),
					left: parseInt( $$par.css('margin-left').replace('px', '') )
				},
				element: {
					top: parseInt( $$ele.css('margin-top').replace('px', '') ),
					right: parseInt( $$ele.css('margin-right').replace('px', '') ),
					bottom: parseInt( $$ele.css('margin-bottom').replace('px', '') ),
					left: parseInt( $$ele.css('margin-left').replace('px', '') )
				}
			};
		}
		
		if ( get == true )
			return _get_full_margin();
			
        return $.extend({
			margin : _get_full_margin(),
		}, options);
    };
    $.fn.tipsy.elementOptions = function (ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    $.fn.tipsy.autoNS = function () {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    $.fn.tipsy.autoWE = function () {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
})(jQuery);


/*!
 * Chosen, a Select Box Enhancer for jQuery and Prototype
 * by Patrick Filler for Harvest, http://getharvest.com
 * 
 * Version 0.9.14
 * Full source at https://github.com/harvesthq/chosen
 * Copyright (c) 2011 Harvest http://getharvest.com
 * 
 * MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
 * This file is generated by `cake build`, do not edit it by hand.
 */
(function(){var e;e=function(){function e(){this.options_index=0,this.parsed=[]}return e.prototype.add_node=function(e){return e.nodeName.toUpperCase()==="OPTGROUP"?this.add_group(e):this.add_option(e)},e.prototype.add_group=function(e){var t,n,r,i,s,o;t=this.parsed.length,this.parsed.push({array_index:t,group:!0,label:e.label,children:0,disabled:e.disabled}),s=e.childNodes,o=[];for(r=0,i=s.length;r<i;r++)n=s[r],o.push(this.add_option(n,t,e.disabled));return o},e.prototype.add_option=function(e,t,n){if(e.nodeName.toUpperCase()==="OPTION")return e.text!==""?(t!=null&&(this.parsed[t].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:e.value,text:e.text,html:e.innerHTML,selected:e.selected,disabled:n===!0?n:e.disabled,group_array_index:t,classes:e.className,style:e.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},e}(),e.select_to_array=function(t){var n,r,i,s,o;r=new e,o=t.childNodes;for(i=0,s=o.length;i<s;i++)n=o[i],r.add_node(n);return r.parsed},this.SelectParser=e}).call(this),function(){var e,t;t=this,e=function(){function e(t,n){this.form_field=t,this.options=n!=null?n:{};if(!e.browser_is_supported())return;this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.finish_setup()}return e.prototype.set_default_values=function(){var e=this;return this.click_test_action=function(t){return e.test_active_click(t)},this.activate_action=function(t){return e.activate_field(t)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=this.options.allow_single_deselect!=null&&this.form_field.options[0]!=null&&this.form_field.options[0].text===""?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=this.options.enable_split_word_search!=null?this.options.enable_split_word_search:!0,this.search_contains=this.options.search_contains||!1,this.choices=0,this.single_backstroke_delete=this.options.single_backstroke_delete||!1,this.max_selected_options=this.options.max_selected_options||Infinity,this.inherit_select_classes=this.options.inherit_select_classes||!1},e.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||e.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||e.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||e.default_no_result_text},e.prototype.mouse_enter=function(){return this.mouse_on_container=!0},e.prototype.mouse_leave=function(){return this.mouse_on_container=!1},e.prototype.input_focus=function(e){var t=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return t.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},e.prototype.input_blur=function(e){var t=this;if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(){return t.blur_test()},100)},e.prototype.result_add_option=function(e){var t,n;return e.disabled?"":(e.dom_id=this.container_id+"_o_"+e.array_index,t=e.selected&&this.is_multiple?[]:["active-result"],e.selected&&t.push("result-selected"),e.group_array_index!=null&&t.push("group-option"),e.classes!==""&&t.push(e.classes),n=e.style.cssText!==""?' style="'+e.style+'"':"",'<li id="'+e.dom_id+'" class="'+t.join(" ")+'"'+n+">"+e.html+"</li>")},e.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build()},e.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},e.prototype.results_search=function(e){return this.results_showing?this.winnow_results():this.results_show()},e.prototype.choices_click=function(e){e.preventDefault();if(!this.results_showing)return this.results_show()},e.prototype.keyup_checker=function(e){var t,n;t=(n=e.which)!=null?n:e.keyCode,this.search_field_scale();switch(t){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:e.preventDefault();if(this.results_showing)return this.result_select(e);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},e.prototype.generate_field_id=function(){var e;return e=this.generate_random_id(),this.form_field.id=e,e},e.prototype.generate_random_char=function(){var e,t,n;return e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",n=Math.floor(Math.random()*e.length),t=e.substring(n,n+1)},e.prototype.container_width=function(){var e;return this.options.width!=null?this.options.width:(e=window.getComputedStyle!=null?parseFloat(window.getComputedStyle(this.form_field).getPropertyValue("width")):typeof jQuery!="undefined"&&jQuery!==null&&this.form_field_jq!=null?this.form_field_jq.outerWidth():this.form_field.getWidth(),e+"px")},e.browser_is_supported=function(){var e;return window.navigator.appName==="Microsoft Internet Explorer"?null!==(e=document.documentMode)&&e>=8:!0},e.default_multiple_text="Select Some Options",e.default_single_text="Select an Option",e.default_no_result_text="No results match",e}(),t.AbstractChosen=e}.call(this),function(){var e,t,n,r={}.hasOwnProperty,i=function(e,t){function i(){this.constructor=e}for(var n in t)r.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};n=this,e=jQuery,e.fn.extend({chosen:function(n){return AbstractChosen.browser_is_supported()?this.each(function(r){var i;i=e(this);if(!i.hasClass("chzn-done"))return i.data("chosen",new t(this,n))}):this}}),t=function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return i(r,t),r.prototype.setup=function(){return this.form_field_jq=e(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")},r.prototype.finish_setup=function(){return this.form_field_jq.addClass("chzn-done")},r.prototype.set_up_html=function(){var t,n;return this.container_id=this.form_field.id.length?this.form_field.id.replace(/[^\w]/g,"_"):this.generate_field_id(),this.container_id+="_chzn",t=["chzn-container"],t.push("chzn-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&t.push(this.form_field.className),this.is_rtl&&t.push("chzn-rtl"),n={id:this.container_id,"class":t.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.container=e("<div />",n),this.is_multiple?this.container.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop"><ul class="chzn-results"></ul></div>'):this.container.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chzn-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chzn-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chzn-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chzn-search").first(),this.selected_item=this.container.find(".chzn-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("liszt:ready",{chosen:this})},r.prototype.register_observers=function(){var e=this;return this.container.mousedown(function(t){e.container_mousedown(t)}),this.container.mouseup(function(t){e.container_mouseup(t)}),this.container.mouseenter(function(t){e.mouse_enter(t)}),this.container.mouseleave(function(t){e.mouse_leave(t)}),this.search_results.mouseup(function(t){e.search_results_mouseup(t)}),this.search_results.mouseover(function(t){e.search_results_mouseover(t)}),this.search_results.mouseout(function(t){e.search_results_mouseout(t)}),this.search_results.bind("mousewheel DOMMouseScroll",function(t){e.search_results_mousewheel(t)}),this.form_field_jq.bind("liszt:updated",function(t){e.results_update_field(t)}),this.form_field_jq.bind("liszt:activate",function(t){e.activate_field(t)}),this.form_field_jq.bind("liszt:open",function(t){e.container_mousedown(t)}),this.search_field.blur(function(t){e.input_blur(t)}),this.search_field.keyup(function(t){e.keyup_checker(t)}),this.search_field.keydown(function(t){e.keydown_checker(t)}),this.search_field.focus(function(t){e.input_focus(t)}),this.is_multiple?this.search_choices.click(function(t){e.choices_click(t)}):this.container.click(function(e){e.preventDefault()})},r.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;if(this.is_disabled)return this.container.addClass("chzn-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus",this.activate_action),this.close_field();this.container.removeClass("chzn-disabled"),this.search_field[0].disabled=!1;if(!this.is_multiple)return this.selected_item.bind("focus",this.activate_action)},r.prototype.container_mousedown=function(t){if(!this.is_disabled){t&&t.type==="mousedown"&&!this.results_showing&&t.preventDefault();if(t==null||!e(t.target).hasClass("search-choice-close"))return this.active_field?!this.is_multiple&&t&&(e(t.target)[0]===this.selected_item[0]||e(t.target).parents("a.chzn-single").length)&&(t.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),e(document).click(this.click_test_action),this.results_show()),this.activate_field()}},r.prototype.container_mouseup=function(e){if(e.target.nodeName==="ABBR"&&!this.is_disabled)return this.results_reset(e)},r.prototype.search_results_mousewheel=function(e){var t,n,r;t=-((n=e.originalEvent)!=null?n.wheelDelta:void 0)||((r=e.originialEvent)!=null?r.detail:void 0);if(t!=null)return e.preventDefault(),e.type==="DOMMouseScroll"&&(t*=40),this.search_results.scrollTop(t+this.search_results.scrollTop())},r.prototype.blur_test=function(e){if(!this.active_field&&this.container.hasClass("chzn-container-active"))return this.close_field()},r.prototype.close_field=function(){return e(document).unbind("click",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chzn-container-active"),this.winnow_results_clear(),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},r.prototype.activate_field=function(){return this.container.addClass("chzn-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},r.prototype.test_active_click=function(t){return e(t.target).parents("#"+this.container_id).length?this.active_field=!0:this.close_field()},r.prototype.results_build=function(){var e,t,r,i,s;this.parsing=!0,this.results_data=n.SelectParser.select_to_array(this.form_field),this.is_multiple&&this.choices>0?(this.search_choices.find("li.search-choice").remove(),this.choices=0):this.is_multiple||(this.selected_item.addClass("chzn-default").find("span").text(this.default_text),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?this.container.addClass("chzn-container-single-nosearch"):this.container.removeClass("chzn-container-single-nosearch")),e="",s=this.results_data;for(r=0,i=s.length;r<i;r++)t=s[r],t.group?e+=this.result_add_group(t):t.empty||(e+=this.result_add_option(t),t.selected&&this.is_multiple?this.choice_build(t):t.selected&&!this.is_multiple&&(this.selected_item.removeClass("chzn-default").find("span").text(t.text),this.allow_single_deselect&&this.single_deselect_control_build()));return this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.search_results.html(e),this.parsing=!1},r.prototype.result_add_group=function(t){return t.disabled?"":(t.dom_id=this.container_id+"_g_"+t.array_index,'<li id="'+t.dom_id+'" class="group-result">'+e("<div />").text(t.label).html()+"</li>")},r.prototype.result_do_highlight=function(e){var t,n,r,i,s;if(e.length){this.result_clear_highlight(),this.result_highlight=e,this.result_highlight.addClass("highlighted"),r=parseInt(this.search_results.css("maxHeight"),10),s=this.search_results.scrollTop(),i=r+s,n=this.result_highlight.position().top+this.search_results.scrollTop(),t=n+this.result_highlight.outerHeight();if(t>=i)return this.search_results.scrollTop(t-r>0?t-r:0);if(n<s)return this.search_results.scrollTop(n)}},r.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},r.prototype.results_show=function(){if(this.result_single_selected!=null)this.result_do_highlight(this.result_single_selected);else if(this.is_multiple&&this.max_selected_options<=this.choices)return this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1;return this.container.addClass("chzn-with-drop"),this.form_field_jq.trigger("liszt:showing_dropdown",{chosen:this}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results()},r.prototype.results_hide=function(){return this.result_clear_highlight(),this.container.removeClass("chzn-with-drop"),this.form_field_jq.trigger("liszt:hiding_dropdown",{chosen:this}),this.results_showing=!1},r.prototype.set_tab_index=function(e){var t;if(this.form_field_jq.attr("tabindex"))return t=this.form_field_jq.attr("tabindex"),this.form_field_jq.attr("tabindex",-1),this.search_field.attr("tabindex",t)},r.prototype.set_label_behavior=function(){var t=this;this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=e("label[for="+this.form_field.id+"]"));if(this.form_field_label.length>0)return this.form_field_label.click(function(e){return t.is_multiple?t.container_mousedown(e):t.activate_field()})},r.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},r.prototype.search_results_mouseup=function(t){var n;n=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first();if(n.length)return this.result_highlight=n,this.result_select(t),this.search_field.focus()},r.prototype.search_results_mouseover=function(t){var n;n=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first();if(n)return this.result_do_highlight(n)},r.prototype.search_results_mouseout=function(t){if(e(t.target).hasClass("active-result"))return this.result_clear_highlight()},r.prototype.choice_build=function(t){var n,r,i,s=this;return this.is_multiple&&this.max_selected_options<=this.choices?(this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1):(n=this.container_id+"_c_"+t.array_index,this.choices+=1,t.disabled?r='<li class="search-choice search-choice-disabled" id="'+n+'"><span>'+t.html+"</span></li>":r='<li class="search-choice" id="'+n+'"><span>'+t.html+'</span><a href="javascript:void(0)" class="search-choice-close" rel="'+t.array_index+'"></a></li>',this.search_container.before(r),i=e("#"+n).find("a").first(),i.click(function(e){return s.choice_destroy_link_click(e)}))},r.prototype.choice_destroy_link_click=function(t){t.preventDefault(),t.stopPropagation();if(!this.is_disabled)return this.choice_destroy(e(t.target))},r.prototype.choice_destroy=function(e){if(this.result_deselect(e.attr("rel")))return this.choices-=1,this.show_search_field_default(),this.is_multiple&&this.choices>0&&this.search_field.val().length<1&&this.results_hide(),e.parents("li").first().remove(),this.search_field_scale()},r.prototype.results_reset=function(){this.form_field.options[0].selected=!0,this.selected_item.find("span").text(this.default_text),this.is_multiple||this.selected_item.addClass("chzn-default"),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change");if(this.active_field)return this.results_hide()},r.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},r.prototype.result_select=function(e){var t,n,r,i;if(this.result_highlight)return t=this.result_highlight,n=t.attr("id"),this.result_clear_highlight(),this.is_multiple?this.result_deactivate(t):(this.search_results.find(".result-selected").removeClass("result-selected"),this.result_single_selected=t,this.selected_item.removeClass("chzn-default")),t.addClass("result-selected"),i=n.substr(n.lastIndexOf("_")+1),r=this.results_data[i],r.selected=!0,this.form_field.options[r.options_index].selected=!0,this.is_multiple?this.choice_build(r):(this.selected_item.find("span").first().text(r.text),this.allow_single_deselect&&this.single_deselect_control_build()),(!e.metaKey&&!e.ctrlKey||!this.is_multiple)&&this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[r.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale()},r.prototype.result_activate=function(e){return e.addClass("active-result")},r.prototype.result_deactivate=function(e){return e.removeClass("active-result")},r.prototype.result_deselect=function(t){var n,r;return r=this.results_data[t],this.form_field.options[r.options_index].disabled?!1:(r.selected=!1,this.form_field.options[r.options_index].selected=!1,n=e("#"+this.container_id+"_o_"+t),n.removeClass("result-selected").addClass("active-result").show(),this.result_clear_highlight(),this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[r.options_index].value}),this.search_field_scale(),!0)},r.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect&&this.selected_item.find("abbr").length<1)return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')},r.prototype.winnow_results=function(){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;this.no_results_clear(),f=0,l=this.search_field.val()===this.default_text?"":e("<div/>").text(e.trim(this.search_field.val())).html(),o=this.search_contains?"":"^",s=new RegExp(o+l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),p=new RegExp(l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),y=this.results_data;for(d=0,m=y.length;d<m;d++){n=y[d];if(!n.disabled&&!n.empty)if(n.group)e("#"+n.dom_id).css("display","none");else if(!this.is_multiple||!n.selected){t=!1,a=n.dom_id,u=e("#"+a);if(s.test(n.html))t=!0,f+=1;else if(this.enable_split_word_search&&(n.html.indexOf(" ")>=0||n.html.indexOf("[")===0)){i=n.html.replace(/\[|\]/g,"").split(" ");if(i.length)for(v=0,g=i.length;v<g;v++)r=i[v],s.test(r)&&(t=!0,f+=1)}t?(l.length?(c=n.html.search(p),h=n.html.substr(0,c+l.length)+"</em>"+n.html.substr(c+l.length),h=h.substr(0,c)+"<em>"+h.substr(c)):h=n.html,u.html(h),this.result_activate(u),n.group_array_index!=null&&e("#"+this.results_data[n.group_array_index].dom_id).css("display","list-item")):(this.result_highlight&&a===this.result_highlight.attr("id")&&this.result_clear_highlight(),this.result_deactivate(u))}}return f<1&&l.length?this.no_results(l):this.winnow_results_set_highlight()},r.prototype.winnow_results_clear=function(){var t,n,r,i,s;this.search_field.val(""),n=this.search_results.find("li"),s=[];for(r=0,i=n.length;r<i;r++)t=n[r],t=e(t),t.hasClass("group-result")?s.push(t.css("display","auto")):!this.is_multiple||!t.hasClass("result-selected")?s.push(this.result_activate(t)):s.push(void 0);return s},r.prototype.winnow_results_set_highlight=function(){var e,t;if(!this.result_highlight){t=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),e=t.length?t.first():this.search_results.find(".active-result").first();if(e!=null)return this.result_do_highlight(e)}},r.prototype.no_results=function(t){var n;return n=e('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),n.find("span").first().html(t),this.search_results.append(n)},r.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},r.prototype.keydown_arrow=function(){var t,n;this.result_highlight?this.results_showing&&(n=this.result_highlight.nextAll("li.active-result").first(),n&&this.result_do_highlight(n)):(t=this.search_results.find("li.active-result").first(),t&&this.result_do_highlight(e(t)));if(!this.results_showing)return this.results_show()},r.prototype.keyup_arrow=function(){var e;if(!this.results_showing&&!this.is_multiple)return this.results_show();if(this.result_highlight)return e=this.result_highlight.prevAll("li.active-result"),e.length?this.result_do_highlight(e.first()):(this.choices>0&&this.results_hide(),this.result_clear_highlight())},r.prototype.keydown_backstroke=function(){var e;if(this.pending_backstroke)return this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke();e=this.search_container.siblings("li.search-choice").last();if(e.length&&!e.hasClass("search-choice-disabled"))return this.pending_backstroke=e,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")},r.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},r.prototype.keydown_checker=function(e){var t,n;t=(n=e.which)!=null?n:e.keyCode,this.search_field_scale(),t!==8&&this.pending_backstroke&&this.clear_backstroke();switch(t){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(e),this.mouse_on_container=!1;break;case 13:e.preventDefault();break;case 38:e.preventDefault(),this.keyup_arrow();break;case 40:this.keydown_arrow()}},r.prototype.search_field_scale=function(){var t,n,r,i,s,o,u,a;if(this.is_multiple){n=0,o=0,i="position:absolute; left: -1000px; top: -1000px; display:none;",s=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(u=0,a=s.length;u<a;u++)r=s[u],i+=r+":"+this.search_field.css(r)+";";return t=e("<div />",{style:i}),t.text(this.search_field.val()),e("body").append(t),o=t.width()+25,t.remove(),this.f_width||(this.f_width=this.container.outerWidth()),o>this.f_width-10&&(o=this.f_width-10),this.search_field.css({width:o+"px"})}},r.prototype.generate_random_id=function(){var t;t="sel"+this.generate_random_char()+this.generate_random_char()+this.generate_random_char();while(e("#"+t).length>0)t+=this.generate_random_char();return t},r}(AbstractChosen),n.Chosen=t}.call(this);


/*!
 * Restore $.browser(), for jQuery 1.9+, but limit scope pollution from any deprecated API.
 */
(function() {
	
    var matched, browser;
	
	// Use of jQuery.browser is frowned upon.
	// More details: http://api.jquery.com/jQuery.browser
	// jQuery.uaMatch maintained for back-compat
    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };
	
    matched = jQuery.uaMatch( navigator.userAgent );
    browser = {};
	
    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }
	
	// Chrome is Webkit, but Webkit is also Safari.
    if ( browser.chrome ) {
        browser.webkit = true;
    } else if ( browser.webkit ) {
        browser.safari = true;
    }
	
    jQuery.browser = browser;
	
    jQuery.sub = function() {
        function jQuerySub( selector, context ) {
            return new jQuerySub.fn.init( selector, context );
        }
        jQuery.extend( true, jQuerySub, this );
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init( selector, context ) {
            if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
                context = jQuerySub( context );
            }

            return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        return jQuerySub;
    };
	
})();


/*!
 * Is Element Visible at User's Viewport ?
 */
$.fn.onScreen = function()
{
    var win			= $(window),
		viewport	= 
		{
			top : win.scrollTop(),
			left : win.scrollLeft()
		},
		e			= $(this),
		bounds		= e.offset();
	
    viewport.right	= viewport.left + win.width();
    viewport.bottom	= viewport.top + win.height();
    bounds.right	= bounds.left + e.outerWidth();
    bounds.bottom	= bounds.top + e.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};


/*!
 * Auto-Init jQuery-UI Tabs, and Dialogs. Plus Chosen selects, and Tipsy Tooltips.
 */
// Avoid `lang` Errors
if ( typeof lang == 'undefined' )
	lang	= function() {};

// Auto-INIT Tabs Widgets
$(function ()
{
	$(document).on( 'theme_is_ready', function () {
		var tabbed	= $( '.tabbed' );
		
		if ( tabbed.length > 0 )
		{
			tabbed.each( function ()
			{
				var t		= $(this),
					nav		= t.find( '.tabs-nav' );
				
				// Remove Loading Class
				nav.removeClass( 'loading' );
				
				// INIT Tabs
				t.tabs();
			});
		}
	});
});


// Auto-INIT Dialogs Via <rel> Attribute
$(function ()
{
	$(document).on( 'theme_is_ready', function () {
		
		var dialogs	= $( '[rel^=dialog], .dialog' ),
			cont	= $( '#dialogs-container' ),
			uiol	= '.ui-widget-overlay',
			cancel	= ( lang( 'dialogs.cancel_button' ) ) ? lang( 'dialogs.cancel_button' ) : 'Cancel';
		
		if ( dialogs.length > 0 )
		{
			dialogs.each( function ()
			{
				var t		= $(this),
					args	= ( t.attr('rel') ) ? t.attr('rel').split(' ') : [],
					tar		= cont.find( t.attr('data-target') ),
					width	= 550,
					height	= false,
					has_cn	= true,
					resize	= false,
					modal	= true,
					show	= false,
					hide	= false,
					btns	= {},
					extra	= {};
				
				// Is Valid Target Element?
				if ( tar.length === 0 )
					return;
				
				// Parse Arguments
				args.forEach( function ( val, index )
				{
					// Got a Width Value?
					if ( val.match(/width/ig) )
						width	= val.match(/\:([\-0-9]+)/ig)[0].replace(/\:/, '');
					
					// Got a Height Value?
					if ( val.match(/height/ig) )
						height	= val.match(/\:([\-0-9]+)/ig)[0].replace(/\:/, '');
					
					// Display Cancel Button?
					if ( val.match(/cancel-btn/ig) )
						has_cn	= val.match(/\:(true|false)/ig)[0].replace(/\:/ig, '');
					
					// Is Resizable?
					if ( val.match(/resizable/ig) )
						resize	= val.match(/\:(true|false)/ig)[0].replace(/\:/ig, '');
					
					// Is Modal?
					if ( val.match(/modal/ig) )
						modal	= val.match(/\:(true|false)/ig)[0].replace(/\:/ig, '');
					
					// Show Effect
					if ( val.match(/show/ig) )
						show	= val.match(/\:(fade|drop|clip)/ig)[0].replace(/\:/ig, '');
					
					// Hide Effect
					if ( val.match(/hide/ig) )
						hide	= val.match(/\:(fade|drop|clip)/ig)[0].replace(/\:/ig, '');
				});
				
				// Validate Width / Height / Cancel Button / Resizable
				width	= parseInt( width );
				height	= parseInt( height );
				has_cn	= ( has_cn === true || ( typeof has_cn == 'string' && has_cn.trim().toLowerCase() !== 'false' ) );
				resize	= ( resize === true || ( typeof resize == 'string' && resize.trim().toLowerCase() !== 'false' ) );
				modal	= ( modal === true || ( typeof modal == 'string' && modal.trim().toLowerCase() !== 'false' ) );
				
				// Dialog Button
				if ( has_cn )
				{
					btns[ cancel ]	= function ()
					{
						$(this).dialog( 'close' );
					}
				}
				
				// The <extra> object
				if ( height > 0 )
					extra.height	= height;
				
				if ( show !== false )
					if ( $.inArray( show, ['fade','drop','clip'] ) > -1 )
						extra.show	= show;
				
				if ( hide !== false )
					if ( $.inArray( hide, ['fade','drop','clip'] ) > -1 )
						extra.hide	= hide;
				
				if ( typeof extra.show != 'undefined' && extra.show === 'drop' )
					extra.show	= { effect: 'drop', direction: 'up' }
				
				if ( typeof extra.hide != 'undefined' && extra.hide === 'drop' )
					extra.hide	= { effect: 'drop', direction: 'down' }
				
				// INIT Dialog
				tar.dialog( $.extend(
				{
					autoOpen	: false,
					width		: width,
					resizable	: resize,
					modal		: modal,
					buttons		: btns,
				}, extra ));
				
				t.click(function ( _ev )
				{
					// tar.parent().css({ 'display': 'block', 'z-index': 999999 }); // FireFox Dirty-Fix
					tar.dialog( 'open' );
					_ev.preventDefault();
				});
			});
		}
		
	});
});


// Auto-INIT Buttons Via <rel> Attribute
$(function ()
{
	$(document).on( 'theme_is_ready', function () {
		
		var buttons	= $( '[rel^=ui-button], .ui-button' );
		
		if ( buttons.length > 0 )
		{
			buttons.each( function ()
			{
				var t		= $(this),
					args	= ( t.attr('rel') ) ? t.attr('rel').split(' ') : [],
					type	= 'default',
					disable	= false;
				
				// Does Element Has Skip Class?
				if ( t.hasClass('skip') )
					return;
				
				// Parse Arguments
				args.forEach( function ( val, index )
				{
					// Button Type
					if ( $.inArray( val, [ 'primary', 'success', 'info', 'warning', 'danger', 'inverse', 'error' ] ) !== -1 )
						type	= val;
					
					// Is Disabled?
					if ( val == 'disabled' )
						disable	= true;
						
					// Todo: Add Icons Support
				});
				
				// Add Needed Classes
				if ( type )
				{
					t.addClass( 'ui-button-' + type );
				}
				
				// INIT Button
				t.button({ disabled: disable });
			});
		}
		
	});
});


// Auto-INIT Chosen-Select Via <rel> Attribute
$(function ()
{
	$(document).on( 'theme_is_ready', function () {
		
		var selects		= $( 'select[rel^=chosen], select[rel^=chzn], select.chosen, select.chzn' ),
			no_results	= ( lang( 'chosen.no_result' ) ) ? lang( 'chosen.no_result' ) : 'No Results Found.';
		
		if ( selects.length > 0 )
		{
			selects.each( function ()
			{
				var t		= $(this),
					args	= ( t.attr('rel') ) ? t.attr('rel').split(' ') : [],
					unit	= 'px',
					width	= false,
					thresh	= false,
					asearch	= false,
					deselct	= false,
					OBJ		=
					{
						no_results_text	: no_results
					};
				
				// Does Element Has Skip Class?
				if ( t.hasClass('skip') )
					return;
				
				// Parse Arguments
				args.forEach( function ( val, index )
				{
					// Width Unit
					if ( $.inArray( val, [ 'unit:%', 'unit:px', 'unit:em' ] ) !== -1 )
						unit	= val.replace( /unit\:/, '' );
					
					// Got a Width Value?
					if ( val.match(/width/ig) )
						width	= val.match(/\:([\-0-9]+)/ig)[0].replace(/\:/, '');
					
					// Got a Search Threshold Value?
					if ( val.match(/search[\:]/ig) )
						thresh	= val.match(/\:([\-0-9]+)/ig)[0].replace(/\:/, '');
					
					// Allow Deselect?
					if ( val.match(/deselect/ig) )
						deselct	= val.match(/\:(true|false)/ig)[0].replace(/\:/ig, '');
					
					// Disable Search?
					if ( val == 'disable-search' )
						asearch	= true;
				});
				
				// Validate Arguments
				width	= parseInt( width );
				thresh	= parseInt( thresh );
				deselct	= ( deselct === true || ( typeof deselct == 'string' && deselct.trim().toLowerCase() !== 'false' ) );
				
				// Width
				if ( width && width > 0 )
					OBJ.width						= width + unit;
				
				// Search Threshold
				if ( thresh && thresh > 0 )
					OBJ.disable_search_threshold	= thresh;
				
				// Disable Search
				if ( asearch )
					OBJ.disable_search				= asearch;
				
				// Allow Deselect
				if ( deselct )
					OBJ.allow_single_deselect		= deselct;
				
				// Allow RTL?
				if ( IS_RTL )
					t.addClass('chzn-rtl');
				
				// INIT Chosen
				t.chosen(OBJ);
				
				// Make Sure Seach Is Disabled
				if ( asearch )
				{
					var sdiv	= t.parent().find( '.chzn-search' );
					
					if ( sdiv.length === 1 )
						sdiv.hide();
				}
			});
		}
		
	});
});


// Auto-INIT Tooltips Via <relttribute
$(function ()
{
	$(document).on( 'theme_is_ready', function () {
		
		var tips	= $( '[rel^=tooltip], .tooltip' );
		
		if ( tips.length > 0 )
		{
			tips.each( function ()
			{
				var t		= $(this),
					args	= ( t.attr('rel') ) ? t.attr('rel').split(' ') : [],
					pos		= 's',
					fade	= true,
					top		= 0,
					left	= 0,
					smart	= true;
				
				// Parse Arguments
				args.forEach( function ( val, index )
				{
					// Tip Position
					if ( $.inArray( val, [ 'top', 'bottom', 'left', 'right' ] ) !== -1 )
						pos		= val;
					
					// Got a Top Value?
					if ( val.match(/pos-top/ig) )
						top		= val.match(/\:([\-0-9]+)/ig)[0].replace(/\:/, '');
					
					// Got a Left Value?
					if ( val.match(/pos-left/ig) )
						left	= val.match(/\:([\-0-9]+)/ig)[0].replace(/\:/, '');
					
					// Fade Effect
					if ( val.match(/fade/ig) )
						fade	= val.match(/\:true/ig);
					
					// Smart Margin Tracking
					if ( val.match(/smart/ig) )
						smart	= val.match(/\:true/ig);
				});
				
				// Re-Assign Position
				switch ( pos )
				{
					default:
					case 'top': pos		= 's';
					break;
					
					case 'bottom': pos	= 'n';
					break;
					
					case 'left': pos	= 'e';
					break;
					
					case 'right': pos	= 'w';
					break;
				}
				
				top		= parseInt( top );
				left	= parseInt( left );
				
				// INIT Tooltip
				t.tipsy({ gravity: pos, top: top, left: left, fade: fade, smart: smart });
			});
		}
		
	});
});
