"use strict";
//add FB link

//after showing our story adjust the btn accordingly

//add active class to the section on the screen
const links = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

//donate margin-top shows when section is hidden
const orgEl = document.querySelector("#org");

orgEl.addEventListener("change", (e) => {
  const preview = document.querySelector(".donationPreview");

  let bgImg = `background`;
  switch (e.target.value) {
    case "MMC":
      bgImg = `background`;
      break;
    case "VHM":
      bgImg = `veronicasHomeOfMercyI`;
      break;
    case "MV":
      bgImg = `marysVillage`;
      break;
  }

  preview.style.backgroundImage = `url(img/${bgImg}.png)`;
});
