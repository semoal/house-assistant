import * as React from 'react';
import { Provider } from 'react-redux'
import { init } from '@rematch/core'
import selectPlugin from '@rematch/select'
import * as models from './models/models'

import TodosScreen from './screens/TodosScreen'

const store = init({
  models,
  plugins: [selectPlugin()],
})

export default function App() {
  return (
    <Provider store={store}>
      <TodosScreen />
    </Provider>
  )
}
