const renderHeader = () => {
    return `
        <div class="top-bar">
          <img src="img/logo.svg" alt="pavanmg logo" > 
          <div class="hamburger-menu">
            <div class="hamburger-menu__bar"></div>
            <div class="hamburger-menu__bar"></div>
            <div class="hamburger-menu__bar"></div>
          </div>
        </div>
        <nav class="nav">
          <a>Home</a>
          <a>About</a>
          <a>Tech</a>
          <a>Projects</a>
          <a>Contact</a>
        </nav>
        <div class="social-media-icons">
            <img src="img/twitterlogo.svg" alt="twitter logo" class="twitter-logo">
            <img src="img/linkedinlogo.svg" alt="linkedin logo" class="linkedin-logo">
            <img src="img/github.svg" alt="github logo" class="github-logo">
        </div>`
}

export default renderHeader;