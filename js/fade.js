const alturaTela = window.innerHeight;

const skillsDiv = document.querySelector("#skills");
const skillsPosition = skillsDiv.getBoundingClientRect();
const skillsTopPosition = skillsPosition.top;

const learningNowDiv = document.querySelector("#learningNow");
const learningNowPosition = learningNowDiv.getBoundingClientRect();
const learningNowTopPosition = learningNowPosition.top;

const hobbiesDiv = document.querySelector("#hobbies");
const hobbiesPosition = hobbiesDiv.getBoundingClientRect();
const hobbiesTopPosition = hobbiesPosition.top;

const coursesDiv = document.querySelector("#academicFormation");
const coursesPosition = coursesDiv.getBoundingClientRect();
const coursesTopPosition = coursesPosition.top;

const projectsDiv = document.querySelector("#recentProjects");
const projectsPosition = projectsDiv.getBoundingClientRect();
const projectsTopPosition = projectsPosition.top;

function skillFade(){
    const posicaoTopTela = window.scrollY;
    if(posicaoTopTela >= (skillsTopPosition-550) && posicaoTopTela < learningNowTopPosition-550){
        skillsDiv.classList.add("fadeIn");
    }else{
        skillsDiv.classList.remove("fadeIn");
    }
}
function learningFade(){
    const posicaoTopTela = window.scrollY;
    if(posicaoTopTela >= learningNowTopPosition-550 && posicaoTopTela < hobbiesTopPosition-550){
        learningNowDiv.classList.add("fadeIn");
    }else{
        learningNowDiv.classList.remove("fadeIn");
    }
}
function hobbies_coursesFade(){
    const posicaoTopTela = window.scrollY;
    if(posicaoTopTela >= hobbiesTopPosition-550 && posicaoTopTela < coursesTopPosition-100){
        hobbiesDiv.classList.add("fadeIn");
        coursesDiv.classList.add("fadeIn");
    }else{
        hobbiesDiv.classList.remove("fadeIn");
        coursesDiv.classList.remove("fadeIn");
    }
}
function projectsFade(){
    const posicaoTopTela = window.scrollY;
    if(posicaoTopTela >= coursesTopPosition-300){
        projectsDiv.classList.add("fadeIn");
    }else{
        projectsDiv.classList.remove("fadeIn");
    }
}
window.addEventListener("scroll", skillFade)
window.addEventListener("scroll", learningFade)
window.addEventListener("scroll", hobbies_coursesFade)
window.addEventListener("scroll", projectsFade)