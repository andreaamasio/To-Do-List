// factory function handle tasks

import { projectList } from "./projects.js"

export function addTask(e){
    
    let newTaskID = e.currentTarget.getAttribute('class')
    
    let projectID=newTaskID.split(" ")[1]
    
    let newTask=Task(projectID, )
}

export function Task(projectID, title, description, dueDate, priority, completed) {
    
    
    const toggleCompleted = function () {
        this.completed = !this.completed;
    };
    

    return { title, description, dueDate, priority, completed, toggleCompleted};
}