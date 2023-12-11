const logoFooter = document.getElementById('logo-footer')
    imgCollec1 = document.getElementById('img-collec1')
    imgCollec2 = document.getElementById('img-collec2')
    imgCollec3 = document.getElementById('img-collec3')
    imgCollec4 = document.getElementById('img-collec4');



// change file source of image depending on width device

if( window.innerWidth <= 600) {
    logoFooter.src = './médias/logo-musée-d_aquitaine-footer-mobile.webp'
    imgCollec1.src = './médias/index/trésor-Gaulois-de-tayac-mobile.webp'
    imgCollec2.src = './médias/index/pendule-au-matelot-mobile.webp'
    imgCollec3.src = './médias/index/le-bateau-s_ils-te-mordent-mobile.webp'
    imgCollec4.src = './médias/index/Le-musée-d_armes-et-d_objets-anciens-mobile.webp'
} else {
    logoFooter.src = './médias/logo musée d_aquitaine footer.webp'
    imgCollec1.src = './médias/index/trésor Gaulois de tayac.webp'
    imgCollec2.src = './médias/index/pendule au matelot.webp'
    imgCollec3.src = './médias/index/le bateau s_ils te mordent.webp'
    imgCollec4.src = './médias/index/Le musée d_armes et d_objets anciens.webp'
  };