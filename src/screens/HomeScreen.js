import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import HomeImage from '../../Assets/images/homeImage.jpg';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = props => {
  const {channelName, description} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={HomeImage} />
      </View>
      <View style={styles.channelWrapper}>
        <Text style={styles.channelName}>{channelName}</Text>
      </View>
      <View style={styles.channelDescriptionWrapper}>
        <Text style={styles.channelDescription}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: height * 0.05,
  },
  image: {
    height: undefined,
    width: '80%',
    aspectRatio: 1,
  },
  channelWrapper: {
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  channelName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF0060',
  },
  channelDescriptionWrapper: {
    alignItems: 'center',
    paddingHorizontal: width * 0.1,
  },
  channelDescription: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});

export default HomeScreen;
