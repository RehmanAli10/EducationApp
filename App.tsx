import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/utilities/TabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
