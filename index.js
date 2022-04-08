import { getDirection } from "./modules/getDirection.js";
import { setting } from "./modules/setting.js";
import { router } from "./modules/router.js";

getDirection(setting.navigation);

window.addEventListener('load', router(window.location.hash.slice(1)));
window.addEventListener('popstate', router(window.location.hash.slice(1)));

/*

A simple personnal project with learning perspective, inspired by 

https://medium.com/@fro_g/routing-in-javascript-d552ff4d2921
and 
https://morioh.com/p/7704489a34d0

*/