!function(e){"use strict";function n(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function s(e,n){var s=t(e,n)?a:i;s(e,n)}var t,i,a;"classList"in document.documentElement?(t=function(e,n){return e.classList.contains(n)},i=function(e,n){e.classList.add(n)},a=function(e,n){e.classList.remove(n)}):(t=function(e,s){return n(s).test(e.className)},i=function(e,n){t(e,n)||(e.className=e.className+" "+n)},a=function(e,s){e.className=e.className.replace(n(s)," ")});var o={hasClass:t,addClass:i,removeClass:a,toggleClass:s,has:t,add:i,remove:a,toggle:s};"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o:e.classie=o}(window),function(){function e(){if(classie.has(s,"open")){classie.remove(s,"open"),classie.add(s,"close"),classie.remove(t,"blur"),classie.add(t,"no-blur");var e=function(n){if(support.transitions){if("visibility"!==n.propertyName)return;this.removeEventListener(transEndEventName,e)}classie.remove(s,"close")};support.transitions?s.addEventListener(transEndEventName,e):e()}else classie.has(s,"close")||(classie.add(s,"open"),classie.add(t,"blur"),classie.remove(t,"no-blur"))}var n=document.getElementById("trigger-overlay"),s=document.querySelector("div.overlay"),t=document.getElementById("content"),i=s.querySelector("button.overlay-close");transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},transEndEventName=transEndEventNames[Modernizr.prefixed("transition")],support={transitions:Modernizr.csstransitions},n.addEventListener("click",e),i.addEventListener("click",e)}();
