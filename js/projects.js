import { fetchGithubRepo } from "./fetchProjects.js";

export const renderProjectsPage = async () => {
  const projectNames = ["quiz-game", "wh-math"];
  const ghUser = "johansson-andreas";

  const projectMain = document.createElement("div");
  const projectWrapper = document.createElement("div");
  projectWrapper.classList.add("projects");

  const projectHeader = document.createElement("h1");
  projectHeader.classList.add("projects__title");
  projectHeader.textContent = "Projects";

  const projectText = document.createElement("p");
  projectText.classList.add("project__subtitle");
  projectText.textContent = "Things I've built so far";

  projectWrapper.appendChild(projectHeader);
  projectWrapper.appendChild(projectText);

  const tempCards = projectNames.reduce((acc, projectName) => {
    acc[projectName] = createProjectCard(projectName);
    return acc;
  }, {});

  Object.values(tempCards).forEach((tempCard) => {
    projectWrapper.appendChild(tempCard);
  });

  try {
    const projects = await Promise.all(
      projectNames.map((projectName) => fetchGithubRepo(ghUser, projectName))
    );

    projects.map((project) => {
      tempCards[project.reponame].innerHTML = populateProject(project);
    });
    
  } catch (error) {
    console.log(error);
  }
  projectMain.appendChild(projectWrapper);
  return projectMain.innerHTML;
};

const populateProject = (project) => {

  const techStack = Object.keys(project.languages)
  .map(language => `<span>${language}</span>`)
  .join(", ");

 return `
  <section class="card__body">
    <h2>${project.reponame}</h2>
    <p class="card__body__text">
      ${project.description}
    </p>
    <span>Tech Stack</span>
    <span class="projects__techstack">: ${techStack}</span>
  </section>
  <footer class="card__footer">
    <a href="${project.url}"
      ><img src="img/github.svg" alt="github logo" >View Code</a
    >
  </footer>
`;
};

const createProjectCard = (projectName) => {
  const newCard = document.createElement("article");
  newCard.classList.add("projects__card");
  newCard.id = "card__" + projectName;
  newCard.innerHTML = `
            <section class="card__body">
              <h2>${projectName}</h2>
              <p class="card__body__text">
                Loading.... Please Wait...
              </p>
            </section>
            <footer class="card__footer">
            </footer>
   `;
  return newCard;
};
