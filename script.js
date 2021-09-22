AOS.init({
  offset: 110,
  duration: 800,
});

// navbar

const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

const dropdownLink = document.querySelector(".dropdown");
const dropdown = document.querySelector(".dropdown-links");
const dropdownLinks = document.querySelectorAll(".dropdown-links a");
const headerNavLinks = document.querySelectorAll(".header-navbar li");

dropdownLink.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

dropdownLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        dropdown.classList.remove('active')
    })
})

headerNavLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    removeAllClasses();
    navLink.classList.add("active");
  });
});

function removeAllClasses() {
  headerNavLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });
}


