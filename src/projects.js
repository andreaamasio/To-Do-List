// factory function handle projects

// logic list containing project
// logic create project
// logic add task to list project
// logic remove task from list project
// logic toggle completed task
// change todo priority

export default function Project (name) {
    const projectList = []
    const addToProject = (task) => projectList.push(task);
    const removeFromProject = (task) => {
        let index = projectList.indexOf(task)
        projectList.splice(index,1)
    };
    
    return { name,  projectList, addToProject, removeFromProject};
  }