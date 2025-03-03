import  { sideProjects } from "./data/projects.js";
let startIndex = 0;

function renderSideProjects(){
    document.querySelector(".side-project-container").innerHTML = `
        <a class="side-project-item" href="https://www.google.com">
            <img class="thumbnail" src="${sideProjects[startIndex].img}">
            <p class="project-title">${sideProjects[startIndex].title}</p>
        </a>
        <a class="side-project-item" href="https://www.google.com">
            <img class="thumbnail" src="${sideProjects[startIndex+1].img}">
            <p class="project-title">${sideProjects[startIndex+1].title}</p>
        </a>
        <a class="side-project-item" href="https://www.google.com">
            <img class="thumbnail" src="${sideProjects[startIndex+2].img}">
            <p class="project-title">${sideProjects[startIndex+2].title}</p>
        </a>
    `;
}

renderSideProjects();