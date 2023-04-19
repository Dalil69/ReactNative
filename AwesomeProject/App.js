import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import { TaskContext } from './screens/TaskContext';

const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <NavigationContainer>
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search';
              } else if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Notifications') {
                iconName = focused ? 'notifications' : 'notifications';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            style: { backgroundColor: 'gray' },
          }}
        >
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
        </Tab.Navigator>
      </TaskContext.Provider>
    </NavigationContainer>
  );
}
