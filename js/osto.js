var ostoskori = []; // Alusta tyhjä ostoskori

// Lisää tuote ostoskoriin
function lisaa_tuote(nimi, hinta) {
    ostoskori.push({ nimi: nimi, hinta: hinta });
    paivitaOstoskori(); // Päivitä ostoskorin näyttö
}

// Poista tuote ostoskorista
function poista_tuote(index) {
    ostoskori.splice(index, 1);
    paivitaOstoskori(); // Päivitä ostoskorin näyttö
}

// Laske ostoskorin yhteishinta
function laskeYhteishinta() {
    var yhteishinta = 0;
    for (var i = 0; i < ostoskori.length; i++) {
        yhteishinta += ostoskori[i].hinta;
    }
    return yhteishinta;
}

// Tilausprosessi
function teeTilaus() {
    var yhteishinta = laskeYhteishinta();
    if (yhteishinta > 0) {
        // Tässä voit toteuttaa tilauksen lähetyksen tai muun toiminnallisuuden
        alert("Tilaus tehty! Yhteishinta: " + yhteishinta + "€");
        // Tyhjennä ostoskori tilauksen jälkeen
        ostoskori = [];
        paivitaOstoskori(); // Päivitä ostoskorin näyttö
    } else {
        alert("Ostoskorisi on tyhjä. Valitse ensin tuotteita.");
    }
}

// Päivitä ostoskorin näyttö
function paivitaOstoskori() {
    var ostoskoriElementti = document.getElementById("ostoskori");
    var yhteishintaElementti = document.getElementById("yhteishinta");
    var yhteishinta = laskeYhteishinta();

    ostoskoriElementti.innerHTML = ""; // Tyhjennä ostoskorin näyttö

    // Lisää jokainen tuote ostoskorista näyttöön ja lisää poistopainike
    for (var i = 0; i < ostoskori.length; i++) {
        var tuote = ostoskori[i];
        var tuoteElementti = document.createElement("li");
        tuoteElementti.textContent = tuote.nimi + " - " + tuote.hinta + "€ ";
        var poistaPainike = document.createElement("button");
        poistaPainike.textContent = "Poista";
        // Lisää tapahtumankäsittelijä poistopainikkeelle
        poistaPainike.addEventListener("click", (function(index) {
            return function() {
                poista_tuote(index);
            };
        })(i));
        tuoteElementti.appendChild(poistaPainike);
        ostoskoriElementti.appendChild(tuoteElementti);
    }

    // Päivitä yhteishinnan näyttö
    yhteishintaElementti.textContent = "Yhteishinta: " + yhteishinta + "€";
}
