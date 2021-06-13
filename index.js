window.addEventListener('load', function(){
    document.querySelector(':root').style.setProperty("--server-statistics-box", (200 - 0) * (document.getElementById("server-statistics-box").offsetHeight - 0) / (470 - 0) + 70 + "px");
    document.querySelector(':root').style.setProperty("--screen-diagonal", Math.sqrt(document.body.offsetHeight*document.body.offsetHeight + document.body.offsetWidth*document.body.offsetWidth) + "px");
    document.querySelector(':root').style.setProperty("--corner-diagonal-angle", Math.asin(document.querySelector(':root').style.getPropertyValue("corner-diagonal")/document.body.offsetHeight));
});

console.log(Math.sqrt(document.body.offsetHeight*document.body.offsetHeight + document.body.offsetWidth*document.body.offsetWidth)/document.body.offsetHeight+"deg")


fetch('https://serverstat.sushantshah.repl.co/membercount/842428958397038663').then(response => response.json() )
