const openMenu = new Audio("./audio/abrirMenu.wav");
const fechaMenu = new Audio("./audio/fecharMenu.wav")
const hamburgerMenu = document.querySelector("#hamburgerMenu")
const header = document.querySelector("header")
const logo = document.querySelector("#logo")
const navBar = document.querySelector("#navBar")
const navLists = document.querySelectorAll("li")

function abreMenu(){
    if(hamburgerMenu.textContent == "☰"){
        hamburgerMenu.textContent= "X"
        openMenu.play()
        for(let i = 0; i < navLists.length; i++){
            navLists[i].style.transform="translateX(0px)"
        }
    }else{
        hamburgerMenu.textContent = "☰"
        fechaMenu.play()
        for(let i = 0; i < navLists.length; i++){
            navLists[i].style.transform="translateX(800px)"
        }
    }
}
hamburgerMenu.addEventListener("click", abreMenu)
