import{URL} from "../data.js"
import { INPUT_TODO } from "../data.js"

export const removeToDoHandler = () => {
  console.log("it works : remove button");
  debugger;
  fetch(URL,{method: "DELETE"})
 
};
