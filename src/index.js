const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const scrollBtn = document.getElementById("scrollBtn");
const heroSection = document.querySelector('.hero-section');
const navbar = document.getElementById('nav-bar');
const navLinks = document.querySelectorAll(".nav-link");
const mobileLinks = document.querySelectorAll(".nav-link-mobile");
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector("body");

const scrollTarget = (link,index) => {
  link.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index+1), offsetY:70}});
  });
}

scrollBtn.addEventListener('click', ()=>{
    // console.log('ree')
    gsap.to(window, {duration:1, scrollTo:{y:0}});
})

navLinks.forEach((link, index) => {
  scrollTarget(link,index);
});

mobileLinks.forEach((link, index) => {
  scrollTarget(link,index);
});


init_pointer();

init_pointer({
  pointerColor: "#FFDE5B"
})

init_pointer({
  pointerColor: "#FFDE5B",
  ringSize: 15,
  ringClickSize: 10
})


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

var lastScrollTop;

window.addEventListener('scroll', ()=> {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if(scrollTop > lastScrollTop){
    navbar.style.top='-80px';
    heroSection.style.cssText = 'margin-top:0px;';
  }
  else if(window.scrollY ===0){
    navbar.style.cssText="background-color: transparent;"
    heroSection.style.cssText = 'margin-top:80px;';
  }
  else {
    navbar.style.cssText="background-color: #202022;"
    heroSection.style.cssText = 'margin-top:80px;';
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
});


////////////mobile nav animation///////////////
hamburger.addEventListener('click', ()=> {
    mobileMenu.classList.add('show');
})
