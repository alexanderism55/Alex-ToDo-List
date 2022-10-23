import { OUTPUT_TODO } from "../data.js";
import {URL} from "../data.js"

export const displayAllHandler = () => {
  debugger;
  fetch(URL)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((todos) => {
      const parentEl = document.getElementById(OUTPUT_TODO);
      if (parentEl.children > [0]) {
        parentEl.innerHTML = "";
      }
      todos.forEach((todo) => {
        const container = document.createElement("div");
        container.innerHTML = `${todo.title}`;
        container.className = "todo-output";
        parentEl.appendChild(container);
      });
    });
};
