'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */








/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */





/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);




fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cdogecoin%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=5')
.then((res)=>res.json())
.then((dataInfo)=>{
    var coinPrice24=document.getElementsByClassName('last-24')
    var coinPrice=document.getElementsByClassName('coin-price')
    coinPrice[0].innerHTML=Intl.NumberFormat().format(dataInfo.bitcoin.usd)
    coinPrice[1].innerHTML=Intl.NumberFormat().format(dataInfo.ethereum.usd)
    coinPrice[2].innerHTML=Intl.NumberFormat().format(dataInfo.dogecoin.usd)
    coinPrice[3].innerHTML=Intl.NumberFormat().format(dataInfo.litecoin.usd)
   
    coinPrice24[0].innerHTML=Intl.NumberFormat().format(dataInfo.bitcoin.usd_24h_change)
    coinPrice24[1].innerHTML=Intl.NumberFormat().format(dataInfo.ethereum.usd_24h_change)
    coinPrice24[2].innerHTML=Intl.NumberFormat().format(dataInfo.dogecoin.usd_24h_change)
    coinPrice24[3].innerHTML=Intl.NumberFormat().format(dataInfo.litecoin.usd_24h_change)
   
    
   
})