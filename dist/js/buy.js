!function(t){var e={};function o(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=2)}([function(t,e,o){var n,s;void 0===(s="function"==typeof(n=function(){function t(t){this.opts=function(){for(var t=1;t<arguments.length;t++)for(var e in arguments[t])arguments[t].hasOwnProperty(e)&&(arguments[0][e]=arguments[t][e]);return arguments[0]}({},{onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]},t),this.init()}function e(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function o(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:function(t){-1!==this.opts.closeMethods.indexOf("overlay")&&!function(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:function(t){-1!==this.opts.closeMethods.indexOf("escape")&&27===t.which&&this.isOpen()&&this.close()}.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}var n=function(){var t,e=document.createElement("tingle-test-transition"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==e.style[t])return o[t]}();return t.prototype.init=function(){this.modal||(function(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML="×",this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}.call(this),o.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter())},t.prototype.destroy=function(){null!==this.modal&&(function(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.open=function(){var t=this;"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),n?this.modal.addEventListener(n,function e(){"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t.modal.removeEventListener(n,e,!1)},!1):"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),this.checkOverflow()},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.close=function(){if("function"==typeof this.opts.beforeClose){var t=this.opts.beforeClose.call(this);if(!t)return}document.body.classList.remove("tingle-enabled"),window.scrollTo(0,this._scrollPosition),document.body.style.top=null,this.modal.classList.remove("tingle-modal--visible");var e=this;n?this.modal.addEventListener(n,function t(){e.modal.removeEventListener(n,t,!1),e.modal.style.display="none","function"==typeof e.opts.onClose&&e.opts.onClose.call(this)},!1):(e.modal.style.display="none","function"==typeof e.opts.onClose&&e.opts.onClose.call(this))},t.prototype.setContent=function(t){"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t))},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){(function(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}).call(this)},t.prototype.setFooterContent=function(t){this.modalBoxFooter.innerHTML=t},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),e.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky")))},t.prototype.addFooterBtn=function(t,e,o){var n=document.createElement("button");return n.innerHTML=t,n.addEventListener("click",o),"string"==typeof e&&e.length&&e.split(" ").forEach(function(t){n.classList.add(t)}),this.modalBoxFooter.appendChild(n),n},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){var t=window.innerHeight,e=this.modalBox.clientHeight;return e>=t},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(e.call(this),this.setStickyFooter(!0)))},{modal:t}})?n.call(e,o,e,t):n)||(t.exports=s)},,function(t,e,o){"use strict";o.r(e);var n=o(0);!function(t){const e=new n.modal({closeMethods:["overlay","escape","button"],cssClass:["buy"],onOpen:function(){e.getContent().querySelector(".js-crowdsale-copy-adress").addEventListener("click",e=>{e.preventDefault(),(e=>{const o=t.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",t.body.appendChild(o);const n=t.getSelection().rangeCount>0&&t.getSelection().getRangeAt(0);o.select(),t.execCommand("copy"),t.body.removeChild(o),n&&(t.getSelection().removeAllRanges(),t.getSelection().addRange(n))})("0x09541e5e03e3f10730fee50131168a99c5ce15c1")})}});e.setContent('\n    <h1 class="buy__title uppercase">Buy Science Tokens</h1>\n    <p>To sell <a href="//etherscan.io/token/0x2cf2d4919e639b25b806126eb5c97d043ffb0a70#tokenInfo" target="_blank" rel="noopener">Science Tokens (ST)</a>, we are use the special <a href="//etherscan.io/address/0x09541e5e03e3f10730fee50131168a99c5ce15c1#code" target="_blank" rel="noopener">Crowdsale smart-contract</a>. After making the ethereum payment to this address, Science Token (ST) will be sent automatically to the wallet from which you made the payment.</p>\n    <img class="buy__qr-code" src="//chart.googleapis.com/chart?chs=250x250&cht=qr&chl=0x09541e5e03e3f10730fee50131168a99c5ce15c1" aria-hidden="true">\n    <div class="buy__eth-adress">\n      <span>0x09541e5e03e3f10730fee50131168a99c5ce15c1</span>\n      <button class="buy__copy-adress js-crowdsale-copy-adress">\n        <svg clsss="buy__copy-adress__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">\n          <path d="M32.2 8.7H8.9a4 4 0 0 0-4 4V46a4 4 0 0 0 4 4h23.2a4 4 0 0 0 4-4V12.7a4 4 0 0 0-3.9-4zM33.4 46c0 .7-.5 1.2-1.2 1.2H8.9c-.7 0-1.2-.5-1.2-1.2V12.7c0-.7.5-1.2 1.2-1.2h23.2c.7 0 1.2.5 1.2 1.2V46zm7.7-46H17.8a4 4 0 0 0-4 4c0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4 0-.7.5-1.2 1.2-1.2H41c.7 0 1.2.5 1.2 1.2v33.4c0 .7-.5 1.2-1.2 1.2-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4a4 4 0 0 0 4-4V4a4 4 0 0 0-3.9-4z"></path>\n        </svg>\n        <span class="visually-hidden">Copy address</span>\n      </button>\n    </div>\n    <p class="buy__warning"><b>! Do not send ETH from an Exchange</b></p>\n    <p>When you send ETH to ScienceToken (ST) Crowdsale smart-contract from an exchange wallet, your ScienceToken (ST) will be attached to the exchange\'s ETH wallet and maybe you will not be able to receive and send your ScienceToken (ST).</p>\n  ');const o=t.querySelector(".js-crowdsale-buy");o&&o.addEventListener("click",t=>{t.preventDefault(),e.open()})}(document)}]);