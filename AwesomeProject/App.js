import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import MailScreen from './screens/MailScreen';
import TaskProvider from './screens/TaskContext';

const Tab = createBottomTabNavigator();

export default function App() {
  // Déclare la variable "count" et une fonction "setCount" pour modifier sa valeur
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter la valeur de "count"
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Fonction pour décrémenter la valeur de "count"
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    // Fournit le contexte des tâches à toute l'application
    <TaskProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="TodoList"
            component={HomeScreen}
            // Option pour ajouter une icône "home" à l'onglet correspondant
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            // Option pour ajouter une icône "magnify" à l'onglet correspondant
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Mail"
            component={MailScreen}
            // Option pour ajouter une icône "email" à l'onglet correspondant
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="email" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
