// Importing locomotive js 


// scripting the moving cursor


let crsr = document.querySelector('.crsr');
document.addEventListener('mousemove', function (val) {
  crsr.style.left = `${val.x}px`;
  crsr.style.top = `${val.y}px`;
});

let cardBox = document.querySelector('.cards');
cardBox.addEventListener('mouseover', function () {
  crsr.style.boxShadow = '0 0 10rem 10rem #ffffff79';
});
cardBox.addEventListener('mouseout', function () {
  crsr.style.boxShadow = '0 0 10rem 10rem hsl(225, 73%, 57%, 40%)';
});

// Gsap code to make background color dark with scroll 

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroll: ".container",
    // markers: true,
    start: "top -5%",
    end: "top -75%",
    scrub: 1
  }
});

// GSAP code to make navbar effect
if (window.matchMedia("(min-width: 720px)").matches) {
  gsap.to(".nav", {
    backdropFilter: "blur(10px)",
    scrollTrigger: {
      trigger: ".nav",
      scroll: ".container",
      // markers:true,
      start: "top -10px",
      end: "top 50%",
      scrub: true
    }
  });
}
else {
  document.querySelector(".menu").style.display = "block";
}


function handleMouseOver() {
  this.classList.add('hovered');
  crsr.style.opacity = '0';
}

function handleMouseOut() {
  this.classList.remove('hovered');
  crsr.style.opacity = '1';
}

const navLinks = document.getElementsByClassName('links');
// Add event listeners to each .links element
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('mouseover', handleMouseOver);
  navLinks[i].addEventListener('mouseout', handleMouseOut);
}

let nav = document.querySelector('.nav');
let navabr = document.querySelector(".navbar");

let menu = document.querySelector(".menu");
let cross = document.querySelector(".cross");

function updateMenuVisibility() {
  if (window.innerWidth >= 720) {
    menu.style.display = "none";
    cross.style.display = "none";
    navabr.classList.remove("active");
    nav.style.backdropFilter = "blur(0)";
  } else {
    menu.style.display = "block";
  }
}

menu.addEventListener("click", function () {
  this.style.display = "none";
  cross.style.display = "block";
  navabr.classList.add("active");
  nav.style.backdropFilter = "blur(20px)";
});

cross.addEventListener("click", function () {
  this.style.display = "none";
  menu.style.display = "block";
  navabr.classList.remove("active");
  nav.style.backdropFilter = "blur(0)";
});

// Call the updateMenuVisibility function initially and add a resize event listener
updateMenuVisibility();
window.addEventListener("resize", updateMenuVisibility);


