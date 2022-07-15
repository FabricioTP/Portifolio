// SECTIONS
const aboutMe = document.querySelector("#aboutMe")
const skills = document.querySelector("#skillsSection")
const learningNow = document.querySelector("#nextSkillSection")
const projects = document.querySelector("#projectsSection")
const contact = document.querySelector("#contact")
//NAVLINKS
const aboutMeNav = document.querySelectorAll("a")[0]
const skillsNav = document.querySelectorAll("a")[1]
const learningNowNav = document.querySelectorAll("a")[2]
const projectsNav = document.querySelectorAll("a")[3]
const contactNav = document.querySelectorAll("a")[4]

function aboutMeFadeIn(){
    if(window.innerWidth > 1280){
        aboutMe.style.display = "grid"
        skills.style.display = "none"
        learningNow.style.display = "none"
        projects.style.display = "none"
        contact.style.display = "none"
    }
}
function skillsFadeIn(){
    if(window.innerWidth > 1280){
        const skillCont = document.querySelector("#skills")
        skillCont.classList.add("fadeIn")
        aboutMe.style.display = "none"
        skills.style.display = "grid"
        learningNow.style.display = "none"
        projects.style.display = "none"
        contact.style.display = "none"
    }
}
function learningNowFadeIn(){
    if(window.innerWidth > 1280){
        aboutMe.style.display = "none"
        skills.style.display = "none"
        learningNow.style.display = "initial"
        projects.style.display = "none"
        contact.style.display = "none"
    }
}
function projectsFadeIn(){
    if(window.innerWidth > 1280){
        aboutMe.style.display = "none"
        skills.style.display = "none"
        learningNow.style.display = "none"
        projects.style.display = "flex"
        contact.style.display = "none"
    }
}
function contactFadeIn(){
    if(window.innerWidth > 1280){
        aboutMe.style.display = "none"
        skills.style.display = "none"
        learningNow.style.display = "none"
        projects.style.display = "none"
        contact.style.display = "flex"
    }
}


aboutMeNav.addEventListener("click",aboutMeFadeIn)
skillsNav.addEventListener("click",skillsFadeIn)
learningNowNav.addEventListener("click",learningNowFadeIn)
projectsNav.addEventListener("click",projectsFadeIn)
contactNav.addEventListener("click",contactFadeIn)