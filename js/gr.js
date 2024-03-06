document.addEventListener("DOMContentLoaded",onkoKirjaunut);
function onkoKirjaunut(){
    let kirjautunut ='kylla';
if(localStorage.getItem("kirjautunut") === 'kylla') {

    document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
    document.getElementById("kirjautumis_lomake").style.display ="none";
    document.getElementById("menu_nappi").style.display ='block';
    }

            
}
function kirjaudu() {
    
    localStorage.setItem("nimi",document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut","kylla");
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

function kirjauduUlos() {
localStorage.removeItem('kirjautunut');
tarkistaKirjautuminen(); 
}

document.addEventListener('DOMContentLoaded', function () {
tarkistaKirjautuminen();
});
