import "./styles.css";
import TodoItem from "./todoItem";
import Project from "./project";
import ProjectController from "./projectController";

let project1 = new Project("Project 1", "default desciption");
console.log(project1);
let todo1 = new TodoItem("Todo1", "description", new Date(2024, 3, 11), 5);
console.log(todo1);
project1.addTodo(todo1);
console.log(project1);
ProjectController.addProject(project1);
console.log(ProjectController.projectsList);
/*project1.title = "changed title";
project1.description = "changed description";
console.log(project1);
project1.deleteTodo(0);
console.log(project1);*/