import "./styles.css";
import TodoItem from "./todoItem";
import Project from "./project";
import ProjectController from "./projectController";
import { createTodoDisplay, createProjectDisplay, createProjectListDisplay } from "./displayController";

const projectDisplayer = document.querySelector("#project-display");

let project1 = new Project("Project 1", "default desciption");
let todo1 = new TodoItem("Todo1", "description", new Date(2024, 3, 11), 5);
project1.addTodo(todo1);
console.log(project1);
ProjectController.addProject(project1);
projectDisplayer.appendChild(createProjectDisplay(project1));

//TODO dialogue to add project