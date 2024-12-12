const newProjectButton=document.querySelector("#new-project-button")
const content=document.querySelector('#content')
function askProjectName(){
    let projectName=prompt("How do you call this new project list?", "New Project")
    return projectName
}
function createDOMProject(){
    // project header
    const projectHeader=document.createElement('div')

    const addTaskButton=document.createElement('button')
    addTaskButton.setAttribute('class','add-task')
    addTaskButton.textContent='Add Task'
    addTaskButton.addEventListener('click', AddTask)
    projectHeader.appendChild(addTaskButton)

    
}