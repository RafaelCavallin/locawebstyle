/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
!function(t,e){"use strict";var n;if("object"==typeof exports){try{n=require("moment")}catch(i){}module.exports=e(n)}else"function"==typeof define&&define.amd?define(function(t){var i="moment";return n=t.defined&&t.defined(i)?t(i):void 0,e(n)}):t.Pikaday=e(t.moment)}(this,function(t){"use strict";var e="function"==typeof t,n=!!window.addEventListener,i=window.document,a=window.setTimeout,o=function(t,e,i,a){n?t.addEventListener(e,i,!!a):t.attachEvent("on"+e,i)},s=function(t,e,i,a){n?t.removeEventListener(e,i,!!a):t.detachEvent("on"+e,i)},r=function(t,e,n){var a;i.createEvent?(a=i.createEvent("HTMLEvents"),a.initEvent(e,!0,!1),a=v(a,n),t.dispatchEvent(a)):i.createEventObject&&(a=i.createEventObject(),a=v(a,n),t.fireEvent("on"+e,a))},l=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},h=function(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")},u=function(t,e){h(t,e)||(t.className=""===t.className?e:t.className+" "+e)},d=function(t,e){t.className=l((" "+t.className+" ").replace(" "+e+" "," "))},f=function(t){return/Array/.test(Object.prototype.toString.call(t))},c=function(t){return/Date/.test(Object.prototype.toString.call(t))&&!isNaN(t.getTime())},m=function(t){return t%4===0&&t%100!==0||t%400===0},p=function(t,e){return[31,m(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},g=function(t){c(t)&&t.setHours(0,0,0,0)},y=function(t,e){return t.getTime()===e.getTime()},v=function(t,e,n){var i,a;for(i in e)a=void 0!==t[i],a&&"object"==typeof e[i]&&void 0===e[i].nodeName?c(e[i])?n&&(t[i]=new Date(e[i].getTime())):f(e[i])?n&&(t[i]=e[i].slice(0)):t[i]=v({},e[i],n):(n||!a)&&(t[i]=e[i]);return t},D=function(t){return t.month<0&&(t.year-=Math.ceil(Math.abs(t.month)/12),t.month+=12),t.month>11&&(t.year+=Math.floor(Math.abs(t.month)/12),t.month-=12),t},_={field:null,bound:void 0,position:"bottom left",format:"YYYY-MM-DD",defaultDate:null,setDefaultDate:!1,firstDay:0,minDate:null,maxDate:null,yearRange:10,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,numberOfMonths:1,mainCalendar:"left",i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},onSelect:null,onOpen:null,onClose:null,onDraw:null},b=function(t,e,n){for(e+=t.firstDay;e>=7;)e-=7;return n?t.i18n.weekdaysShort[e]:t.i18n.weekdays[e]},w=function(t,e,n,i,a,o,s){if(s)return'<td class="is-empty"></td>';var r=[];return o&&r.push("is-disabled"),a&&r.push("is-today"),i&&r.push("is-selected"),'<td data-day="'+t+'" class="'+r.join(" ")+'"><button class="pika-button pika-day" type="button" data-pika-year="'+n+'" data-pika-month="'+e+'" data-pika-day="'+t+'">'+t+"</button></td>"},M=function(t,e){return"<tr>"+(e?t.reverse():t).join("")+"</tr>"},k=function(t){return"<tbody>"+t.join("")+"</tbody>"},x=function(t){var e,n=[];for(e=0;7>e;e++)n.push('<th scope="col"><abbr title="'+b(t,e)+'">'+b(t,e,!0)+"</abbr></th>");return"<thead>"+(t.isRTL?n.reverse():n).join("")+"</thead>"},T=function(t,e,n,i,a){var o,s,r,l,h,u=t._o,d=n===u.minYear,c=n===u.maxYear,m='<div class="pika-title">',p=!0,g=!0;for(r=[],o=0;12>o;o++)r.push('<option value="'+(n===a?o-e:12+o-e)+'"'+(o===i?" selected":"")+(d&&o<u.minMonth||c&&o>u.maxMonth?"disabled":"")+">"+u.i18n.months[o]+"</option>");for(l='<div class="pika-label">'+u.i18n.months[i]+'<select class="pika-select pika-select-month">'+r.join("")+"</select></div>",f(u.yearRange)?(o=u.yearRange[0],s=u.yearRange[1]+1):(o=n-u.yearRange,s=1+n+u.yearRange),r=[];s>o&&o<=u.maxYear;o++)o>=u.minYear&&r.push('<option value="'+o+'"'+(o===n?" selected":"")+">"+o+"</option>");return h='<div class="pika-label">'+n+u.yearSuffix+'<select class="pika-select pika-select-year">'+r.join("")+"</select></div>",m+=u.showMonthAfterYear?h+l:l+h,d&&(0===i||u.minMonth>=i)&&(p=!1),c&&(11===i||u.maxMonth<=i)&&(g=!1),0===e&&(m+='<button class="pika-prev'+(p?"":" is-disabled")+'" type="button">'+u.i18n.previousMonth+"</button>"),e===t._o.numberOfMonths-1&&(m+='<button class="pika-next'+(g?"":" is-disabled")+'" type="button">'+u.i18n.nextMonth+"</button>"),m+="</div>"},C=function(t,e){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+x(t)+k(e)+"</table>"},N=function(s){var r=this,l=r.config(s);r._onMouseDown=function(t){if(r._v){t=t||window.event;var e=t.target||t.srcElement;if(e){if(!h(e,"is-disabled")){if(h(e,"pika-button")&&!h(e,"is-empty"))return r.setDate(new Date(e.getAttribute("data-pika-year"),e.getAttribute("data-pika-month"),e.getAttribute("data-pika-day"))),void(l.bound&&a(function(){r.hide()},100));h(e,"pika-prev")?r.prevMonth():h(e,"pika-next")&&r.nextMonth()}if(h(e,"pika-select"))r._c=!0;else{if(!t.preventDefault)return t.returnValue=!1,!1;t.preventDefault()}}}},r._onChange=function(t){t=t||window.event;var e=t.target||t.srcElement;e&&(h(e,"pika-select-month")?r.gotoMonth(e.value):h(e,"pika-select-year")&&r.gotoYear(e.value))},r._onInputChange=function(n){var i;n.firedBy!==r&&(e?(i=t(l.field.value,l.format),i=i&&i.isValid()?i.toDate():null):i=new Date(Date.parse(l.field.value)),r.setDate(c(i)?i:null),r._v||r.show())},r._onInputFocus=function(){r.show()},r._onInputClick=function(){r.show()},r._onInputBlur=function(){r._c||(r._b=a(function(){r.hide()},50)),r._c=!1},r._onClick=function(t){t=t||window.event;var e=t.target||t.srcElement,i=e;if(e){!n&&h(e,"pika-select")&&(e.onchange||(e.setAttribute("onchange","return;"),o(e,"change",r._onChange)));do if(h(i,"pika-single"))return;while(i=i.parentNode);r._v&&e!==l.trigger&&r.hide()}},r.el=i.createElement("div"),r.el.className="pika-single"+(l.isRTL?" is-rtl":""),o(r.el,"mousedown",r._onMouseDown,!0),o(r.el,"change",r._onChange),l.field&&(l.bound?i.body.appendChild(r.el):l.field.parentNode.insertBefore(r.el,l.field.nextSibling),o(l.field,"change",r._onInputChange),l.defaultDate||(l.defaultDate=e&&l.field.value?t(l.field.value,l.format).toDate():new Date(Date.parse(l.field.value)),l.setDefaultDate=!0));var u=l.defaultDate;c(u)?l.setDefaultDate?r.setDate(u,!0):r.gotoDate(u):r.gotoDate(new Date),l.bound?(this.hide(),r.el.className+=" is-bound",o(l.trigger,"click",r._onInputClick),o(l.trigger,"focus",r._onInputFocus),o(l.trigger,"blur",r._onInputBlur)):this.show()};return N.prototype={config:function(t){this._o||(this._o=v({},_,!0));var e=v(this._o,t,!0);e.isRTL=!!e.isRTL,e.field=e.field&&e.field.nodeName?e.field:null,e.bound=!!(void 0!==e.bound?e.field&&e.bound:e.field),e.trigger=e.trigger&&e.trigger.nodeName?e.trigger:e.field;var n=parseInt(e.numberOfMonths,10)||1;if(e.numberOfMonths=n>4?4:n,c(e.minDate)||(e.minDate=!1),c(e.maxDate)||(e.maxDate=!1),e.minDate&&e.maxDate&&e.maxDate<e.minDate&&(e.maxDate=e.minDate=!1),e.minDate&&(g(e.minDate),e.minYear=e.minDate.getFullYear(),e.minMonth=e.minDate.getMonth()),e.maxDate&&(g(e.maxDate),e.maxYear=e.maxDate.getFullYear(),e.maxMonth=e.maxDate.getMonth()),f(e.yearRange)){var i=(new Date).getFullYear()-10;e.yearRange[0]=parseInt(e.yearRange[0],10)||i,e.yearRange[1]=parseInt(e.yearRange[1],10)||i}else e.yearRange=Math.abs(parseInt(e.yearRange,10))||_.yearRange,e.yearRange>100&&(e.yearRange=100);return e},toString:function(n){return c(this._d)?e?t(this._d).format(n||this._o.format):this._d.toDateString():""},getMoment:function(){return e?t(this._d):null},setMoment:function(n,i){e&&t.isMoment(n)&&this.setDate(n.toDate(),i)},getDate:function(){return c(this._d)?new Date(this._d.getTime()):null},setDate:function(t,e){if(!t)return this._d=null,this.draw();if("string"==typeof t&&(t=new Date(Date.parse(t))),c(t)){var n=this._o.minDate,i=this._o.maxDate;c(n)&&n>t?t=n:c(i)&&t>i&&(t=i),this._d=new Date(t.getTime()),g(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),r(this._o.field,"change",{firedBy:this})),e||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},gotoDate:function(t){var e=!0;if(c(t)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),i=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),a=t.getTime();i.setMonth(i.getMonth()+1),i.setDate(i.getDate()-1),e=a<n.getTime()||i.getTime()<a}e&&(this.calendars=[{month:t.getMonth(),year:t.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustCalendars:function(){this.calendars[0]=D(this.calendars[0]);for(var t=1;t<this._o.numberOfMonths;t++)this.calendars[t]=D({month:this.calendars[0].month+t,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(t){isNaN(t)||(this.calendars[0].month=parseInt(t,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(t){isNaN(t)||(this.calendars[0].year=parseInt(t,10),this.adjustCalendars())},setMinDate:function(t){this._o.minDate=t},setMaxDate:function(t){this._o.maxDate=t},draw:function(t){if(this._v||t){var e=this._o,n=e.minYear,i=e.maxYear,o=e.minMonth,s=e.maxMonth,r="";this._y<=n&&(this._y=n,!isNaN(o)&&this._m<o&&(this._m=o)),this._y>=i&&(this._y=i,!isNaN(s)&&this._m>s&&(this._m=s));for(var l=0;l<e.numberOfMonths;l++)r+='<div class="pika-lendar">'+T(this,l,this.calendars[l].year,this.calendars[l].month,this.calendars[0].year)+this.render(this.calendars[l].year,this.calendars[l].month)+"</div>";if(this.el.innerHTML=r,e.bound&&"hidden"!==e.field.type&&a(function(){e.trigger.focus()},1),"function"==typeof this._o.onDraw){var h=this;a(function(){h._o.onDraw.call(h)},0)}}},adjustPosition:function(){var t,e,n,a=this._o.trigger,o=a,s=this.el.offsetWidth,r=this.el.offsetHeight,l=window.innerWidth||i.documentElement.clientWidth,h=window.innerHeight||i.documentElement.clientHeight,u=window.pageYOffset||i.body.scrollTop||i.documentElement.scrollTop;if("function"==typeof a.getBoundingClientRect)n=a.getBoundingClientRect(),t=n.left+window.pageXOffset,e=n.bottom+window.pageYOffset;else for(t=o.offsetLeft,e=o.offsetTop+o.offsetHeight;o=o.offsetParent;)t+=o.offsetLeft,e+=o.offsetTop;(t+s>l||this._o.position.indexOf("right")>-1&&t-s+a.offsetWidth>0)&&(t=t-s+a.offsetWidth),(e+r>h+u||this._o.position.indexOf("top")>-1&&e-r-a.offsetHeight>0)&&(e=e-r-a.offsetHeight),this.el.style.cssText=["position: absolute","left: "+t+"px","top: "+e+"px"].join(";")},render:function(t,e){var n=this._o,i=new Date,a=p(t,e),o=new Date(t,e,1).getDay(),s=[],r=[];g(i),n.firstDay>0&&(o-=n.firstDay,0>o&&(o+=7));for(var l=a+o,h=l;h>7;)h-=7;l+=7-h;for(var u=0,d=0;l>u;u++){var f=new Date(t,e,1+(u-o)),m=n.minDate&&f<n.minDate||n.maxDate&&f>n.maxDate,v=c(this._d)?y(f,this._d):!1,D=y(f,i),_=o>u||u>=a+o;r.push(w(1+(u-o),e,t,v,D,m,_)),7===++d&&(s.push(M(r,n.isRTL)),r=[],d=0)}return C(n,s)},isVisible:function(){return this._v},show:function(){this._v||(d(this.el,"is-hidden"),this._v=!0,this.draw(),this._o.bound&&(o(i,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var t=this._v;t!==!1&&(this._o.bound&&s(i,"click",this._onClick),this.el.style.cssText="",u(this.el,"is-hidden"),this._v=!1,void 0!==t&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){this.hide(),s(this.el,"mousedown",this._onMouseDown,!0),s(this.el,"change",this._onChange),this._o.field&&(s(this._o.field,"change",this._onInputChange),this._o.bound&&(s(this._o.trigger,"click",this._onInputClick),s(this._o.trigger,"focus",this._onInputFocus),s(this._o.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},N});