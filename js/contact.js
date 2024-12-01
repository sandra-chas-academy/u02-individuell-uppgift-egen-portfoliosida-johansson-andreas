export const renderContactsPage = () => {
  const puzzleHTML = generatePuzzle();

  return `
     <div class="contact">
        ${puzzleHTML}
        <h1 class="contacts__title"></h1>
        <h2 class="gradient_text">hamburglar@mcdonalds.com</h2>
        <br><span class="contacts__gray-text">or</span><br>
        <h2 class="gradient_text">+23 043 210 60</h2>

    </div>`;
};

const generatePuzzle = () => {
  let arr = [1, 2, 3, 4];

  const shuffledArr = shuffleArray(arr);

  let piecesHTML = "";
  shuffledArr.forEach((index) => {
    piecesHTML += `<div id="puzzle-image-${index}" class="puzzle-image-${index} puzzle__puzzle-piece"></div>`;
  });

  let puzzleHTML = `<div class="puzzle"> ${piecesHTML} </div>`;

  return puzzleHTML;
};

const shuffleArray = (arr) => {
    const originalArray = [...arr];  
    let shuffledArray;
  
    do {
      shuffledArray = [...arr];  
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; 
      }
    } while (arraysAreEqual(originalArray, shuffledArray)); 
  
    return shuffledArray;
  };
  
const arraysAreEqual = (arr1, arr2) => {
if (arr1.length !== arr2.length) return false;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
}
return true;
};