!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){timerId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled"," "),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(timerId),e.setAttribute("disabled"," "),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.e7ebba32.js.map
