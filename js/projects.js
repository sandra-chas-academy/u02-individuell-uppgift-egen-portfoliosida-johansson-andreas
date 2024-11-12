export const renderProjectsPage = () => {
    return `  <div class="projects">
      
      <main class="project__main">
        <h1 class="projects__title">Projects</h1>
        <p class="project__subtitle">Things I've built so far</p>
        <article class="projects__card">
          <img
            src="img/projects/project1.jpg"
            alt="project-1 img"
            class="projects__project-img"
          >
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
          <img
            src="img/projects/project2.jpg"
            alt="project-2 img"
            class="projects__project-img"
          >
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
        <div class="projects__desktop-cards">
          <article class="projects__card">
            <img
              src="img/projects/project3.jpg"
              alt="project-2 img"
              class="projects__project-img"
            >
            <section class="card__body">
              <h2>Project Title 3</h2>
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
          <article class="projects__card">
            <img
              src="img/projects/project4.jpg"
              alt="project-2 img"
              class="projects__project-img"
            >
            <section class="card__body">
              <h2>Project Title 4</h2>
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
          <article class="projects__card">
            <img
              src="img/projects/project5.jpg"
              alt="project-5 img"
              class="projects__project-img"
            >
            <section class="card__body">
              <h2>Project Title 5</h2>
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
          <article class="projects__card">
            <img
              src="img/projects/project6.jpg"
              alt="project-6 img"
              class="projects__project-img"
            >
            <section class="card__body">
              <h2>Project Title 6</h2>
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
        </div>
      </main>
      <footer class="footer">
        <p class="footer__text">
          Designed and built by
          <span class="gradient_text">Hamburglar</span> with
          <span class="gradient_text">Love & Coffee</span>
        </p>
      </footer>
    </div>`
}