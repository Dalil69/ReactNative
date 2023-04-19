import React, { useContext, useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { TaskContext } from './TaskContext';

export default function SearchScreen({ navigation }) {
  const { tasks } = useContext(TaskContext);
  const [search, setSearch] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (search === '') {
      setFilteredTasks([]);
    } else {
      setFilteredTasks(
        tasks.filter(
          (task) =>
            task.title && task.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, tasks]);

  const handleSelectTask = (task) => {
    console.log('Tâche sélectionnée :', task);
    navigation.navigate('Home', { task });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectTask(item)}>
      <Text style={{ padding: 15, backgroundColor: 'rgba(255, 128, 0, 0.4)' }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          paddingLeft: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
        onChangeText={(text) => setSearch(text)}
        value={search}
        placeholder="Rechercher une tâche..."
      />
      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <View>
            {search !== '' && <Text>Aucune tâche trouvée</Text>}
          </View>
        )}
      />
    </View>
  );
}
