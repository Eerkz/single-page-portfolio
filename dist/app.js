/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const mobileMenu = document.querySelector('.mobile-menu')\r\nconst hamburger = document.querySelector('.hamburger')\r\nconst closeIcon = document.querySelector('.close-icon')\r\nconst wideMenuLinks = document.querySelector('.wide-menu')\r\nconst mobileMenuLinks = document.querySelector('.mobile-menu-links')\r\nconst scrollBtn = document.getElementById(\"scrollBtn\");\r\nconst heroSection = document.querySelector('.hero-section')\r\nconst navbar = document.getElementById('nav-bar');\r\nconst navLinks = document.querySelectorAll(\".nav-link\")\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst body = document.querySelector(\"body\");\r\n\r\nscrollBtn.addEventListener('click', ()=>{\r\n    // console.log('ree')\r\n    gsap.to(window, {duration:1, scrollTo:{y:0}});\r\n})\r\n\r\nnavLinks.forEach((link, index) => {\r\n  link.addEventListener(\"click\", () => {\r\n    gsap.to(window, {duration: 1, scrollTo:{y:\"#section\" + (index+1), offsetY:70}});\r\n  });\r\n});\r\n\r\n\r\ninit_pointer();\r\n\r\ninit_pointer({\r\n  pointerColor: \"#FFDE5B\"\r\n})\r\n\r\ninit_pointer({\r\n  pointerColor: \"#FFDE5B\",\r\n  ringSize: 15,\r\n  ringClickSize: 10\r\n})\r\n\r\n\r\nhamburger.addEventListener('click', ()=> {\r\n    mobileMenu.style.display = \"inline\";\r\n    \r\n})\r\n\r\ncloseIcon.addEventListener('click',()=> {\r\n    mobileMenu.style.cssText = \"display:none\";\r\n})\r\n\r\nwindow.onscroll = () => {scrollFunction()}\r\n\r\nconst scrollFunction = () => {\r\n  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\r\n    scrollBtn.style.display = \"block\";\r\n  } else {\r\n    scrollBtn.style.display = \"none\";\r\n  }\r\n}\r\n\r\nconst topFunction = () => {\r\n  document.body.scrollTop = 0; \r\n  document.documentElement.scrollTop = 0; \r\n}\r\n\r\nvar lastScrollTop;\r\n\r\nwindow.addEventListener('scroll', ()=> {\r\n  let scrollTop = window.scrollY || document.documentElement.scrollTop;\r\n\r\n  if(scrollTop > lastScrollTop){\r\n    navbar.style.top='-80px';\r\n    heroSection.style.cssText = 'margin-top:0px;';\r\n  }\r\n  else if(window.scrollY ===0){\r\n    navbar.style.cssText=\"background-color: transparent;\"\r\n    heroSection.style.cssText = 'margin-top:80px;';\r\n  }\r\n  else {\r\n    navbar.style.cssText=\"background-color: #202022;\"\r\n    heroSection.style.cssText = 'margin-top:80px;';\r\n    navbar.style.top='0';\r\n  }\r\n  lastScrollTop = scrollTop;\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://single-page-portfolio/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;