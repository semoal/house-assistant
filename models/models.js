export const todos = {
  name: 'todos',
  state: [
      { id: '1', title: 'todo 1' },
      { id: '2', title: 'todo 2' },
  ],

  reducers: {
    FETCH_TODOS(state, payload) {
      return [...payload]
    },
  },

  effects: dispatch => ({
    async loadTodos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const todos = await response.json()

      dispatch.todos.FETCH_TODOS(todos)
    },
  }),
}
