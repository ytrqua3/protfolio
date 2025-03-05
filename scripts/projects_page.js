import  { updateOrder } from "./data/projects.js";
import { mod } from "./mathTools.js";
let startIndex = 0;
let sideLen;
let sideProjects = [];

function renderSideProjects(){
    sideProjects = updateOrder();
    sideLen = sideProjects.length;
    document.querySelector(".side-project-container").innerHTML = `
        <a class="side-project-item" href="https://www.google.com">
            <img class="thumbnail" src="${sideProjects[startIndex].img}">
            <p class="project-title">${sideProjects[startIndex].title}</p>
        </a>
        <a class="side-project-item" href="https://www.google.com">
            <img class="thumbnail" src="${sideProjects[(startIndex+1)%sideLen].img}">
            <p class="project-title">${sideProjects[(startIndex+1)%sideLen].title}</p>
        </a>
        <a class="side-project-item" href="https://www.google.com">
            <img class="thumbnail" src="${sideProjects[(startIndex+2)%sideLen].img}">
            <p class="project-title">${sideProjects[(startIndex+2)%sideLen].title}</p>
        </a>
    `;
}

const leftScrollEl = document.querySelector('.js-scroll-left');
const rightScrollEl = document.querySelector('.js-right-scroll');
leftScrollEl.addEventListener('click', () => {
    startIndex = mod(startIndex-1, sideLen);
    renderSideProjects();
});
rightScrollEl.addEventListener('click', () => {
    startIndex = mod(startIndex+1, sideLen);
    renderSideProjects();
});

document.querySelector('.side-project-filter').addEventListener('change', () => {
    renderSideProjects();
})

renderSideProjects();