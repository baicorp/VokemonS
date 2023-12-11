// make navbar item active color
const loc = window.location;
const navbarItems = document.querySelectorAll("#navbar-item");

const defaultColor = "#fff";
const activeColor = "#FEFE84";

navbarItems.forEach((item) => {
  if (loc.href.split("/")[3] === item.getAttribute("href").replace("/", "")) {
    item.style.color = activeColor;
  } else {
    item.style.color = defaultColor;
  }
});

const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerBtnImg = document.getElementById("hamburger-btn-img");
const closeMenuBtn = document.getElementById("close-menu-btn");
const closeMenuContainer = document.getElementById("close-menu-container");

hamburgerBtn.addEventListener("click", () => {
  console.log("menu open");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  closeMenuContainer.style.top = "0px";
});

closeMenuBtn.addEventListener("click", () => {
  console.log("menu close");
  document.getElementsByTagName("body")[0].style.overflow = "auto";
  const getHeight = closeMenuContainer.offsetHeight;
  closeMenuContainer.style.top = `-${getHeight + 20}px`;
});
