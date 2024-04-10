class Project{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.todos = [];
    }

    addTodo(todo){
        this.todos.push(todo);
    }

    deleteTodo(todoNumber){
        this.todos.splice(todoNumber, 1);
    }
}

export default Project;