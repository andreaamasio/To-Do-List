// factory function handle projects

export default function Project (name) {
    const projectList = []
    const addToProject = (task) => projectList.push(task);
    const removeFromProject = (task) => {
        let index = projectList.indexOf(task)
        projectList.splice(index,1)
    };
    
    return { name,  projectList, addToProject, removeFromProject};
  }