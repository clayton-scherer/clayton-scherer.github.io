class Events {
  // open and closes the mobile side nav by adjusting the width of the navbar
  toggleSideNav() {
    const openButton = document.querySelector(".open-btn");
    const closeButton = document.querySelector(".close-btn");
    const closeButtonLinks = document.querySelectorAll(".close-btn--link");

    openButton.addEventListener("click", () => {
      const sideNav = document.querySelector(".side-nav");

      sideNav.style.width = "10rem";
    });

    closeButtonLinks.forEach(link => {
      link.addEventListener("click", () => {
        const sideNav = document.querySelector(".side-nav");

        sideNav.style.width = "0";
      });
    });

    closeButton.addEventListener("click", () => {
      const sideNav = document.querySelector(".side-nav");

      sideNav.style.width = "0";
    });
  }

  showTab() {
    // adds or removes a "hide" class depending on which tab the user wishes to view
    const tabOne = document.querySelector(".tab1");
    const tabTwo = document.querySelector(".tab2");
    const tabThree = document.querySelector(".tab3");

    tabOne.addEventListener("click", () => {
      const tabOneContent = document.querySelector("#welp");
      const tabTwoContent = document.querySelector("#muzify");
      const tabThreeContent = document.querySelector("#date-night-shuffle");

      tabOneContent.classList.remove("hide");
      tabTwoContent.classList.add("hide");
      tabThreeContent.classList.add("hide");
    });

    tabTwo.addEventListener("click", () => {
      const tabOneContent = document.querySelector("#welp");
      const tabTwoContent = document.querySelector("#muzify");
      const tabThreeContent = document.querySelector("#date-night-shuffle");

      tabOneContent.classList.add("hide");
      tabTwoContent.classList.remove("hide");
      tabThreeContent.classList.add("hide");
    });

    tabThree.addEventListener("click", () => {
      const tabOneContent = document.querySelector("#welp");
      const tabTwoContent = document.querySelector("#muzify");
      const tabThreeContent = document.querySelector("#date-night-shuffle");

      tabOneContent.classList.add("hide");
      tabTwoContent.classList.add("hide");
      tabThreeContent.classList.remove("hide");
    });
  }
}

module.exports = Events;
