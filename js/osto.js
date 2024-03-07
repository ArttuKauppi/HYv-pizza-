var ostoskori = []; // Alusta tyhjä ostoskori

function lisaa_tuote(nimi, hinta) {
    ostoskori.push({ nimi: nimi, hinta: hinta }); // Lisää tuote ostoskoriin
    paivitaOstoskori(); // Päivitä näyttö
}

function paivitaOstoskori() {
    var ostoskoriElementti = document.getElementById("ostoskori");
    var yhteishintaElementti = document.getElementById("yhteishinta");
    var yhteishinta = 0;

    ostoskoriElementti.innerHTML = ""; // Tyhjennä ensin ostoskorin näyttö

    // Lisää jokainen tuote ostoskorista näyttöön ja laske yhteishinta
    for (var i = 0; i < ostoskori.length; i++) {
        var tuote = ostoskori[i];
        var tuoteElementti = document.createElement("li");
        tuoteElementti.textContent = tuote.nimi + " - " + tuote.hinta + "€";
        ostoskoriElementti.appendChild(tuoteElementti);
        yhteishinta += tuote.hinta;
    }

    // Päivitä yhteishinnan näyttö
    yhteishintaElementti.textContent = "Yhteishinta: " + yhteishinta + "€";
}
