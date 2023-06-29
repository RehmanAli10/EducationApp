import React from 'react';
import HomeContainer from './src/containers/HomeContainer';
import {NavigationContainer} from '@react-navigation/native';
import AboutContainer from './src/containers/AboutContainer';
import CourseContainer from './src/containers/CourseContainer';
import UsersContainer from './src/containers/UsersContainer';
import ContactContainer from './src/containers/ContactContainer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from './Assets/icons/HomeIcon';
import CoursesIcon from './Assets/icons/CoursesIcon';
import UsersIcon from './Assets/icons/UsersIcon';
import AboutIcon from './Assets/icons/AboutIcon';
import ContactIcon from './Assets/icons/ContactIcon';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeContainer}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <HomeIcon
                height={25}
                width={25}
                fill={focused ? 'red' : 'black'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Course"
          component={CourseContainer}
          options={{
            tabBarIcon: ({focused}) => (
              <CoursesIcon
                height={25}
                width={25}
                fill={focused ? 'red' : 'black'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Users"
          component={UsersContainer}
          options={{
            tabBarIcon: ({focused}) => (
              <UsersIcon
                height={30}
                width={30}
                fill={focused ? 'red' : 'black'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutContainer}
          options={{
            tabBarIcon: ({focused}) => (
              <AboutIcon
                height={25}
                width={25}
                fill={focused ? 'red' : 'black'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactContainer}
          options={{
            tabBarIcon: ({focused}) => (
              <ContactIcon
                height={30}
                width={30}
                fill={focused ? 'red' : 'black'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
