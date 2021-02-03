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
{
  /* <a
  name="PayPalButton-1 $50 MMC DONATION MMCDONATION$50.00"
  target="paypal"
  href="/~site/Scripts_ForSale/ForSale.dll?CMD=CMDPayPalBuyButton&amp;PRODUCT_ID=4334493&amp;SHIPPING=false&amp;NOTE=false&amp;HSID=1761509101&amp;USERID=3268953"
  onclick="window.open('/~site/Scripts_ForSale/ForSale.dll?CMD=CMDPayPalBuyButton&amp;PRODUCT_ID=4334493&amp;SHIPPING=false&amp;NOTE=false&amp;HSID=1761509101&amp;USERID=3268953','paypal','width=600,height=400,scrollbars,location,resizable,status');return false"
></a>; */
}
