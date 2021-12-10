// store data in localstorage
const STORAGE_KEY = "my-todo";
const mytodoStorage = {
  load() {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return todos;
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};
const app = Vue.createApp({
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }

      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
    deleteTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    saveTodos() {
      mytodoStorage.save(this.todos);
    },
  },
  mounted() {
    this.todos = mytodoStorage.load();
    console.log("app mounted");
  },
});
