const playerIframe = document.querySelector(".player-iframe"),
  iframe = playerIframe.querySelector("iframe"),
  unloadedSrc = iframe.getAttribute("data-src"),
  image = playerIframe.querySelector("img");
playerIframe.addEventListener("click", () => {
  iframe.setAttribute("src", unloadedSrc);
  image.style.display = "none";
  iframe.style.display = "block";
});
