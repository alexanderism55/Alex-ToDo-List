import { INITIATE_EVENT } from "../data.js";
import { removeToDoHandler } from "../handlers/remove-todo-handler.js";

export const removeToDoListener = (element) => {
    element.addEventListener(INITIATE_EVENT, removeToDoHandler)
}