const header = document.getElementById('header')
    hero = document.getElementById('hero');
var headerHeight = header.offsetHeight
    heroHeight = hero.offsetHeight;
    beforeHeight = heroHeight + headerHeight + 20 +"px";

document.documentElement.style.setProperty('--beforeHeight', beforeHeight)