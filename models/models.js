export const todos = {
  state: {
    todos: []
  },

  reducers: {
    FETCH_TODOS(state, payload) {
      return {
        ...state,
        todos: [...payload]
      }
    },
  },

  effects: dispatch => ({
    async fetchTodos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const todos = await response.json()

      dispatch.todos.FETCH_TODOS(todos)
    },
  }),
}
