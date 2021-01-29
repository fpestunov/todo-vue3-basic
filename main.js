const app = Vue.createApp({
  data() {
    return {
      todos: [
        'Go to store',
        'Make homework',
        'Call John',
      ],
    }
  },
  methods: {
    addTodo () {
      console.log('add todo...')
    },
  }

})