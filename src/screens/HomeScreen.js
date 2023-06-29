import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import HomeImage from '../../Assets/images/homeImage.jpg';
import HeaderComponent from '../components/HeaderComponent';

const HomeScreen = props => {
  const {channelName, description} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <View>
          <HeaderComponent centerText={'Home'} />
        </View>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={HomeImage}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: '#4c5dab',
              marginTop: 0,
            },
          ]}>
          {channelName}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 10,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
  },
  paraStyle: {
    textAlign: 'left',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});

export default HomeScreen;
