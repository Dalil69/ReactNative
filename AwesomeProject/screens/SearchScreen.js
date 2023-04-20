import React, { useContext, useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { TaskContext } from './TaskContext';

export default function SearchScreen({ navigation }) {

  // Récupération de la liste des tâches
  const { tasks } = useContext(TaskContext);

  // Etat local du texte de recherche
  const [search, setSearch] = useState('');

  // Etat local des tâches filtrées
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Utilisation d'un effet pour filtrer la liste des tâches en fonction du texte de recherche
  useEffect(() => {
    if (search === '') {  // Si le champ de recherche est vide
      setFilteredTasks([]); // Réinitialiser la liste filtrée
    } else { // Sinon
      setFilteredTasks(
        tasks.filter(
          (task) =>
            task.title && task.title.toLowerCase().includes(search.toLowerCase())
        )
      ); // Filtrer la liste des tâches en fonction du texte de recherche
    }
  }, [search, tasks]);

  // Fonction pour gérer la sélection d'une tâche
  const handleSelectTask = (task) => {
    console.log('Tâche sélectionnée :', task);
    navigation.navigate('TodoList', { task }); // Naviguer vers la page "Home" et passer la tâche sélectionnée en paramètre
  };

  // Fonction pour le rendu de chaque élément de la liste
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
