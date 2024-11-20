import { fetchGithubRepo } from "./fetchProjects.js";

export const renderProjectsPage = async () => {
  const projectNames = ["quiz-game", "wh-math"];
  const ghUser = "johansson-andreas";

  try {
    const projects = await Promise.all(
      projectNames.map((projectName) => fetchGithubRepo(ghUser, projectName))
    );
    console.log(projects)
    const pCardsArray = document.querySelectorAll(".projects__card")
    console.log(pCardsArray)

  } catch (error) {
    console.log(error);
  }

  return `  
  <div class="projects">
              <h1 class="projects__title">Projects</h1>
        <p class="project__subtitle">Things I've built so far</p>
        <article class="projects__card">
          <section class="card__body">
            <h2>Project Title 1</h2>
            <p class="card__body__text">
              This is a sample project description random things are described
              here
            </p>
            <span class="card__body-title">Tech Stack</span>
            <span class="projects__techstack">: HTML/CSS, JavaScript</span>
          </section>
          <footer class="card__footer">
            <a href=""
              ><img src="img/link-chain.svg" alt="link icon" >Live Preview</a
            >
            <a href=""
              ><img src="img/github.svg" alt="github logo" >View Code</a
            >
          </footer>
        </article>
        <article class="projects__card">
          <section class="card__body">
            <h2>Project Title 2</h2>
            <p class="card__body__text">
              This is a sample project description random things are described
              here
            </p>
            <span>Tech Stack</span>
            <span class="projects__techstack">: HTML/CSS, JavaScript</span>
          </section>
          <footer class="card__footer">
            <a href=""
              ><img src="img/link-chain.svg" alt="link icon" >Live Preview</a
            >
            <a href=""
              ><img src="img/github.svg" alt="github logo" >View Code</a
            >
          </footer>
        </article>
    </div>`;
};
