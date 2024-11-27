export const renderAboutPage = async () => {

  try {
    const response = await fetch("../cv.json")
    console.log(response)
  }
  catch (error)
  {
    console.error(error);
  }
    return `
    <div class="about">
        <section class="about__section">
          <h1 class="about__header about__header--am">About Me</h1>
          <p class="about__text about__text--am">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui nemo
            sapiente laborum magni nostrum cumque corrupti architecto, ducimus
            unde sit ad esse asperiores dolores similique totam, repudiandae,
            dolore tempora?
          </p>
        </section>
        <section class="about__section">
          <h2 class="about__header about__header--we">Work Experience</h2>
          <section class="about__subsection">
            <h3 class="subsection__header">Hamburger Burgling</h3>
            <div class="subsection__work-status">Side Hustle</div>
            <div class="subsection__place">
              <img src="img/office-building.svg" class="building--svg" alt="office-building icon">Self employed
            </div>
            <div class="subsection__period">Sep 2021-Dec 2021</div>
            <div class="subsection__position">
              <img src="img/map-pin.svg" class="map-pin--svg" alt="map-pin icon" >Bengaluru
            </div>
          </section>

          <section class="about__subsection">
            <h3 class="subsection__header">Internship</h3>
            <div class="subsection__work-status">Internship</div>
            <div class="subsection__place">
              <img src="img/office-building.svg" class="building--svg" alt="office-building icon">Name
              here
            </div>
            <div class="subsection__period">Sep 2021-Dec 2021</div>
            <div class="subsection__position">
              <img src="img/map-pin.svg" class="map-pin--svg" alt="map-pin icon" >Bengaluru
            </div>
          </section>

        </section>
        <section class="about__section">
          <h2 class="about__header">Education</h2>
          <section class="about__subsection">
            <h3 class="subsection__header">Frontend Web Developer</h3>
            <div class="subsection__work-status">Full Time</div>
            <div class="subsection__place">
              <img src="img/office-building.svg" class="building--svg"  alt="office-building icon"> Name
              here
            </div>
            <div class="subsection__period">Sep 2021-Dec 2021</div>
            <div class="subsection__position">
              <img src="img/map-pin.svg" class="map-pin--svg" alt="map-pin icon" >Bengaluru
            </div>
          </section>
        </section>
        </div>
`
}