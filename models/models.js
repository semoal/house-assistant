export const todos = {
  name: 'todos',

  state: [
      { id: '1', title: 'todo 1' },
      { id: '2', title: 'todo 2' },
      { id: '3', title: 'todo 3' },
      { id: '4', title: 'todo 4' },
  ],

  selectors: (slice) => ({
    evenTodos() {
      return slice(todos => todos.filter(el => el.id % 2 === 0))
    }
  }),

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
