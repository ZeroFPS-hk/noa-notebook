import TodoItem from "./todoItem";
import Project from "./project";

function createTodoDisplay(todo){
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("todo-title");
    titleDiv.textContent = todo.title;
    todoDiv.appendChild(titleDiv);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("todo-description");
    descriptionDiv.textContent = todo.description;
    todoDiv.appendChild(descriptionDiv);

    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("todo-duedate");
    //TODO write date here
    todoDiv.appendChild(dueDateDiv);

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("todo-priority");
    //TODO display priority
    todoDiv.appendChild(priorityDiv);

    //TODO add other controls

    return todoDiv;
}

function createProjectDisplay(project){
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-item");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("project-title");
    titleDiv.textContent = project.title;
    projectDiv.appendChild(titleDiv);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("project-description");
    descriptionDiv.textContent = project.description;
    projectDiv.appendChild(descriptionDiv);

    for(const todo of project.todos){
        projectDiv.appendChild(createTodoDisplay(todo));
    }

    //TODO add other controls

    return projectDiv;
}

function createProjectListDisplay(projectList){
    
}

export {createTodoDisplay, createProjectDisplay, createProjectListDisplay};