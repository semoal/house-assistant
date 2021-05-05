import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { store } from "../App"

const TodosScreen = () => {
  const dispatch = useDispatch()
  const todos = useSelector(store.select.todos.evenTodos)
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    dispatch.todos.loadTodos().then(() => {
      setLoading(false);
    });

    // fetchTodos();
  }, [])

  const renderItems = ({ item }) => (
    <View style={{paddingVertical: 10}}>
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
    </View>
  )

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> :
        (<FlatList
          data={todos}
          keyExtractor={({ id }) => id.toString()}
          renderItem={renderItems}
        />)
      }
    </View>
  );
}

export default TodosScreen;
