document.addEventListener("DOMContentLoaded",onkoKirjaunut);
function onkoKirjaunut(){
    let kirjautunut ='kylla';
if(localStorage.getItem("kirjautunut") === 'kylla') {

    document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
    document.getElementById("rekisteroitymislomake_nappi").style.display ="none";
    document.getElementById("kirjautumis_lomake").style.display ="none";
    document.getElementById("menu_nappi").style.display ='block';
    document.getElementById("menu_nappi2").style.display ='block';
    document.getElementById("about_teksti").style.display ='block';
    document.getElementById().textContent += localStorage.getItem("password");
    }

            
}
function kirjaudu() {
    
    localStorage.setItem("nimi",document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut","kylla");
    localStorage.setItem("salasana",document.getElementById("salasana").value);
}

if (kirjautunut) {
    kirjauduUlosNappi.style.display = 'block';
} else {
    kirjauduUlosNappi.style.display = 'none';
}
if (kirjautunut) {
    menu_nappi.style.display = 'block';
} else {
    menu_nappi.style.display = 'none';
}
if(localStorage) {

    kirjautumis_lomake.style.display ='block';
} else {
    kirjautumis_lomake.style.display ='none'; 
}
if (kirjautunut) {
    rekisteroitymislomake_nappi.style.display = 'block';
} else {
    rekisteroitymislomake_nappi.style.display = 'none';
}
if (kirjautunut) {
    menu_nappi2.style.display = 'block';
} else {
    menu_nappi2.style.display = 'none';
}

function kirjauduUlos() {
    localStorage.clear();
    tarkistaKirjautuminen(); 
}



document.addEventListener('DOMContentLoaded', function () {
tarkistaKirjautuminen();
});
