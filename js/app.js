particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

//Script che in base al verso di scorrimento della pagina mostra o nasconde la navbar
//Se si sta scorrendo la pagina verso il basso allora la navbar viene nascosta
//Altrimenti viene mostrata
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-400px"; //La navbar rientra con una distanza di 400px dal top della pagina
    }
    prevScrollpos = currentScrollPos;
}

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}