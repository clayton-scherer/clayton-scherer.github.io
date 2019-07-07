class Events {
  toggleSideNav() {
    const openButton = document.querySelector(".open-btn");
    const closeButton = document.querySelector(".close-btn");

    openButton.addEventListener("click", () => {
      const sideNav = document.querySelector(".side-nav");

      sideNav.style.width = "10rem";
    });

    closeButton.addEventListener("click", () => {
      const sideNav = document.querySelector(".side-nav");

      sideNav.style.width = "0";
    });
  }

  showTab() {
    const tabOne = document.querySelector(".tab1");
    const tabTwo = document.querySelector(".tab2");
    const tabThree = document.querySelector(".tab3");

    tabOne.addEventListener("click", () => {
      const tabOneContent = document.querySelector("#virtual-pet");
      const tabTwoContent = document.querySelector("#hospital");
      const tabThreeContent = document.querySelector("#review-site");

      tabOneContent.classList.remove("hide");
      tabTwoContent.classList.add("hide");
      tabThreeContent.classList.add("hide");
    });

    tabTwo.addEventListener("click", () => {
      const tabOneContent = document.querySelector("#virtual-pet");
      const tabTwoContent = document.querySelector("#hospital");
      const tabThreeContent = document.querySelector("#review-site");

      tabOneContent.classList.add("hide");
      tabTwoContent.classList.remove("hide");
      tabThreeContent.classList.add("hide");
    });

    tabThree.addEventListener("click", () => {
      const tabOneContent = document.querySelector("#virtual-pet");
      const tabTwoContent = document.querySelector("#hospital");
      const tabThreeContent = document.querySelector("#review-site");

      tabOneContent.classList.add("hide");
      tabTwoContent.classList.add("hide");
      tabThreeContent.classList.remove("hide");
    });
  }
}

module.exports = Events;
