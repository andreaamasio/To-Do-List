// factory function handle tasks

import { projectList } from "./projects.js"

export default function Task(projectName, title, description, dueDate, priority, completed) {
    
    
    const toggleCompleted = function () {
        this.completed = !this.completed;
    };
    

    return { title, description, dueDate, priority, completed, toggleCompleted};
}