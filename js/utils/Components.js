class Components {
  createElement(elementType) {
    if (!elementType) {
      throw new Error("Must pass valid HTML Element");
    }

    const createdElement = document.createElement(elementType);
    return createdElement;
  }

  createNavigationMenu() {
    const navElement = this.createElement("nav");
    const ulElement = this.createElement("ul");
    const buttonElement = this.createElement("button");
    let liElements;

    const sections = ["About Me", "My Projects", "Contact Me", "To Top"];

    liElements = sections.map(section => {
      // creating all elements
      const liElement = document.createElement("li");
      const aElement = document.createElement("a");

      // assigning text value to anchor
      aElement.textContent = section;

      // assign an href attribute to anchor
      aElement.setAttribute("href", `#${section}`);

      // assign a class to anchors
      aElement.classList.add("nav-small__item");

      // adding anchor to list item
      liElement.appendChild(aElement);

      // sending li somewhere
      return liElement.outerHTML;
    });

    ulElement.classList.add("hidden","nav-small");
    ulElement.innerHTML = liElements.join("");

    buttonElement.classList.add("navigation__button");
    buttonElement.textContent = "| | |";

    buttonElement.addEventListener("click", () => {
      ulElement.classList.toggle("hidden");
    });

    navElement.appendChild(buttonElement);
    navElement.appendChild(ulElement);

    return navElement;
  }
}

module.exports = Components;
