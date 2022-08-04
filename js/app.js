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


var auth2;
var googleUser; // The current user

gapi.load('auth2', function () {
    auth2 = gapi.auth2.init({
        client_id: '323824111948-scqqpbav49em320p2r7s21oojrbj04rt.apps.googleusercontent.com'
    });
    auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);

    auth2.isSignedIn.listen(signinChanged);
    auth2.currentUser.listen(userChanged); // This is what you use to listen for user changes
});

var signinChanged = function (val) {
    console.log('Signin state changed to ', val);
};

var onSuccess = function (user) {
    console.log('Signed in as ' + user.getBasicProfile().getName());
    // Redirect somewhere
};

var onFailure = function (error) {
    console.log(error);
};

function signOut() {
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

var userChanged = function (user) {
    if (user.getId()) {
        // Do something here
    }
};