let otherLinks = document.querySelector(".other-links");
let megaMenu = document.querySelector("header  .mega-menu");
let open = false;

document.onclick = function (e) {
  if (e.target === otherLinks && open === false) {
    megaMenu.style.display = "flex";
    megaMenu.style.animationPlayState = "running";
    open = true;
  } else {
    if (open === true) {
      megaMenu.style.display = "none";
      open = false;
    }
  }
};
