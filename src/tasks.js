// factory function handle tasks

import { projectList } from "./projects.js"
import { createDOMTask } from "./dom.js"

export function addTask(e){
    let taskID = 'task-'+ Math.trunc(Math.random()*100000)


    let newTaskID = e.currentTarget.getAttribute('class')
    
    let projectID=newTaskID.split(" ")[1]
    
    let inputTitle=document.querySelector("form#" + projectID + " #task-title").value
    let inputDescription=document.querySelector("form#" + projectID +" #description").value
    let inputDueDate=document.querySelector("form#" + projectID +" #due-date").value
    let inputPriority=document.querySelector("form#" + projectID +" #priority").value
    let inputCompleted=document.querySelector("form#" + projectID +" #completed").value

    let newTask=Task(projectID, 
        taskID,
        inputTitle, 
        inputDescription, 
        inputDueDate, 
        inputPriority,
        inputCompleted
    )
    projectList.forEach(project => {
        if (project.id===projectID){
            project.addToProject(newTask)
        }
    })
    console.log(projectList)
    // add task to project
    let projectContainer=document.querySelector(`div#${projectID} div.project-body`)
    createDOMTask(projectContainer, taskID, inputTitle, inputDueDate)
}

export function expandTask(e){

}



export function Task(projectID, taskID, title, description, dueDate, priority, completed) {
    
    
    const toggleCompleted = function () {
        this.completed = !this.completed;
    };
    

    return { projectID, taskID, title, description, dueDate, priority, completed, toggleCompleted};
}