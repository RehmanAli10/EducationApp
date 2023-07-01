import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from '../containers/HomeContainer';
import CourseContainer from '../containers/CourseContainer';
import UsersContainer from '../containers/UsersContainer';
import AboutContainer from '../containers/AboutContainer';
import ContactContainer from '../containers/ContactContainer';
import HomeIcon from '../../Assets/icons/HomeIcon';
import CoursesIcon from '../../Assets/icons/CoursesIcon';
import UsersIcon from '../../Assets/icons/UsersIcon';
import AboutIcon from '../../Assets/icons/AboutIcon';
import ContactIcon from '../../Assets/icons/ContactIcon';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
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
            <HomeIcon height={25} width={25} fill={focused ? 'red' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name={'Courses'}
        component={CourseContainer}
        options={{
          headerShown: false,
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
          headerShown: false,
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
  );
};

export default TabNavigation;
