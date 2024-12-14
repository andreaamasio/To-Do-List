// factory function handle projects

// logic list containing project
// logic create project
// logic add task to list project
// logic remove task from list project
// logic toggle completed task
// change todo priority
export const projectList = [Project('Today')]

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