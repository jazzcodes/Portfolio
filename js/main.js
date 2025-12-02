const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// (function () {
//   const el = document.getElementsByClassName("page");
//   el.style.height = window.innerHeight + 'px';
// })();

// const menu= document.querySelector(".nav-vertical");
// const menuItems = document.querySelectorAll(".nav-vertical__item");
// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".open");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )


const menu = document.querySelector(".vertical-menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
 
  
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    closeIcon.style.maxWidth="100%";
    closeIcon.style.opacity="1";
   
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)