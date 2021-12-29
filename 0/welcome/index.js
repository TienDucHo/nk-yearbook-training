const elem = document.querySelectorAll(".title");
let username = "Tiến Đức";
elem.forEach((item) => {
  console.log(item.innerHTML);
  item.innerHTML = `Xin chào ${username}!`;
});
