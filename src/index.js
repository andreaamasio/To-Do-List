// import "./style.css"
import { Project } from "./projects.js"
import { Task, addTask } from "./tasks.js"
import { askProjectName } from "./dom.js"
import { projectList } from "./projects.js"
// logic list containing project
// logic create project
// logic add new project
// logic delete project
// logic create list task
// logic add task to list project
// logic remove task from list project
// logic toggle completed task
// change todo priority

// const defaultProject=Project("My List")
// const firstTask=Task("x","eat","21-12-24","low", false)
// firstTask.toggleCompleted()
// console.log(firstTask.getCompleted)
// firstTask.priority='high'
// console.log(firstTask.priority)


// -----
// const content=document.querySelector('#content')
// create new project

const addTaskButtonExample = document.querySelector("form#today button");
    addTaskButtonExample.addEventListener('click',addTask)



const newProjectButton=document.querySelector("#new-project-button")
newProjectButton.addEventListener('click',askProjectName)
console.log(projectList)





























//localstorage the data


