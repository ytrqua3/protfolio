class Project{
    id;
    title;
    img;
    description;
    finished;
    date;
    keywords;

    constructor(itemInfo){
        const { id, title, img, description, finished, date, keywords } = itemInfo;
        this.id = id;
        this.title = title;
        this.img = img;
        this.description = description;
        this.finished = finished;
        this.date = date;
        this.keywords = keywords;
    }

    generateProjectCellHTML(){
        return `
            <a class="side-project-item" href="https://www.google.com">
                <img class="thumbnail" src="${img}">
                <p class="project-title">${title}</p>
            </a>
        `
    }

    getProjectId(){
        return this.id;
    }
}

export const sideProjects = [
    {
        "id": 100,
        "title": 'Trombone product page',
        "img": 'assets/images/thumbnail-111.png',
        "description": 'frontend webpage built using basic html, css in reference to a freecodecamp project',
        "finished": true,
        "date": '2024-08-22T00:00:00-08:00',
        "keywords": ['html', 'css', 'product', 'e-commerece'],
    },
    {
        "id": 101,
        "title": 'calory calculator',
        "img": 'assets/images/thumbnail-112.png',
        "description": 'frontend webpage built in reference to a freecodecamp project. Built to learn basic interactive JS.',
        "finished": true,
        "date": '2025-02-21T00:00:00-08:00',
        "keywords": ['html', 'css', 'interactive', 'calculator', 'js', 'javascript'],
    },
    {
        "id": 102,
        "title": 'contacts page template',
        "img": 'assets/images/thumbnail-113.png',
        "description": 'interactive contact form using Web3Forms api to send message via email. Built for preparation for portfolio',
        "finished": true,
        "date": '2025-03-01T00:00:00-08:00',
        "keywords": ['html', 'css', 'interactive', 'form', 'js', 'javascript', 'contact', 'leave', 'a', 'message', 'api', 'email'],
    },
    {
        "id": 103,
        "title": 'nutrition tag',
        "img": 'assets/images/thumbnail-114.png',
        "description": 'nutrition tag built in reference to freecodecamp, used to learn flex styling',
        "finished": true,
        "date": '2024-09-03T00:00:00-08:00',
        "keywords": ['html', 'css', 'flex', 'styling'],
    },

]

sideProjects.map((projectInfo) => new Project(projectInfo));
