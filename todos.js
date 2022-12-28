export default class Todos {
    constructor() {
        this.todos = [{
            title: "Learn JavaScript",
            category: "work"
        }, {
            title: "Meditate",
            category: "personal"
        }];
    }

    // TODO: define remaining instance methods
    getAll() {
        return this.todos;
    }
    

}
