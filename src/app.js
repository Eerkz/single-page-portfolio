const mobileMenu = document.querySelector('.mobile-menu')
const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close-icon')
const wideMenuLinks = document.querySelector('.wide-menu')
const mobileMenuLinks = document.querySelector('.mobile-menu-links')
const scrollBtn = document.getElementById("scrollBtn");

hamburger.addEventListener('click', ()=> {
    mobileMenu.style.display = "inline";
    
})

closeIcon.addEventListener('click',()=> {
    mobileMenu.style.cssText = "display:none";
})

window.onscroll = () => {scrollFunction()}

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

const topFunction = () => {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}