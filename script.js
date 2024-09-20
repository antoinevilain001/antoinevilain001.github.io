// Define an array of project objects
const projectsArray = [
    /*{
        title: "My new Project",
        description: "Insert description here.",
        tools: "Django, HTML, CSS, Bootstrap, SQLite, AWS S3, Heroku",
        image: "/assets/img2/placeholder.jpg",
        date: new Date("2024-09-19")
    },*/
    {
        title: "Restify Website",
        description: "An airbnb-like web app based on Django.",
        tools: "Django, HTML, CSS, Bootstrap, SQLite, AWS S3, Heroku",
        image: "/assets/img2/airbnb-graphic.jpg",
        date: new Date("2023-04-15")
    },
    {
        title: "Seam Carving",
        description: "An image compression program based in C.",
        tools: "Django, HTML, CSS, Bootstrap, SQLite, Heroku",
        image: "/assets/img2/seam-carving.png",
        date: new Date("2021-04-15")
    },
    {
        title: "Snake",
        description: "The snake game.",
        tools: "HTML, CSS, Bootstrap, Flask, SQLAlchemy, PostgreSQL, Python",
        image: "/assets/img2/snake.jpg",
        date: new Date("2019-06-30")
    },
    {
        title: "Flappy Bird",
        description: "A flappy bird game.",
        tools: "HTML, CSS, Bootstrap, Flask, SQLAlchemy, PostgreSQL, Python",
        image: "/assets/img2/flappy-bird.png",
        date: new Date("2018-06-30")
    },
    {
        title: "Pacman",
        description: "A 2-player pacman game.",
        tools: "HTML, CSS, Bootstrap, Flask, SQLAlchemy, PostgreSQL, Python",
        image: "/assets/img2/pacman.jpg",
        date: new Date("2020-06-30")
    },
    {
        title: "The Paralleloom",
        description: "A minature loom.",
        tools: "HTML, CSS, Bootstrap, Flask, SQLAlchemy, PostgreSQL, Python",
        image: "/assets/img2/loom.png",
        date: new Date("2022-01-15")
    }
];

// Sort the projects by date (descending)
projectsArray.sort((a, b) => b.date - a.date);

let currentNumProjects = 1; // How many projects currently showing

// Function to display projects in the HTML
function displayProjects() {
    const targetDiv = document.getElementById('insert_projects_here');
    
    if (currentNumProjects === 1) {
        targetDiv.innerHTML = '<h2>Projects:</h2>'; // Add header only on first load
    }

    // Loop through the projects and append them to the target div
    if (currentNumProjects <= projectsArray.length) {
    const project = projectsArray[currentNumProjects-1];
    targetDiv.innerHTML += `
        <div class="col s12 m6 l4">
            <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                    <img alt="Screenshot of web app" src="${project.image}"
                    style="height: 100%; width: 100%" class="activator" />
                </div>
                <div class="card-content">
                    <span class="card-title activator teal-text hoverline">${project.title}<i
                        class="mdi-navigation-more-vert right"></i></span>
                    <i><p style="text-align: right;">${project.date.toISOString().split('T')[0]}</p></i>
                    <p>
                    ${project.description}
                    </p>
                </div>
                <div class="card-reveal">
                    <!-- TODO: change this -- only close button -->
                    <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                    <span class="card-title teal-text"><small>Accomplishments</small><i
                        class="mdi-navigation-close right"></i></span>
                    <ul>
                    <li><b>Tools:</b> ${project.tools}</li>
                    <li>Users can view posts and contact the admin via Contact Page.</li>
                    <li>Admin can Add, Delete, Update posts.</li>
                    </ul>
                    <div class="card-action">
                    
                    </div>
                </div>
            </div>
        </div>
    `;
    }
}

function displayLoadButton() {
    // load more button
    const targetDiv = document.getElementById('insert_button_here');
    if (currentNumProjects < projectsArray.length) {
        targetDiv.innerHTML = `<button class="loadmore" id="loadMoreBtn">Load More (Currently loaded: ${currentNumProjects}/${projectsArray.length})</button>`;
        document.getElementById('loadMoreBtn').addEventListener('click', function() {
            currentNumProjects ++;
            displayProjects();
            displayLoadButton();
        });
    } else {
        targetDiv.innerHTML = ``; // clear the div
    }
}

// Call the function to display projects
displayProjects();
displayLoadButton();
