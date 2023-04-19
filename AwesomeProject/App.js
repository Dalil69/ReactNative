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
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <TaskProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Mail"
            component={MailScreen}
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

