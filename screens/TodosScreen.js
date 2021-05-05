import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const TodosScreen = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {

    async function fetchTodos() {
      await dispatch.todos.loadTodos();
    }

    fetchTodos();
    setLoading(false);
  }, [])

  const renderItems = (({item}) => (<View style={{paddingVertical: 10}}><Text>{item.title}</Text></View>))

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
