window.addEventListener("load",fade)
function fade(){
    const skillsDiv = document.querySelector("#skills");
    const skillsPosition = skillsDiv.getBoundingClientRect();
    const skillsTopPosition = skillsPosition.top;
    const htmlBar = document.querySelector("#lineProgressBarHTML");
    const cssBar = document.querySelector("#lineProgressBarCSS");
    const jsBar = document.querySelector("#lineProgressBarJS");
    
    const learningNowDiv = document.querySelector("#learningNow");
    const learningNowPosition = learningNowDiv.getBoundingClientRect();
    const learningNowTopPosition = learningNowPosition.top;

    const projectsDiv = document.querySelector("#recentProjects");
    const projectsPosition = projectsDiv.getBoundingClientRect();
    const projectsTopPosition = projectsPosition.top;
    
    if(window.innerWidth <= "760"){
        function skillFade(){
            const posicaoTopTela = window.scrollY;
            if(posicaoTopTela >= (skillsTopPosition-550) && posicaoTopTela < learningNowTopPosition-550){
                skillsDiv.classList.add("fadeIn");
                htmlBar.getElementsByClassName.animation="htmlBar 2s forwards";
                cssBar.getElementsByClassName.animation="htmlBar 2s forwards";
                jsBar.getElementsByClassName.animation="htmlBar 2s forwards";
                
            }else{
                skillsDiv.classList.remove("fadeIn");
            }
        }
        function learningFade(){
            const posicaoTopTela = window.scrollY;
            if(posicaoTopTela >= learningNowTopPosition-550 && posicaoTopTela < projectsTopPosition-550){
                learningNowDiv.classList.add("fadeIn");
            }else{
                learningNowDiv.classList.remove("fadeIn");
            }
        }
        function projectsFade(){;
            const posicaoTopTela = window.scrollY;
            if(posicaoTopTela >= projectsTopPosition -550){
                projectsDiv.classList.add("fadeIn");
            }else{
                projectsDiv.classList.remove("fadeIn");
            }
        }
        window.addEventListener("scroll", skillFade)
        window.addEventListener("scroll", learningFade)
        window.addEventListener("scroll", projectsFade)
    }else{
        skillsDiv.classList.remove("fadeOut");
        learningNowDiv.classList.remove("fadeOut");
        projectsDiv.classList.remove("fadeOut");
    }
}