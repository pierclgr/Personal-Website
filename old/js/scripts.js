/* Fade */
function fadeIn(el, time) {
    el.style.display = "flex";
    el.style.opacity = 0;
  
    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();
    
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
  
    tick();
}

function fadeOut(el, time) {
    el.style.opacity = 1;
  
    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity - (new Date() - last) / time;
        last = +new Date();
    
        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
  
    tick();
    setTimeout(function(){
        el.style.display = "none";
    }, 250);
}
  

/* Navbar resize on scroll */
scrollFunction();
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        elements = document.getElementsByClassName("nav-bar-container");
        i=0;
        while(i < elements.length) {
            elements[i].style.height = "60px";
            elements[i].style.backgroundColor = "#262626";
            i++;
        }
    } else {
        elements = document.getElementsByClassName("nav-bar-container");
        i=0;
        while(i < elements.length) {
            elements[i].style.height = "100px";
            elements[i].style.backgroundColor = "transparent";
            i++;
        }
    }
}

/* Parallax effect */
var parallax= document.getElementById("summary");

window.addEventListener("scroll", function() {
    var scrolledHeight= window.pageYOffset, limit= parallax.offsetTop+ parallax.offsetHeight;         
    if(scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
        parallax.style.backgroundPositionY=(scrolledHeight - parallax.offsetTop) / 2 + "px";
    } else {
        parallax.style.backgroundPositionY= "0";
    }
});

/* Hamburger toggler */
mobileMenu = document.getElementsByClassName("mobile-nav-bar")[0];
mobileMenu.style.display = "none";
mobileMenu.style.opacity = "0";

htmlElement = document.getElementsByTagName("html")[0];

function toggleHamburgerButton() {
    if(mobileMenu.style.display == "none") {
        fadeIn(mobileMenu, 250);
        htmlElement.style.overflow = "hidden";
    } else {
        fadeOut(mobileMenu, 250);
        htmlElement.style.overflow = "visible";
    }
}

/* Close menu on menu voice click */
linkWork = document.getElementById("linkWork");
linkAbout = document.getElementById("linkAbout");
linkSummary = document.getElementById("linkSummary");

linkSummary.addEventListener("click", closeMenu);
linkWork.addEventListener("click", closeMenu);
linkAbout.addEventListener("click", closeMenu);

function closeMenu() {
    mobileMenu = document.getElementsByClassName("mobile-nav-bar")[0];
    fadeOut(mobileMenu, 250);
    htmlElement.style.overflow = "visible";
}

/* Center experience container */
function centerExperienceContainer() {
    width = window.innerWidth || document.body.clientWidth;
    experienceContainer = document.getElementById("experienceContainer");
    divWidth = experienceContainer.scrollWidth;

    if(divWidth == width) {
        experienceContainer.style.justifyContent = "center";
    } else {
        experienceContainer.style.justifyContent = "flex-start";
    }
}

centerExperienceContainer();
window.addEventListener('resize', centerExperienceContainer);

/* Safari, IE, Edge*/
var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') <= -1) {
        document.body.style.scrollSnapType = "none";
        document.getElementsByClassName("experience-container")[0].style.scrollSnapType = "none";
    }
}

if (ua.indexOf('IE') != -1) { 
    if (ua.indexOf('chrome') <= -1) {
        document.body.style.scrollSnapType = "none";
        document.getElementsByClassName("experience-container")[0].style.scrollSnapType = "none";
    }
}

if (ua.indexOf('edge') != -1) { 
    if (ua.indexOf('chrome') <= -1) {
        document.body.style.scrollSnapType = "none";
        document.getElementsByClassName("experience-container")[0].style.scrollSnapType = "none";
    }
}

/* marquee */
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}