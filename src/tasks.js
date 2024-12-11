// factory function handle tasks


export default function Task(title, description, dueDate, priority, completed) {
    

    const toggleCompleted = function () {
        this.completed = !this.completed;
    };
    

    return { title, description, dueDate, priority, completed, toggleCompleted};
}