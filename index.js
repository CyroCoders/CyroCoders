var winWidth, winHeight;
function setDynamicCSSProperties(){
  document.querySelector(':root').style.setProperty("--server-statistics-box", (200 - 0) * (document.getElementById("server-statistics-box").offsetHeight - 0) / (470 - 0) + 70 + "px");
  document.querySelector(':root').style.setProperty("--top-div-padding",document.getElementById("server-statistics-box").offsetHeight-((200 - 0) * (document.getElementById("server-statistics-box").offsetHeight - 0) / (470 - 0) + 70) + "px");
  document.querySelector(':root').style.setProperty("--screen-diagonal", Math.sqrt(document.body.offsetHeight*document.body.offsetHeight + document.body.offsetWidth*document.body.offsetWidth) + "px");
  document.querySelector(':root').style.setProperty("--corner-diagonal-angle", Math.asin(document.querySelector(':root').style.getPropertyValue("corner-diagonal")/document.body.offsetHeight));
  winHeight = Math.min(document.documentElement.clientHeight, window.innerHeight || 0);
  winWidth = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
}
window.addEventListener('load', setDynamicCSSProperties);

window.onresize = setDynamicCSSProperties
console.log(window.scrollY)

console.log(Math.sqrt(document.body.offsetHeight*document.body.offsetHeight + document.body.offsetWidth*document.body.offsetWidth)/document.body.offsetHeight+"deg")

fetch('https://serverstat.sushantshah.repl.co/membercount/842428958397038663').then(response => console.log(response.json()))

document.addEventListener('scroll', (event) =>{
    if (window.scrollY > 575 || winWidth <= 768){
        document.getElementById("Hero").style.position = "unset";
        document.getElementById("statistics-margin").style.marginTop = "0px";
    } else {
        document.getElementById("Hero").style.position = "fixed";
        document.getElementById("statistics-margin").style.marginTop = "100vh";
    }
})

var getScrollSpeed = (function(settings){
    settings = settings || {};

    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();