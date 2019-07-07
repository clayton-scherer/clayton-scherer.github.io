class Events {
  toggleSideNav() {
    const openButton = document.querySelector(".open-btn");
    const closeButton = document.querySelector(".close-btn");

    openButton.addEventListener("click", () => {
      const sideNav = document.querySelector(".side-nav");
      const main = document.querySelector("main");

      sideNav.style.width = "10rem";
      main.style.marginLeft = "10rem";
    });

    closeButton.addEventListener("click", () => {
      const sideNav = document.querySelector(".side-nav");
      const main = document.querySelector("main");

      sideNav.style.width = "0";
      main.style.marginLeft = "0";
    });
  }
}

module.exports = Events;
