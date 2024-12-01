import { renderHomePage } from "./home.js";
import { renderTechPage } from "./tech.js";
import { renderProjectsPage } from "./projects.js";
import { renderAboutPage } from "./about.js";
import { renderContactsPage } from "./contact.js";
import headerContent from "./header.js";
import footerContent from "./footer.js"

let pageHeader = document.getElementsByTagName("header")[0];
let pageMain = document.getElementsByTagName("main")[0];
let pageFooter = document.getElementsByTagName("footer")[0];

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
  document.body.style.overflow = "hidden";
  const currentContent = document.querySelector("main > div");

  const oldIndex = Object.keys(router).indexOf(currentContent.classList[0]);
  const newIndex = Object.keys(router).indexOf(pageName);
  if (transitioning || oldIndex === newIndex) return;
  transitioning = true;

  const newContent = document.createElement("div");
  newContent.classList.add("new-content");
  newContent.classList.add(pageName)
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
    document.body.style.overflow = "unset";

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

const renderFooter = async () => {
  pageFooter.innerHTML = footerContent(); 

}
let lastMousePos;
let squares;
let zIndexes = [];

document.body.addEventListener("mousedown", (e) => {
  if(e.target.classList.contains("puzzle__puzzle-piece")) {
    squares = document.querySelectorAll(".puzzle__puzzle-piece");
    if(zIndexes.includes(e.target)) zIndexes.splice(zIndexes.indexOf(e.target), 1)
    zIndexes.push(e.target)
    zIndexes.forEach((square, index) => {
      square.style.zIndex = index + 1;
    })
    // const startCoords = [e.target.offsetLeft, e.target.offsetTop];
    lastMousePos = { x: e.clientX, y: e.clientY };
    e.target.addEventListener("mousemove", moveSquare)
  }
})
document.body.addEventListener("mouseup", (e) => {
  squares = document.querySelectorAll(".puzzle__puzzle-piece");

  let arrayToSort = [...squares];
  arrayToSort = sortByXPos(arrayToSort);

  if(arrayToSort.length == 0) return

  let squarePositions = {};

  if(arrayToSort[0].offsetLeft < arrayToSort[1].offsetLeft) {
    squarePositions.topLeft = arrayToSort[0];
    squarePositions.topRight = arrayToSort[1];
  }
  else {
    squarePositions.topLeft = arrayToSort[1];
    squarePositions.topRight = arrayToSort[0]
  }

  if(arrayToSort[2].offsetLeft < arrayToSort[3].offsetLeft) {
    squarePositions.bottomLeft = arrayToSort[2];
    squarePositions.bottomRight = arrayToSort[3];
  }
  else {
    squarePositions.bottomLeft = arrayToSort[3];
    squarePositions.bottomRight = arrayToSort[2]
  }


  if(checkPosition(squarePositions)) {
    if(squarePositions.topLeft.id == "puzzle-image-1" && squarePositions.topRight.id == "puzzle-image-2" && squarePositions.bottomLeft.id == "puzzle-image-3" && squarePositions.bottomRight.id == "puzzle-image-4") {
      const puzzle = document.body.querySelector(".puzzle")

      if(document.body.querySelector(".winner-div")) {
      }
      else {
        const winText = document.createElement("div")
        winText.classList.add("winner-div")
        winText.innerHTML = "Yay you are win. Much win. Many win"
  
        puzzle.parentNode.insertBefore(winText, puzzle.nextSibling);
      }
    }
  }

  squares.forEach(square => {
    square.removeEventListener("mousemove", moveSquare)
  })
})

const sortByXPos = (array) => {
  const sortedArray = array.sort((a, b) => a.offsetTop - b.offsetTop)

  return sortedArray;
}

const checkPosition = (squares) => {
  const parent = squares.topLeft.parentElement;

  const parentRect = parent.getBoundingClientRect();

  const isInsideParent = (x, y) => {
    return (
      x >= parentRect.left && x <= parentRect.right &&
      y >= parentRect.top && y <= parentRect.bottom
    );
  };

  const topLeft = squares.topLeft.getBoundingClientRect();
  const topLeftInside = isInsideParent(topLeft.left, topLeft.top);

  const topRight = squares.topRight.getBoundingClientRect();
  const topRightInside = isInsideParent(topRight.right, topRight.top);

  const bottomLeft = squares.bottomLeft.getBoundingClientRect();
  const bottomLeftInside = isInsideParent(bottomLeft.left, bottomLeft.bottom);

  const bottomRight = squares.bottomRight.getBoundingClientRect();
  const bottomRightInside = isInsideParent(bottomRight.right, bottomRight.bottom);

  if (topLeftInside && topRightInside && bottomLeftInside && bottomRightInside) {
    return true;
  } else {
    return false;
  }
};

const moveSquare = (event) => {
  if (lastMousePos) {
    const deltaX = event.clientX - lastMousePos.x; 
    const deltaY = event.clientY - lastMousePos.y; 

    const currentX = parseInt(event.target.style.left || 0, 10);
    const currentY = parseInt(event.target.style.top || 0, 10);

    event.target.style.left = `${currentX + deltaX}px`;
    event.target.style.top = `${currentY + deltaY}px`;

    lastMousePos = { x: event.clientX, y: event.clientY };
  }
}

renderHeader();
renderContent();
renderFooter();