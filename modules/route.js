import { landing, index, contact, page } from "./controller.js"


const routesBuilder = () => {
  const routes = {}
  
  const route = (path, controller) => {
    return routes[path] = { controller: controller };
  };
  
  route("/", landing);
  route("/conception_prototype", index);
  route("/recherche_utilisateur", index);
  route("/recherche_utilisateur/name", page);
  route("/conception_prototype/name", page);
  route("/contact", contact);

  return routes;
};

export { routesBuilder }