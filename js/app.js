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

function handleCredentialResponse(response) {
    // Here we can do whatever process with the response we want
    // Note that response.credential is a JWT ID token
    console.log("Encoded JWT ID token: " + response.credential);
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "323824111948-scqqpbav49em320p2r7s21oojrbj04rt.apps.googleusercontent.com", // Replace with your Google Client ID
        callback: handleCredentialResponse // We choose to handle the callback in client side, so we include a reference to a function that will handle the response
    });
    // You can skip the next instruction if you don't want to show the "Sign-in" button
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"), // Ensure the element exist and it is a div to display correcctly
        { theme: "outline", size: "large" }  // Customization attributes
    );
    google.accounts.id.prompt(); // Display the One Tap dialog
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "323824111948-scqqpbav49em320p2r7s21oojrbj04rt.apps.googleusercontent.com", // Replace with your Google Client ID
        login_uri: "https://lumarans30.github.io/lifi" // We choose to handle the callback in server side, so we include a reference to a endpoint that will handle the response
    });
    // You can skip the next instruction if you don't want to show the "Sign-in" button
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"), // Ensure the element exist and it is a div to display correcctly
        { theme: "outline", size: "large" }  // Customization attributes
    );
    google.accounts.id.prompt(); // Display the One Tap dialog
}