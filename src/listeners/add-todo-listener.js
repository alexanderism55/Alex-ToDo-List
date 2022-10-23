import { INITIATE_EVENT } from "../data.js";
import { addToDoHandler } from "../handlers/add-todo-handler.js"

export const addToDoListener = (element) => {
    element.addEventListener(INITIATE_EVENT,addToDoHandler)
}