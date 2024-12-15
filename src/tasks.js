// factory function handle tasks

import { projectList } from "./projects.js"
import { createDOMTask, createDOMExpandTask } from "./dom.js"

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
    
    
    let projectTarget=getProject(projectID)
    projectTarget.addToProject(newTask)
   
    console.log(projectList)
    // add task to project
    let projectContainer=document.querySelector(`div#${projectID} div.project-body`)
    createDOMTask(projectContainer, projectID, taskID, inputTitle, inputDueDate)
}

export function checkButtonExpandTask(e){
    let projectID=e.currentTarget.id.split()[0]
    let taskID=e.currentTarget.id.split()[1]
    let projectTarget=getProject(projectID)
    if (e.currentTarget.textContent = '+') {
        e.currentTarget.textContent = '-';
        expandTask(projectTarget, projectID, taskID)
    } else {
        closeExpandTask(projectTarget, projectID, taskID)
        e.currentTarget.textContent = '+';
    }

}
export function expandTask(projectTarget, projectID, taskID){
    let taskTarget=getTask(taskID)
    let completed=taskTarget.completed
    let description=taskTarget.description
    let priority=taskTarget.priority
    createDOMExpandTask(projectID, completed, description, priority)
}
export function closeExpandTask(projectTarget, projectID, taskID){
    
}

export function getProject(projectID){
    let projectTarget=projectList.find(project => project.id === projectID)
    return projectTarget
}
export function getTask(taskID){
    let taskTarget=projectList.find(project => project.id === projectID)
    return taskTarget
}

export function Task(projectID, taskID, title, description, dueDate, priority, completed) {
    
    
    const toggleCompleted = function () {
        this.completed = !this.completed;
    };
    

    return { projectID, taskID, title, description, dueDate, priority, completed, toggleCompleted};
}