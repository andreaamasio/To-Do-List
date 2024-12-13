import { Project, projectList } from "./projects.js"

const content=document.querySelector('#content')
// create new project

// const newProjectButton=document.querySelector("#new-project-button")
// newProjectButton.addEventListener('click',askProjectName)

export function askProjectName(){
    let projectName=prompt("How do you call this new project list?", "New Project")
    let newProject = Project(projectName)
    // console.log(newProject)
    projectList.push(newProject)
    console.log(projectList)
    return createProjectElement(projectName)
}


function createProjectElement(projectName) {
    // Create project container
    const projectDiv = document.createElement("div");
    projectDiv.className = "project " + projectName; // identifier for logic
    
    
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

    const formSubsection = document.createElement("div");
    formSubsection.className = "form-subsection";

    const labelDueDate = document.createElement("label");
    labelDueDate.setAttribute("for", "due-date");
    labelDueDate.textContent = "Due Date:";

    const inputDueDate = document.createElement("input");
    inputDueDate.setAttribute("type", "date");
    inputDueDate.setAttribute("id", "due-date");
    inputDueDate.setAttribute("name", "due-date");

    const labelPriority = document.createElement("label");
    labelPriority.setAttribute("for", "priority");
    labelPriority.textContent = "Priority:";

    const selectPriority = document.createElement("select");
    selectPriority.setAttribute("id", "priority");
    selectPriority.setAttribute("name", "priority");

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

    const addTaskButton = document.createElement("button");
    addTaskButton.className = "add-task";
    addTaskButton.textContent = "Add Task";

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


