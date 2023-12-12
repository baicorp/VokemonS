document.addEventListener("DOMContentLoaded", () => {
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

  // make navbar item active color
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const closeMenuContainer = document.getElementById("close-menu-container");

  hamburgerBtn.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    closeMenuContainer.style.top = "0px";
  });

  closeMenuBtn.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    const getHeight = closeMenuContainer.offsetHeight;
    closeMenuContainer.style.top = `-${getHeight + 20}px`;
  });
});
