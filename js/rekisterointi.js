document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Estää lomakkeen lähettämisen
    
    // Haetaan syötetyt tiedot
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Näytetään rekisteröintitiedot
    document.getElementById('usernameDisplay').innerText = 'Käyttäjänimi: ' + username;
    document.getElementById('emailDisplay').innerText = 'Sähköposti: ' + email;
    document.getElementById('passwordDisplay').innerText = 'Salasana: ' + password;
    
    // Näytetään rekisteröintitiedot-div
    document.getElementById('registrationDetails').style.display = 'block';
  });
  
