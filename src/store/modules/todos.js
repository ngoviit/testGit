import axios from 'axios'

const todosModule = {
  state: {
    todos: [],
  },
  getters: {
    todos: state => state.todos,
    doneTodos: state => state.todos.filter(todo => todo.completed),
    progress: (state, getters) => {
      const doneTodos = getters.doneTodos
      return Math.round((doneTodos.length / state.todos.length) * 100)
    },
  },

  actions: {
    async deleteTodo(context, todoId) {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`
        )
        context.commit('DELETE_TODO', todoId)
      } catch (error) {
        console.log(error.message)
      }
    },
    async addTodo(context, newTodo) {
      try {
        if (newTodo.title === '') {
          throw new Error('nhập ký tự')
        }
        await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        context.commit('ADD_TODO', newTodo)
      } catch (error) {
        console.log(error.message)
      }
    },
    async getTodo(context) {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        )
        context.commit('SET_TODOS', response.data)
      } catch (error) {
        console.log(error.message)
      }
    },
  },
  // dispath action với dữ liệu payload đƯợc gửi lên
  mutations: {
    MARK_COMPLETE(state, todoId) {
      state.todos.map(todo => {
        if (todo.id == todoId) todo.completed = !todo.completed
        return todo
      })
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId)
    },
    ADD_TODO(state, newTodo) {
      state.todos.unshift(newTodo)
    },
    SET_TODOS(state, todos) {
      state.todos = todos
    },
  },
}
export default todosModule
