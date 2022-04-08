import { routesBuilder } from "./route.js"

const router = (direction) => {
  let pathway = {};

  if (direction === "/" || direction === "/index.html") {
    pathway.directory = "";
  } else {
    let pattern = /(\/\w+)/g;
    pathway.directory = direction.match(pattern)[0];
    pathway.slug = direction.match(pattern)[1];
  }

  // hash to avoid page reload & redirection error
  let hash = `/#${direction}`;
  window.history.pushState({ hash }, `${hash}`, `${hash}`);

  // make the routes
  let routes = routesBuilder();

  pathway.slug === undefined ? direction : (direction = pathway.directory + "/name"); // shortcut
  routes[direction].controller(pathway);
};

export { router };