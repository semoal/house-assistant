import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { todos } from '../models/models'

const TodosScreen = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const eventTodosSelector = store.select.todos.eventTodos()
  eventTodosSelector(todos)

  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {

    async function fetchTodos() {
      await dispatch.todos.loadTodos();
    }

    // fetchTodos();
    setLoading(false);
  }, [])

  const renderItems = (({item}) => (<View style={{paddingVertical: 10}}><Text>{item.title}</Text></View>))

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> :
        (<FlatList
          data={eventTodosSelector}
          keyExtractor={({ id }) => id.toString()}
          renderItem={renderItems}
        />)
      }
    </View>
  );
}

export default TodosScreen;
