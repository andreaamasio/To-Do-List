// factory function handle tasks

import { projectList } from "./projects.js"

export function addTask(e){
    
    let newTaskID = e.currentTarget.getAttribute('class')
    
    let projectID=newTaskID.split(" ")[1]
    
    let inputTitle=document.querySelector('input#task-title.'+ projectID).value
    let inputDescription=document.querySelector('input#description.' +projectID).value
    let inputDueDate=document.querySelector('input#due-date.'+ projectID).value
    let inputPriority=document.querySelector('input#due-date.'+ projectID).value
    let inputCompleted=document.querySelector('input#completed.'+ projectID).value

    let newTask=Task(projectID, 
        inputTitle, 
        inputDescription, 
        inputDueDate, 
        inputPriority,
        inputCompleted
    )
}

export function Task(projectID, title, description, dueDate, priority, completed) {
    
    
    const toggleCompleted = function () {
        this.completed = !this.completed;
    };
    

    return { title, description, dueDate, priority, completed, toggleCompleted};
}