import  { generateSortedProjects } from "./data/projects.js";
import { mod } from "./mathTools.js";
let startIndex = 0;

function renderSideProjectsHTML(sideProjects){
    const sideLen = sideProjects.length;
    let html = '';
    for (let i=0; i<3; i++){
        let image, title;
        if(startIndex+i >= sideLen){
            image = '../../assets/images/doNotEnter.webp';
            title = '-';
        }else{
            image = sideProjects[(startIndex+i)%sideLen].img;
            title = sideProjects[(startIndex+i)%sideLen].title;
        }
        html += `
            <a class="side-project-item" href="https://www.google.com">
                <img class="thumbnail" src="${image}">
                <p class="project-title">${title}</p>
            </a>
        `;
    }
    document.querySelector(".side-project-container").innerHTML = html;
}

let sideProjects = generateSortedProjects();
let sideLen = sideProjects.length;
renderSideProjectsHTML(sideProjects);
const leftScrollEl = document.querySelector('.js-scroll-left');
const rightScrollEl = document.querySelector('.js-right-scroll');
leftScrollEl.addEventListener('click', () => {
    if(sideLen <= 3){
        return;
    }
    startIndex = mod(startIndex-1, sideLen);
    renderSideProjectsHTML(sideProjects);
});
rightScrollEl.addEventListener('click', () => {
    if(sideLen <= 3){
        return;
    }
    startIndex = mod(startIndex+1, sideLen);
    renderSideProjectsHTML(sideProjects);
});

const sortOptionElement = document.querySelector('.side-project-filter');
sortOptionElement.addEventListener('change', () => {
    startIndex = 0;
    sideProjects = generateSortedProjects();
    renderSideProjectsHTML(sideProjects);
    sideLen = sideProjects.length;
})