import {View} from 'react-native';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen';

const HomeContainer = () => {
  const channelName = 'Rav7 Education App';
  const description =
    'This is an application where you can find detail about all courses related to programming';
  return (
    <View>
      <HomeScreen channelName={channelName} description={description} />
    </View>
  );
};

export default HomeContainer;
