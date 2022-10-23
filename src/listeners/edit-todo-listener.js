import{ INITIATE_EVENT} from "../data.js"
import{ editToDoHandler} from "../handlers/edit-todo-handler.js"

export const editToDoListener = (element) => {
    element.addEventListener(INITIATE_EVENT,editToDoHandler)
}