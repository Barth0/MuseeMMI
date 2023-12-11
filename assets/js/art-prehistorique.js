const playerIframe = document.querySelector(".player-iframe"),
  iframe = playerIframe.querySelector("iframe"),
  unloadedSrc = iframe.getAttribute("data-src"),
  image = playerIframe.querySelector("img");
  logoFooter = document.getElementById('logo-footer');



// change file source of image depending on width device

if( window.innerWidth <= 600) {
  logoFooter.src = './médias/logo-musée-d_aquitaine-footer-mobile.webp'
} else {
  logoFooter.src = './médias/logo musée d_aquitaine footer.webp'
};






// add event listener "click" on iframe for load the video only when user click on it
playerIframe.addEventListener("click", () => {
  iframe.setAttribute("src", unloadedSrc);
  image.style.display = "none";
  iframe.style.display = "block";
});
