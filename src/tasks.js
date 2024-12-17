import { projectList } from "./projects.js"
import { createDOMTask, createDOMExpandTask, removeDOMExpandTask } from "./dom.js"

export function addTask(e){
    let taskID = 'task-'+ Math.trunc(Math.random()*100000)

    let newTaskID = e.currentTarget.getAttribute('class')
    
    let projectID=newTaskID.split(" ")[1]
    
    let inputTitle=document.querySelector("form#" + projectID + " #task-title").value
    let inputDescription=document.querySelector("form#" + projectID +" #description").value
    let inputDueDate=document.querySelector("form#" + projectID +" #due-date").value
    let inputPriority=document.querySelector("form#" + projectID +" #priority").value
    let inputCompleted=document.querySelector("form#" + projectID +" #completed").checked

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
    
    let projectContainer=document.querySelector(`div#${projectID} div.project-body`)
    createDOMTask(projectContainer, projectID, taskID, inputTitle, inputDueDate)
}

export function checkButtonExpandTask(e){
    let projectID=e.currentTarget.classList[1]
    let taskID=e.currentTarget.classList[2]
    let projectTarget=getProject(projectID)

    if (e.currentTarget.textContent === '+') {
        e.currentTarget.textContent = '-';        
        expandTask(projectTarget, projectID, taskID)
    } else if (e.currentTarget.textContent === '-'){
        e.currentTarget.textContent = '+'
        closeExpandTask(projectID, taskID)        
    }

}
export function expandTask(projectTarget, projectID, taskID){
    let taskTarget=getTask(projectTarget, projectID, taskID)
    let title=taskTarget.title
    let dueDate=taskTarget.dueDate
    let inputCompleted=taskTarget.completed
    let completed= inputCompleted? 'Yes' : 'No'
    let description=taskTarget.description
    let priority=taskTarget.priority
    createDOMExpandTask(projectTarget, projectID, taskID, title, dueDate, completed, description, priority)
}
export function closeExpandTask(projectID, taskID){
    removeDOMExpandTask(projectID, taskID)
}

export function getProject(projectID){
    let projectTarget=projectList.find(project => project.id === projectID)
    return projectTarget
}
export function getTask(projectTarget, projectID, taskID){    
    let taskList=projectTarget.taskList    
    
    let taskTarget=taskList.find(task => task.taskID === taskID)
    return taskTarget
}

// factory function handle tasks
export function Task(projectID, taskID, title, description, dueDate, priority, completed) {
    const toggleCompleted = function () {
        this.completed = !this.completed;
    };    

    return { projectID, taskID, title, description, dueDate, priority, completed, toggleCompleted};
}

export function modifyTask(
    projectTarget,
    projectID,
    taskID,
    updatedTitle,
    updatedDescription,
    updatedDueDate,
    updatedCompleted,
    updatedPriority
){
    let taskTarget=getTask(projectTarget, projectID, taskID)
    taskTarget.title=updatedTitle
    taskTarget.description=updatedDescription
    taskTarget.dueDate=updatedDueDate
    taskTarget.completed=updatedCompleted
    taskTarget.priority=updatedPriority
}
export function removeTask(projectTarget, projectID, taskID){    
    let taskTarget=getTask(projectTarget, projectID, taskID)
    let indexToRemove=projectTarget.taskList.indexOf(taskTarget)
    projectTarget.taskList.splice(indexToRemove,1)
    
}