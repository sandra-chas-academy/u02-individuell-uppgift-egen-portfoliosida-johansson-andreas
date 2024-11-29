export const renderAboutPage = async () => {
  let workExperiences;
  let studies;
  try {
    const response = await (await fetch("../cv.json")).json();

    workExperiences = createWorkExperienceHTML(response["work-experiences"]);
    studies = createEducationHTML(response.studies)
  } catch (error) {
    console.error(error);
  }
  return `
    <div class="about">
        <section class="about__section about__header">
          <h1 class="about__header about__header--am">About Me</h1>
          <p class="about__text about__text--am">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui nemo
            sapiente laborum magni nostrum cumque corrupti architecto, ducimus
            unde sit ad esse asperiores dolores similique totam, repudiandae,
            dolore tempora?
          </p>
        </section>
        ${workExperiences}
        ${studies}
        </div>
`;
};

const createWorkExperienceHTML = (workExperiences) => {
  let workExperiencesSections = "";

  workExperiences.forEach((workExperience) => {
    workExperiencesSections += `
    <section class="about__subsection">
    <h3 class="subsection__header">${workExperience["work-title"]}</h3>
    <div class="subsection__work-status">${workExperience["work-status"]}</div>
    <div class="subsection__work-description">${workExperience["description"]}</div>
    <div class="subsection__place">
      <img src="img/office-building.svg" class="building--svg" alt="office-building icon">${workExperience["employer"]}
    </div>
    <div class="subsection__period">${workExperience["period"]}</div>
    <div class="subsection__position">
    </div>
  </section>
  `;
  });

  let returnHTML = `
  <section class="about__section">
  <h2 class="about__header about__header--we">Work Experience</h2>
  ${workExperiencesSections}
  </section> `;

  return returnHTML;
};

const createEducationHTML = (educations) => {
  let educationSections = "";

  educations.forEach((education) => {
    educationSections += `
    <section class="about__subsection">
    <h3 class="subsection__header">${education["study-title"]}</h3>
    <div class="subsection__work-description">${education["description"]}</div>
    <div class="subsection__place">
      <img src="img/office-building.svg" class="building--svg" alt="office-building icon">${education["study-place"]}
    </div>
    <div class="subsection__period">${education["period"]}</div>
    <div class="subsection__position">
    </div>
  </section>
  `;
  });

  let returnHTML = `
  <section class="about__section">
  <h2 class="about__header about__header--we">Education</h2>
  ${educationSections}
  </section> `;

  return returnHTML;
};
