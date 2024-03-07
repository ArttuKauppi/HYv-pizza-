// Alusta tyhjä ostoskori
var ostoskori = [];

// Funktio lisää tuotteen ostoskoriin
function lisaa_tuote(nimi, hinta) {
    ostoskori.push({ nimi: nimi, hinta: hinta });
    paivitaOstoskori();
}

// Funktio päivittää ostoskorin näytön
function paivitaOstoskori() {
    var ostoskoriElementti = document.getElementById("ostoskori");
    ostoskoriElementti.innerHTML = ""; // Tyhjennä ostoskorin näyttö

    // Lisää jokainen tuote ostoskorista näyttöön
    for (var i = 0; i < ostoskori.length; i++) {
        var tuote = ostoskori[i];
        var tuoteElementti = document.createElement("li");
        tuoteElementti.textContent = tuote.nimi + " - " + tuote.hinta + "€";
        ostoskoriElementti.appendChild(tuoteElementti);
    }
}
