import React from 'react';
import HomeScreen from '../../screens/HomeScreen';

const HomeContainer = () => {
  const channelName = 'Rav7 Education App';
  const description =
    'This is an application where you can find detail about all courses related to programming';
  return <HomeScreen channelName={channelName} description={description} />;
};

export default HomeContainer;
