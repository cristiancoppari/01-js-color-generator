// Numbers and letters to make a HEX color
// #ABC123
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/***********/
/* Selects */
/***********/

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColor = "#";

  // Loop for getting the hex values of the array and attaching it to hexColor variable
  for (let i = 0; i < 6; i++) {
    // Get random number between 0 and 6. This is 6 because the length of the hex color
    const randomNumber = getRandomNumber();
    hexColor += hex[randomNumber];
  }

  // Change the color of the body
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;

  // What im getting in hexColor
  console.log(hexColor);
});

/*************/
/* Functions */
/*************/

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
