import {INITIATE_EVENT} from "../data.js";
import{displayAllHandler} from "../handlers/display-all-handler.js";

export const displayAllListeners = (element) => {
element.addEventListener(INITIATE_EVENT,displayAllHandler)
}