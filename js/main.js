import { renderHomePage } from "./home.js";
import { renderTechPage } from "./tech.js";
import { renderProjectsPage } from "./projects.js";
import { renderAboutPage } from "./about.js";
import { renderContactsPage } from "./contact.js";
import headerContent from "./header.js";

let pageHeader = document.getElementsByTagName("header")[0];
let pageMain = document.getElementsByTagName("main")[0];
let page = "home";
let transitioning = false;

const router = {
  home: renderHomePage,
  about: renderAboutPage,
  tech: renderTechPage,
  projects: renderProjectsPage, 
  contact: renderContactsPage,
};


const renderHeader = () => {
  pageHeader.innerHTML = headerContent();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      transitionToPage(e.target.innerHTML.toLowerCase());
    });
  });
};

const transitionToPage = async (pageName) => {
  const currentContent = document.querySelector("main > div");

  const oldIndex = Object.keys(router).indexOf(currentContent.classList[0]);
  const newIndex = Object.keys(router).indexOf(pageName);
  if (transitioning || oldIndex === newIndex) return;
  transitioning = true;

  const newContent = document.createElement("div");
  newContent.classList.add("new-content");
  newContent.innerHTML = await renderMain(pageName);
  pageMain.appendChild(newContent);

  let sideToSlide;

  if (newIndex > oldIndex) {
    newContent.classList.toggle("slide-from-right");
    currentContent.classList.toggle("slide-to-left");
    sideToSlide = "slide-to-right";
  } else {
    newContent.classList.toggle("slide-from-left");
    currentContent.classList.toggle("slide-to-right");
    sideToSlide = "slide-to-left";
  }

  setTimeout(() => {
    transitioning = false;
    pageMain.removeChild(newContent);
    currentContent.innerHTML = newContent.innerHTML;
    currentContent.classList.toggle(sideToSlide);
    currentContent.classList = "";
    currentContent.classList.add(pageName);
  }, 1000);
};

const renderMain = async (page) => {
  const pageContent = await router[page]();
  return pageContent;
};

const renderContent = async () => {
  const newContent = document.createElement("div");
  newContent.classList.add(page);
  newContent.innerHTML = await renderMain(page); 
  pageMain.appendChild(newContent);
};

renderHeader();
renderContent();
