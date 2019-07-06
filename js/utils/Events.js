class Events {
  toggleSideNav() {
    const openButton = document.querySelector(".open-btn");
    const closeButton = document.querySelector(".close-btn");

    openButton.addEventListener("click", () => {
      const sideNav = document.querySelector(".side-nav");

      sideNav.classList.toggle("hidden");
    });

    closeButton.addEventListener("click", () => {
      const sideNav = document.querySelector(".side-nav");

      sideNav.classList.toggle("hidden");
    });
  }
}

module.exports = Events;
