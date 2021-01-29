const app = Vue.createApp({
  data() {
    return {
      newTodo: "",
      todos: [
        'Go to store',
        'Make homework',
        'Call John',
      ],
    }
  },
  methods: {
    addTodo () {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      
      this.todos.push(this.newTodo)
      this.newTodo = ""
    },
  }

})