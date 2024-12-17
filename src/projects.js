// factory function handle projects

import { Task, checkButtonExpandTask, getProject } from "./tasks.js";

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
const modifyButtonExample=document.querySelector('#today > div.project-header > button.modify-project-name.today')
modifyButtonExample.addEventListener('click', modifyProjectName)

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

export function modifyProjectName(e){
    let projectID=e.currentTarget.classList[1]    
    let projectTarget=getProject(projectID)
    projectTarget.name=prompt("How do you want to rename the project?", projectTarget.name)
    let divProjectTitle=document.querySelector(`div#${projectID} p.project-title`)
    divProjectTitle.textContent=projectTarget.name
}

export function deleteProject(projectID){
    let projectTarget = getProject(projectID)
    let indexToRemove = projectList.indexOf(projectTarget)
    projectList.splice(indexToRemove,1)

}