const colors = ["red", "green", "blue"];

/***********/
/* Selects */
/***********/

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // Get random number between 0 and 2. This is 2 because the length of colors array
  const randomNumber = getRandomNumber();

  // Change the color of the body
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

  // What im getting in random number in every click
  console.log(randomNumber);
});

/*************/
/* Functions */
/*************/

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
