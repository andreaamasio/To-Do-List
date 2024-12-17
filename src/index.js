import "./style.css"
import { Project } from "./projects.js"
import { Task, addTask } from "./tasks.js"
import { askProjectName } from "./dom.js"
import { projectList } from "./projects.js"


// create new project

const addTaskButtonExample = document.querySelector("form#today button");
    addTaskButtonExample.addEventListener('click',addTask)



const newProjectButton=document.querySelector("#new-project-button")
newProjectButton.addEventListener('click',askProjectName)
console.log(projectList)





























//localstorage the data


