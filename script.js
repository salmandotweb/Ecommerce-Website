const dropdownLink = document.querySelector('.dropdown')
const dropdown = document.querySelector('.dropdown-links')
const headerNavLinks = document.querySelectorAll('.header-navbar li')

dropdownLink.addEventListener('click',()=>{
    dropdown.classList.toggle('active')
})

headerNavLinks.forEach(navLink =>{
    navLink.addEventListener('click',()=>{
        removeAllClasses()
        navLink.classList.add('active')
    })
})

function removeAllClasses(){
    headerNavLinks.forEach(navLink =>{
        navLink.classList.remove('active')
    })
}