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

if (navigator.serviceWorker) {
    navigator.serviceWorker.register(
        '/lifi/sw.js',
        { scope: '/lifi/' }
    )
}