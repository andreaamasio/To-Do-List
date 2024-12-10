import "./style.css"
import Project from "./projects.js"
import Task from "./tasks.js"
// logic list containing project
// logic create project
// logic add new project
// logic delete project
const myProject=Project("Today")
const myTask1=Task('Fare Spesa','Andare all\'LIDL','10/12/24','Low')
myProject.addToProject(myTask1)
const myTask2=Task('Fare Lavatrice','Lavare colorati','11/12/24','Medium')
myProject.addToProject(myTask2)

console.log(myProject.projectList)
myProject.removeFromProject(myTask1)
console.log(myProject.projectList)
console.log(myProject)






// logic create list task
// logic add task to list project
// logic remove task from list project
// logic toggle completed task
// change todo priority

//localstorage the data


