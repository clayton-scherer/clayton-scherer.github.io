const Events = require("./utils/Events");
const ghpages = require('gh-pages');
 
const events = new Events();

ghpages.publish('dist', function(err) {});

events.toggleSideNav();
events.showTab();
