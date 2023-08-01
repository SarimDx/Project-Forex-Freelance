// ? Button  apear When Scrolling
let Button = document.querySelector(".button");
window.addEventListener("scroll", () => {
  if (window.scrollY <= 100) {
    Button.classList.add("Button");
    Button.classList.remove("button_apear");
  } else {
    Button.classList.remove("Button");
  }
  // ? Click Button Action
  Button.addEventListener("click", () => {
    scrollTo(0,0);
  });
});