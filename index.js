window.addEventListener('load', function(){
    document.querySelector(':root').style.setProperty("--server-statistics-box", (200 - 0) * (document.getElementById("server-statistics-box").offsetHeight - 0) / (470 - 0) + 70 + "px");
    document.querySelector(':root').style.setProperty("--top-div-padding",document.getElementById("server-statistics-box").offsetHeight-((200 - 0) * (document.getElementById("server-statistics-box").offsetHeight - 0) / (470 - 0) + 70) + "px");
    document.querySelector(':root').style.setProperty("--screen-diagonal", Math.sqrt(document.body.offsetHeight*document.body.offsetHeight + document.body.offsetWidth*document.body.offsetWidth) + "px");
    document.querySelector(':root').style.setProperty("--corner-diagonal-angle", Math.asin(document.querySelector(':root').style.getPropertyValue("corner-diagonal")/document.body.offsetHeight));
});
var winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log(window.scrollY)

console.log(Math.sqrt(document.body.offsetHeight*document.body.offsetHeight + document.body.offsetWidth*document.body.offsetWidth)/document.body.offsetHeight+"deg")

fetch('https://serverstat.sushantshah.repl.co/membercount/842428958397038663').then(response => console.log(response.json()))

document.addEventListener('scroll', (event) =>{
    if (window.scrollY > 575){
        document.getElementsByClassName("div-fs")[0].style.position = "unset";
    } else {
        document.getElementsByClassName("div-fs")[0].style.position = "fixed";

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