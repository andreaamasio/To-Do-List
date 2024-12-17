import { Project, projectList } from "./projects.js"
import { addTask, checkButtonExpandTask, Task, modifyTask } from "./tasks.js"

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
    const taskTitleDiv=document.createElement('div')
    taskTitleDiv.className='project-task'
    taskTitleDiv.setAttribute('id',`project-title-${taskID}`)
    taskTitleDiv.textContent = taskTitle;
    task.appendChild(taskTitleDiv)

    // Create due date task element
    const dueDateElement = document.createElement('div');
    dueDateElement.className = 'due-date-task';
    dueDateElement.setAttribute('id',`due-date-${taskID}`)
    dueDateElement.textContent = dueDate;

    // Append elements to the container
    container.appendChild(expandButton);
    container.appendChild(task);
    container.appendChild(dueDateElement);
}


export function createDOMExpandTask(projectTarget, projectID, taskID, title, dueDate, completed, description, priority) {
    const expandedTaskDiv = document.createElement("div");
    expandedTaskDiv.className = `expanded-task ${taskID}`;

    // Helper function to create a row with an input
    function createRow(labelText, inputType, inputValue, inputId) {
        const rowDiv = document.createElement("div");

        // Create label
        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputId);

        // Create input
        const input = document.createElement("input");
        input.setAttribute("type", inputType);
        input.setAttribute("id", inputId);
        input.value = inputValue;

        if (inputType === "checkbox") {
            input.checked = inputValue; // Set checkbox state
        }

        // Append elements
        rowDiv.appendChild(label);
        rowDiv.appendChild(input);

        return rowDiv;
    }

    // Create "Task Title" input
    const titleRow = createRow("Task Title: ", "text", title, `task-title-${taskID}`);

    // Create "Task Description" input
    const descriptionRow = createRow("Description: ", "text", description, `task-desc-${taskID}`);

    // Create "Task Due Date" input
    const dueDateRow = createRow("Due Date: ", "date", dueDate, `task-due-${taskID}`);

    // Create "Task Completed" input
    const completedRow = createRow("Completed: ", "checkbox", completed, `task-completed-${taskID}`);

    // Create "Task Priority" dropdown
    const priorityRow = document.createElement("div");

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";
    priorityLabel.setAttribute("for", `priority-${taskID}`);

    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", `priority-${taskID}`);
    prioritySelect.setAttribute("name", "priority");

    // Create priority options
    ["low", "medium", "high"].forEach((level) => {
        const option = document.createElement("option");
        option.value = level;
        option.textContent = level.charAt(0).toUpperCase() + level.slice(1);
        if (level === priority) option.selected = true;
        prioritySelect.appendChild(option);
    });

    priorityRow.appendChild(priorityLabel);
    priorityRow.appendChild(prioritySelect);

    // Create "Update Task" button
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update Task";
    updateButton.className = "update-task-button";

    // Event listener for the "Update Task" button
    updateButton.addEventListener("click", () => {
        const updatedTitle = document.querySelector(`#task-title-${taskID}`).value;
        const updatedDescription = document.querySelector(`#task-desc-${taskID}`).value;
        const updatedDueDate = document.querySelector(`#task-due-${taskID}`).value;
        const updatedCompleted = document.querySelector(`#task-completed-${taskID}`).checked;
        const updatedPriority = document.querySelector(`#priority-${taskID}`).value;

        // Update task logic (replace with your update function)
        console.log(`Task ${taskID} updated:`);
        console.log(`Title: ${updatedTitle}`);
        console.log(`Description: ${updatedDescription}`);
        console.log(`Due Date: ${updatedDueDate}`);
        console.log(`Completed: ${updatedCompleted}`);
        console.log(`Priority: ${updatedPriority}`);
        // real time update task title
        let taskTitleDiv=document.querySelector(`div#project-title-${taskID}`)
        taskTitleDiv.textContent=updatedTitle
        // real time update task due date
        let taskDueDateDiv=document.querySelector(`div#due-date-${taskID}`) 
        taskDueDateDiv.textContent=updatedDueDate
        modifyTask(
            projectTarget,
            projectID,
            taskID,
            updatedTitle,
            updatedDescription,
            updatedDueDate,
            updatedCompleted,
            updatedPriority
        )
        
        // Optionally, update the DOM to reflect changes
    });

    // Append all rows to the main container
    expandedTaskDiv.appendChild(titleRow);
    expandedTaskDiv.appendChild(descriptionRow);
    expandedTaskDiv.appendChild(dueDateRow);
    expandedTaskDiv.appendChild(completedRow);
    expandedTaskDiv.appendChild(priorityRow);

    // Append the "Update Task" button
    expandedTaskDiv.appendChild(updateButton);

    // Append the main container to the DOM
    const divProjectTask = document.querySelector(`#${projectID} div.project-task.${taskID}`);
    divProjectTask.appendChild(expandedTaskDiv);
}

export function removeDOMExpandTask(projectID, taskID) {
    const divProjectTask = document.querySelector(`#${projectID} div.project-task.${taskID}`);
    const expandedTaskDiv = document.querySelector(`div.expanded-task.${taskID}`);
    divProjectTask.removeChild(expandedTaskDiv);
}


