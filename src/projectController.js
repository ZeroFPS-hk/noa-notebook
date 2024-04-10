const ProjectController = (function(){
    const projectsList = [];
    const addProject = (project) => projectsList.push(project);
    const deleteProject = (projectNumber) => projectsList.slice(projectNumber, 1);
    return{projectsList, addProject, deleteProject};
})();

export default ProjectController;