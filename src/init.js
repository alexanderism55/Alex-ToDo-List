debugger;
import {
  INITIATE_EVENT,
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  DISPLAY_ALL_TODO,
} from "./data.js";
import { addToDoListener } from "./listeners/add-todo-listener.js";
import { removeToDoListener } from "./listeners/remove-todo-listener.js";
import { editToDoListener } from "./listeners/edit-todo-listener.js";
import { displayAllListeners } from "./listeners/display-all-listener.js";

addToDoListener(document.getElementById(ADD_TODO));
removeToDoListener(document.getElementById(REMOVE_TODO));
editToDoListener(document.getElementById(EDIT_TODO));
displayAllListeners(document.getElementById(DISPLAY_ALL_TODO));