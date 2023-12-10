const header = document.getElementById('header')
    hero = document.getElementById('hero')
    logoFooter = document.getElementById('logo-footer');


var headerHeight = header.offsetHeight
    heroHeight = hero.offsetHeight;
    beforeHeight = heroHeight + headerHeight + 20 +"px";

document.documentElement.style.setProperty('--beforeHeight', beforeHeight);


// change file source of image depending on width device

if( window.innerWidth <= 600) {
    logoFooter.src = './médias/logo-musée-d_aquitaine-footer-mobile.webp'
} else {
    logoFooter.src = './médias/logo musée d_aquitaine footer.webp'
  }