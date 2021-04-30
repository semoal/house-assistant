import * as React from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const TodosScreen = ({todos, fetchTodos}) => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
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

const mapState = (state) => ({
  todos: state.todos.todos,
})

const mapDispatch = (dispatch) => ({
  fetchTodos: dispatch.todos.fetchTodos,
})

export default connect(mapState, mapDispatch)(TodosScreen)
