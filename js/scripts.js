window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };


    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var english = document.getElementById('en_click'),
    hebraw = document.getElementById('he_click'),
    en_txt = document.querySelectorAll('#en'),
    he_txt = document.querySelectorAll('#he'),
    nb_en = en_txt.length,
    nb_he = he_txt.length,
    light = document.getElementById('lightmode'),
    dark = document.getElementById('darkmode'),
    currentTheme = localStorage.getItem('data-theme') ? localStorage.getItem('data-theme') : null,
    currentlang = localStorage.getItem('data-lang') ? localStorage.getItem('data-lang') : null;

light.addEventListener('click', function () {
    bgcolor(light, dark);
}, false);
dark.addEventListener('click', function () {
    bgcolor(dark, light);
}, false);

function bgcolor(colorOff, colorOn) {
    if (colorOn.classList.contains('current_clr_light')) {
        colorOn.classList.toggle('current_clr_light');
        colorOff.classList.toggle('current_clr_dark');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    }
    else if (colorOn.classList.contains('current_clr_dark')) {
        colorOn.classList.toggle('current_clr_dark');
        colorOff.classList.toggle('current_clr_light');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    }
}

// english.addEventListener('click', function () {
//     langue(hebraw, english);
// }, false);

// hebraw.addEventListener('click', function () {
//     langue(english, hebraw);
// }, false);

var english = document.getElementById('en_click');
var hebraw = document.getElementById('he_click');

english.addEventListener('click', function () {
    console.log('English clicked');
    afficher(en_txt, nb_en);
    cacher(he_txt, nb_he);
    setLanguage('en');
    langue(hebraw, english);
    document.documentElement.setAttribute('data-lang', 'en');
});

hebraw.addEventListener('click', function () {
    console.log('Hebrew clicked');
    afficher(he_txt, nb_he);
    cacher(en_txt, nb_en);
    setLanguage('he');
    langue(english, hebraw);
    document.documentElement.setAttribute('data-lang', 'he');
});

function langue(langueOff, langueOn) {
    if (langueOff.classList.contains('currentLang') && langueOn.innerHTML == 'he') {
        console.log('langue he click')
        afficher(he_txt, nb_he);
        cacher(en_txt, nb_en);
        hebraw.classList.toggle('currentLang');
        english.classList.toggle('currentLang');
        document.documentElement.setAttribute('data-lang', 'he');
        localStorage.setItem('data-lang', 'he');
    }
    else if (langueOff.classList.contains('currentLang') && langueOn.innerHTML == 'en') {
        console.log('langue en click')
        afficher(en_txt, nb_en);
        cacher(he_txt, nb_he);
        hebraw.classList.toggle('currentLang');
        english.classList.toggle('currentLang');
        document.documentElement.setAttribute('data-lang', 'en');
        localStorage.setItem('data-lang', 'en');
    }
}
function afficher(txt, nb) {
    console.log('afficher works')
    for (var i = 0; i < nb; i++) {
        txt[i].style.display = 'block';
    }
}
function cacher(txt, nb) {
    console.log('cacher works')
    for (var i = 0; i < nb; i++) {
        txt[i].style.display = 'none';
    }
}

function setLanguage(lang) {
    var url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
}


function init() {
    var url = new URL(window.location.href);
    var lang = url.searchParams.get('lang');

    if (lang === 'he') {
        console.log('Language: Hebrew');
        afficher(he_txt, nb_he);
        cacher(en_txt, nb_en);
        hebraw.classList.add('currentLang');
        english.classList.remove('currentLang');
    } else {
        console.log('Language: English');
        afficher(en_txt, nb_en);
        cacher(he_txt, nb_he);
        english.classList.add('currentLang');
        hebraw.classList.remove('currentLang');
    }
}

function initcolor() {
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            dark.classList.toggle('current_clr_dark');
            light.classList.toggle('current_clr_light');
            dark.classList.setItem('current_clr_dark');
        }
        pagechange(homelink, bloglink);
        bgcolor(dark, light);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    init();
});

window.addEventListener('load', () => {
    init();
});
initcolor();

