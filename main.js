const app = Vue.createApp({
  data() {
    return {
      newTodo: "",
      todos: [
        {title: 'Go to store', done: false },
        {title: 'Make homework', done: true },
        {title: 'Call John', done: false },
      ],
    }
  },
  methods: {
    addTodo () {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }

      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = "";
    },
  }
})