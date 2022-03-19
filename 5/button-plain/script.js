let btn = document.querySelector(".btn");
let count = 0;
btn.addEventListener("click", () => {
  count += 1;
  btn.textContent = `You have pressed this button ${count} times`;
});
