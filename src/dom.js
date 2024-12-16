import { Project, projectList } from "./projects.js"
import { addTask, checkButtonExpandTask, Task } from "./tasks.js"

const content=document.querySelector('#content')
// create new project

// const newProjectButton=document.querySelector("#new-project-button")
// newProjectButton.addEventListener('click',askProjectName)



export function askProjectName(){
    let projectName=prompt("How do you call this new project list?", "New Project")
    let newProject = Project(projectName)
    let projectID = 'project-'+Math.trunc(Math.random()*100000)
    newProject["id"] = projectID
    projectList.push(newProject)
    console.log(projectList)
    return createProjectElement(projectName, projectID)
}


function createProjectElement(projectName, projectID) {
    // Create project container
    const projectDiv = document.createElement("div");
    projectDiv.className = 'project'
    projectDiv.setAttribute("id", projectID); // identifier for logic
    
    
    // Create project header
    const projectHeader = document.createElement("div");
    projectHeader.className = "project-header";

    const projectTitle = document.createElement("p");
    projectTitle.className = "project-title";
    projectTitle.textContent = projectName;

    const modifyButton = document.createElement("button");
    modifyButton.className = "modify-project-name";
    modifyButton.textContent = "Modify Project Name";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-project";
    deleteButton.textContent = "Delete Project";

    // Append elements to project header
    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(modifyButton);
    projectHeader.appendChild(deleteButton);

    // Create project body
    const projectBody = document.createElement("div");
    projectBody.className = "project-body";

    const expandTitle = document.createElement("div");
    expandTitle.className = "expand-title";
    expandTitle.textContent = "Expand";

    const taskTitle = document.createElement("div");
    taskTitle.className = "task-title";
    taskTitle.textContent = "Task";

    const dueDateTitle = document.createElement("div");
    dueDateTitle.className = "due-date-title";
    dueDateTitle.textContent = "Due Date";

    // Append elements to project body
    projectBody.appendChild(expandTitle);
    projectBody.appendChild(taskTitle);
    projectBody.appendChild(dueDateTitle);

    // Create add task section
    const addTaskSection = document.createElement("div");
    addTaskSection.className = "add-task-section";

    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", projectID);

    const formHeading = document.createElement("p");
    formHeading.textContent = "Add New Task:";

    const labelTaskTitle = document.createElement("label");
    labelTaskTitle.setAttribute("for", "task-title");
    labelTaskTitle.textContent = "Task Title:";
    

    const inputTaskTitle = document.createElement("input");
    inputTaskTitle.setAttribute("type", "text");
    inputTaskTitle.setAttribute("id", "task-title");
    inputTaskTitle.setAttribute("name", "task-title");
    inputTaskTitle.setAttribute("placeholder", "Run 1 mile");
    inputTaskTitle.className="task-title " + projectID

    const formSubsection = document.createElement("div");
    formSubsection.className = "form-subsection";

    const labelDueDate = document.createElement("label");
    labelDueDate.setAttribute("for", "due-date");
    labelDueDate.textContent = "Due Date:";

    const inputDueDate = document.createElement("input");
    inputDueDate.setAttribute("type", "date");
    inputDueDate.setAttribute("id", "due-date");
    inputDueDate.setAttribute("name", "due-date");
    inputDueDate.className = "due-date " + projectID

    const labelPriority = document.createElement("label");
    labelPriority.setAttribute("for", "priority");
    labelPriority.textContent = "Priority:";

    const selectPriority = document.createElement("select");
    selectPriority.setAttribute("id", "priority");
    selectPriority.setAttribute("name", "priority");
    selectPriority.className = "priority " + projectID

    const lowOption = document.createElement("option");
    lowOption.setAttribute("value", "low");
    lowOption.textContent = "Low";

    const mediumOption = document.createElement("option");
    mediumOption.setAttribute("value", "medium");
    mediumOption.textContent = "Medium";

    const highOption = document.createElement("option");
    highOption.setAttribute("value", "high");
    highOption.textContent = "High";

    selectPriority.appendChild(lowOption);
    selectPriority.appendChild(mediumOption);
    selectPriority.appendChild(highOption);

    const labelCompleted = document.createElement("label");
    labelCompleted.setAttribute("for", "completed");
    labelCompleted.textContent = "Completed?";

    const inputCompleted = document.createElement("input");
    inputCompleted.setAttribute("type", "checkbox");
    inputCompleted.setAttribute("id", "completed");
    inputCompleted.setAttribute("name", "completed");
    inputCompleted.className = "completed " + projectID

    formSubsection.appendChild(labelDueDate);
    formSubsection.appendChild(inputDueDate);
    formSubsection.appendChild(labelPriority);
    formSubsection.appendChild(selectPriority);
    formSubsection.appendChild(labelCompleted);
    formSubsection.appendChild(inputCompleted);

    const labelDescription = document.createElement("label");
    labelDescription.setAttribute("for", "description");
    labelDescription.textContent = "Description:";

    const textareaDescription = document.createElement("textarea");
    textareaDescription.setAttribute("id", "description");
    textareaDescription.setAttribute("name", "description");
    textareaDescription.setAttribute("cols", "40");
    textareaDescription.setAttribute("rows", "4");
    textareaDescription.className = "description " + projectID

    const addTaskButton = document.createElement("button");
    addTaskButton.setAttribute('type','button')
    addTaskButton.className = "add-task " + projectID ;
    addTaskButton.textContent = "Add Task";
    addTaskButton.addEventListener('click',addTask)


    // Append elements to the form
    form.appendChild(formHeading);
    form.appendChild(labelTaskTitle);
    form.appendChild(inputTaskTitle);
    form.appendChild(formSubsection);
    form.appendChild(labelDescription);
    form.appendChild(textareaDescription);
    form.appendChild(addTaskButton);

    // Append form to add task section
    addTaskSection.appendChild(form);

    // Append sections to the main project container
    projectDiv.appendChild(projectHeader);
    projectDiv.appendChild(projectBody);
    projectDiv.appendChild(addTaskSection);

    // Add project container to the content div
    content.appendChild(projectDiv);
}

//add new task section
export function createDOMTask(container, projectID, taskID, taskTitle, dueDate) {
    // Create button element
    const expandButton = document.createElement('button');
    expandButton.className = `expand-button ${projectID} ${taskID}`;
    expandButton.textContent = "+";
    expandButton.setAttribute('type','button')
    // expandButton.setAttribute('id', `${projectID} ${taskID}`)
    expandButton.addEventListener('click', checkButtonExpandTask)

    // Create project task element
    const task = document.createElement('div');
    task.className = `project-task ${taskID}`;
    task.textContent = taskTitle;

    // Create due date task element
    const dueDateElement = document.createElement('div');
    dueDateElement.className = 'due-date-task';
    dueDateElement.textContent = dueDate;

    // Append elements to the container
    container.appendChild(expandButton);
    container.appendChild(task);
    container.appendChild(dueDateElement);
}
export function createDOMExpandTask(projectID, taskID, completed, description, priority){
    const expandedTaskDiv = document.createElement("div");
    expandedTaskDiv.className = `expanded-task ${taskID}`;
    
    

    // Create the first div for "Completed"
    const completedDiv = document.createElement("div");
    completedDiv.textContent = `Completed: ${completed}`;
    const changeCompletedButton = document.createElement("button");
    changeCompletedButton.textContent = "Change Completed";
    completedDiv.appendChild(changeCompletedButton);

    // Create the second div for "Description"
    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = `Description: ${description}`;
    const changeDescriptionButton = document.createElement("button");
    changeDescriptionButton.textContent = "Change Description";
    descriptionDiv.appendChild(changeDescriptionButton);
    // Create button to modify title
    const inputModifyTaskTitle = document.createElement("input");
    inputModifyTaskTitle.setAttribute("type", "text");
    inputModifyTaskTitle.setAttribute("id", "modify-task-title");
    // inputModifyTaskTitle.setAttribute("name", "task-title");
    inputModifyTaskTitle.className = "due-date-modify " + taskID
    const changeTitleButton = document.createElement("button");
    changeTitleButton.textContent = "Change Task Title";
    descriptionDiv.appendChild(changeTitleButton)

    // due date
    const inputModifyDueDate = document.createElement("input");
    inputModifyDueDate.setAttribute("type", "date");
    inputModifyDueDate.setAttribute("id", "modify-due-date");
    // inputModifyDueDate.setAttribute("name", "due-date");
    inputModifyDueDate.className = "due-date-modify " + taskID
    const changeDueDateButton = document.createElement("button");
    changeDueDateButton.textContent = "Change Due Date";
    descriptionDiv.appendChild(inputModifyDueDate)
    descriptionDiv.appendChild(changeDueDateButton)

    // Create the third div for "Priority"
    const priorityDiv = document.createElement("div");
    priorityDiv.textContent = `Priority: ${priority}`;
    const modifySelectPriority = document.createElement("select");
    modifySelectPriority.setAttribute("id", "priority");
    modifySelectPriority.setAttribute("name", "priority");
    modifySelectPriority.className = "priority " + projectID

    const lowOption = document.createElement("option");
    lowOption.setAttribute("value", "low");
    lowOption.textContent = "Low";

    const mediumOption = document.createElement("option");
    mediumOption.setAttribute("value", "medium");
    mediumOption.textContent = "Medium";

    const highOption = document.createElement("option");
    highOption.setAttribute("value", "high");
    highOption.textContent = "High";

    modifySelectPriority.appendChild(lowOption);
    modifySelectPriority.appendChild(mediumOption);
    modifySelectPriority.appendChild(highOption);
    const changePriorityButton = document.createElement("button");
    changePriorityButton.textContent = "Change Priority";
    priorityDiv.appendChild(modifySelectPriority);
    priorityDiv.appendChild(changePriorityButton);

    // Append all child divs to the container
    expandedTaskDiv.appendChild(descriptionDiv);
    expandedTaskDiv.appendChild(completedDiv);    
    expandedTaskDiv.appendChild(priorityDiv);

    // Append div expanded-task to div project-task
    const divProjectTask=document.querySelector(`#${projectID} div.project-task.${taskID}`)
    divProjectTask.appendChild(expandedTaskDiv)
}
export function removeDOMExpandTask(projectID, taskID){
    let divProjectTask=document.querySelector(`#${projectID} div.project-task.${taskID}`)
    let expandedTaskDiv=document.querySelector(`div.expanded-task.${taskID}`)
    divProjectTask.removeChild(expandedTaskDiv)
}




