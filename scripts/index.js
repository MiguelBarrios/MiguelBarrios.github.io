let skillsAndAbilitiesList = [
    { imgPath: "./images/java.png",name: "Java"}, 
    { imgPath: "./images/springboot.png",name: "Spring Boot"}, 
    { imgPath: "./images/angular.jpeg",name: "Angular"}, 
    { imgPath: "./images/javascript.png",name: "Javascript"}, 
    { imgPath: "./images/SQL.jpeg",name: "SQL"}, 
    { imgPath: "./images/mongodb.png",name: "MongoDB"}, 
    { imgPath: "./images/REST.png",name: "REST"}, 
    { imgPath: "./images/springboot.png",name: "JPA"}, 
    { imgPath: "./images/python.png",name: "Python"}, 
    { imgPath: "./images/jdbc.png",name: "JDBC"}, 
    { imgPath: "./images/typescript.png",name: "TypeScript"}, 
    { imgPath: "./images/maven.jpeg",name: "Maven"},
    { imgPath: "./images/gradle.png",name: "Gradle"},  
    { imgPath: "./images/junit.png",name: "JUnit"}, 
    { imgPath: "./images/git.svg",name: "GIT"}, 
    { imgPath: "./images/docker.png",name: "Docker"}, 
    { imgPath: "./images/html.png",name: "HTML"}, 
    { imgPath: "./images/css.png",name: "CSS"}, 
    { imgPath: "./images/microservices.png",name: "Microservices"}, 
    { imgPath: "./images/python.png",name: "Python"}, 
    { imgPath: "./images/redis.png",name: "Redis"}, 


]
function populateTechIconContainer(){
    let techContainer = document.getElementById("tech-icon-container");
    for(let i = 0; i < skillsAndAbilitiesList.length; ++i){
       let container =  createTechCard(skillsAndAbilitiesList[i]);
       techContainer.appendChild(container);
    }

}

function createTechCard(data){
    let wrapper = document.createElement('div');
    wrapper.classList.add('card', 'pt-2', 'mx-auto')

    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', data.imgPath);
    img.setAttribute('width', '80px');
    img.setAttribute('height', '80px');
    img.classList.add('techIcon');

    let nameContainer = document.createElement('div');
    nameContainer.textContent = data.name;
    nameContainer.setAttribute('style', 'color:black');
    nameContainer.classList.add('d-flex', 'flex-row', 'justify-content-center');

    wrapper.appendChild(img);
    wrapper.appendChild(nameContainer);
    return wrapper;
}

populateTechIconContainer();


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return(rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}

function openMail() {
    window.open("mailto:xyz@abc.com");
}

function sendEmail() {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let url = 'http://3.229.131.97:8080/DayTrainer/api/v1/email';

    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status == 200 || xhr.status == 201) { // Ok or Created
                // let data = JSON.parse(xhr.responseText);
                document.emailForm.reset();
                document.getElementById("messageSentBanner").classList.remove("hideMessageSentBanner");
                setTimeout(function() {
                    document.getElementById("messageSentBanner").classList.add("hideMessageSentBanner");
                }, 3000);
            } else {
                console.error(xhr.status + ': ' + xhr.responseText);
            }
        }
    };
    let emalObject = {
        name: document.emailForm.senderName.value,
        emailAddress: document.emailForm.senderEmail.value,
        message: document.emailForm.senderMessage.value
    };
    let emailJson = JSON.stringify(emalObject); 
    
    xhr.send(emailJson);
}

var projectsHidden = true;

function toggleProjects() {
    let divs = document.querySelectorAll('.extraProject');
    let projects = document.getElementsByClassName("extraProject");
    if(projectsHidden) {
        projectsHidden = false;
        for(var i = 0; i < divs.length; i++) {
            divs[i].classList.remove('hidden');
        }
        document.querySelector('#showMoreProjectBtn').innerHTML = 'show less';
    } else {
        projectsHidden = true;
        for(var i = 0; i < divs.length; i++) {
            divs[i].classList.add('hidden');
        }
        document.querySelector('#showMoreProjectBtn').innerHTML = 'show more';
    }
}