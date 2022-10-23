import{URL} from "../data.js"
import { INPUT_TODO } from "../data.js"

export const addToDoHandler = () => {
    const element = document.getElementById(INPUT_TODO)
    const title = element.value
    console.log(title)
    console.log("it works :add button")
    fetch(URL,{
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },body:JSON.stringify({title:title,
        completed: "false"})
    }).catch(err)
console.log(INPUT_TODO.value)
}