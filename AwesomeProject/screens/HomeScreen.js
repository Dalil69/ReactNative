import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TaskContext } from './TaskContext';

function HomeScreen() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, title: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accueil</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        <TouchableOpacity onPress={addTask}>
          <Ionicons name="add-circle" size={40} color="orange" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleTask(task.id)}>
              <Ionicons
                name={task.completed ? 'checkmark-circle' : 'ellipse-outline'}
                size={30}
                color="black"
              />
            </TouchableOpacity>
            <TextInput
              style={[
                styles.taskText,
                task.completed && styles.completedTaskText,
              ]}
              onChangeText={(text) => {
                const newTasks = [...tasks];
                const taskIndex = newTasks.findIndex((t) => t.id === task.id);
                newTasks[taskIndex].title = text;
                setTasks(newTasks);
              }}
              value={task.title}
              editable={!task.completed}
            />
            <TouchableOpacity onPress={() => removeTask(task.id)}>
              <Ionicons name="close-circle" size={30} color="black" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 5,
  },
  taskText: {
    textDecorationLine: 'none',
    width: '70%',
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default HomeScreen;
