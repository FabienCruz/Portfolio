import { router } from "./router.js";

export const getDirection = (ear) =>{
    const buttons = document.querySelectorAll(ear);
    buttons.forEach(button => {
      button.addEventListener('click', () => {
      let direction = button.getAttribute("id");
      router(direction);
      })
    })
};