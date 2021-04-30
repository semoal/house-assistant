import * as React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [])

  const renderItems = (({item}) => (<View style={{paddingVertical: 10}}><Text>{item.title}</Text></View>))

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> :
        (<FlatList
          data={todos}
          keyExtractor={({ id }) => id}
          renderItem={renderItems}
        />)
      }
    </View>
  );
}
