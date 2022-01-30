let landingPage = document.getElementById("landing-page");

let imagesArray = ["01.jpg" , "02.jpg" , "03.jpg" , "04.jpg" ] ;



setInterval (() => {
    let randomNumber = Math.floor(Math.random () * imagesArray.length);

    landingPage.style.backgroundImage = 'url("../images/'+ imagesArray[randomNumber] +'")' ;

}, 3000)


let colorFluter = document.getElementById("color-Fluter");

let colorsArray = ["#5E293B" , "#E67E71" , "#F7F5E3" , "#64ABD2" , "#52869F"];

setInterval (() => {
    let randomColor =Math.floor(Math.random () * colorsArray.length ) ;

    colorFluter.style.backgroundColor = colorsArray[randomColor] ;
}, 3000)