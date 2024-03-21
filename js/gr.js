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

function tieto(){

    var osoite = document.getElementById("osoite").value;
    var talo = document.getElementById("talo").value;
    var talonNumero = document.getElementById("talonNumero").value;
    var ovikoodi = document.getElementById("ovikoodi").value;
    

}
// Tilausprosessi
function tila() {
    var yhteishinta = laskeYhteishinta();
    if (ostoskori.length > 0) { // Tarkista, että ostoskorissa on tuotteita ennen tilauksen tekemistä
        
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

// Lisää monta tuotetta kerralla

function naytaosoite() {
    document.getElementById('osoite').style.display = 'block';
    document.getElementById('nappi').style.display = 'none';
    }
    function muokkaa() {
        document.getElementById('tayte').style.display = 'block';
        }
        function muokkaa2() {
            document.getElementById('tayte2').style.display = 'block';
            }
            function muokkaa3() {
                document.getElementById('tayte3').style.display = 'block';
                }
                function muokkaa4() {
                    document.getElementById('tayte4').style.display = 'block';
                    }
                    function muokkaa5() {
                        document.getElementById('tayte5').style.display = 'block';
                        }
                        function muokkaa6() {
                            document.getElementById('tayte6').style.display = 'block';
                            }
                            function muokaa7() {
                                document.getElementById('tayte7').style.display = 'block';
                                }
                                  
                            function fantasia() {
                                document.getElementById('fantasia').style.display = 'block';
                                }
                                    
                
    
