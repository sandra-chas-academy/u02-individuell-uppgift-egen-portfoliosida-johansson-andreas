import { renderHomePage } from "./home.js";
import { renderTechPage } from "./tech.js";
import { renderProjectsPage } from "./projects.js";
import { renderAboutPage } from "./about.js";
import { renderContactsPage } from "./contact.js";
import headerContent from "./header.js";

let pageBody = document.getElementsByTagName("body")[0];
let pageHeader = document.getElementsByTagName("header")[0];
let pageMain = document.getElementsByTagName("main")[0];
let page = "index"

const renderHeader = () => {
    pageHeader.innerHTML = headerContent();
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            pageMain.innerHTML = renderMain((e.target.innerHTML).toLowerCase());
        })
    });
}

const renderMain = (page) => {
    let returnHTML;
    switch(page) {
        case("tech"): 
        returnHTML = renderTechPage();
        break;
        case("home"):
        returnHTML = renderHomePage();
        break;
        case("projects"):
        returnHTML = renderProjectsPage();
        break;
        case("contact"):
        returnHTML = renderContactsPage();
        break;
        case("about"):
        returnHTML = renderAboutPage();
        break;
    }
    pageBody.classList = page;
    return returnHTML;
}

const renderContent = () => {
    pageMain.innerHTML = renderMain(page);
}

renderHeader();
renderContent();