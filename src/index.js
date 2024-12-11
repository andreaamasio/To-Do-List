// import "./style.css"
import Project from "./projects.js"
import Task from "./tasks.js"
// logic list containing project
// logic create project
// logic add new project
// logic delete project
// logic create list task
// logic add task to list project
// logic remove task from list project
// logic toggle completed task
// change todo priority

const defaultProject=Project("My List")
const firstTask=Task("x","eat","21-12-24","low", false)
firstTask.toggleCompleted()
console.log(firstTask.getCompleted)
firstTask.priority='high'
console.log(firstTask.priority)






























//localstorage the data


