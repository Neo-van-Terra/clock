console.log("Test");


// automatische Größe des Ziffernblattes
window.addEventListener("resize",uhrGroßeAndern);
window.addEventListener("load",uhrGroßeAndern);
function uhrGroßeAndern(){
    let uhrW = document.getElementsByClassName("uhr")[0].offsetWidth;
    let uhrH = document.getElementsByClassName("uhr")[0].offsetHeight;
    if (uhrW < uhrH){
    document.getElementsByClassName("ziffernblatt")[0].style.setProperty("--uhr-grosse", uhrW +"px");
    }
    else {
        document.getElementsByClassName("ziffernblatt")[0].style.setProperty("--uhr-grosse", uhrH +"px");
    }
    console.log(uhrW, uhrH);
}

// Zeiger Drehungen

const hr = document.getElementById("stunden");
const mn = document.getElementById("minuten");
const sc = document.getElementById("sekunden");

setInterval(zeitAbfrage,100);
function zeitAbfrage(){
    let uhrZeit = new Date();
    let stunde = uhrZeit.getHours() * 30;
    let minute = uhrZeit.getMinutes() * 6;
    let sekunde = uhrZeit.getSeconds() * 6;

    hr.style.transform =`rotateZ(${stunde+(minute/12)}deg)`;
    mn.style.transform =`rotateZ(${minute}deg)`;
    sc.style.transform =`rotateZ(${sekunde}deg)`;
}