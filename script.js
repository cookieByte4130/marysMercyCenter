"use strict";

//add active class to the section on the screen
const links = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 70 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

//donate now button

//donate margin-top shows when section is hidden
{
  /* <a
  name="PayPalButton-1 $50 MMC DONATION MMCDONATION$50.00"
  target="paypal"
  href="/~site/Scripts_ForSale/ForSale.dll?CMD=CMDPayPalBuyButton&amp;PRODUCT_ID=4334493&amp;SHIPPING=false&amp;NOTE=false&amp;HSID=1761509101&amp;USERID=3268953"
  onclick="window.open('/~site/Scripts_ForSale/ForSale.dll?CMD=CMDPayPalBuyButton&amp;PRODUCT_ID=4334493&amp;SHIPPING=false&amp;NOTE=false&amp;HSID=1761509101&amp;USERID=3268953','paypal','width=600,height=400,scrollbars,location,resizable,status');return false"
></a>; */
}

//after showing our story adjust the btn accordingly

//adjust font size to screen size

//add FB link

//fix the donation section... mb a drop down menu? mb they can make multiple donations? shopping cart design? need to know more about the back end part

//pair down the verbage
