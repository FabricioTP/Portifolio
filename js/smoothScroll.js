const navLinks = document.querySelectorAll('#navBar a[href^="#"]')

function scrollToSection(event){
    event.preventDefault()
    const element = event.target;
    const id = element.getAttribute("href")
    const section = document.querySelector(id).offsetTop
    window.scroll({
        top: section-55,
        behavior: "smooth"
    })
}

navLinks.forEach(item =>{
    item.addEventListener("click",scrollToSection);
})