const Components = require("./utils/Components");
// const Events = require("./utils/Events");

const components = new Components();
// const events = new Events();

const mainHeader = document.querySelector(".main-header");

mainHeader.appendChild(components.createNavigationMenu());
