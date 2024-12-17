// factory function handle projects

import { Task, checkButtonExpandTask } from "./tasks.js";

// initial example setup
export const projectList = [Project('Today')]
projectList[0]['id']='today'
projectList[0].taskList.push(Task('today',
    'example-task',
    'Example: 1000 steps',
    'Walk 500 steps before breakfast and 500 after lunch.',
    '2024-12-15',
    'Low',
    'No'
))
const expandButtonExample=document.querySelector('div#today .example-task')
expandButtonExample.addEventListener('click', checkButtonExpandTask)

// project factory function
export function Project (name) {
    // below already contains default project list Today
    
    const taskList=[]
    const addToProject = (task) => taskList.push(task);
    const removeFromProject = (task) => {
        let index = taskList.indexOf(task)
        taskList.splice(index,1)
    };
    
    return { name, taskList, addToProject, removeFromProject};
  }