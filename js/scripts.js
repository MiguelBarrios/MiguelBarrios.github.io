

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