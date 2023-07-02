import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BackIcon from '../../Assets/icons/BackIcon';
import {useNavigation} from '@react-navigation/core';
import ProfileImage from '../../Assets/images/ProfileImage.jpeg';

const About = () => {
  const navigation = useNavigation();
  const navigationToUsers = () => {
    navigation.navigate('Users');
  };
  return (
    <View style={styles.container}>
      <HeaderComponent
        headerText={'About'}
        icon={<BackIcon fill={'white'} height={30} width={30} />}
        onPress={navigationToUsers}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.mainHeader}>Rehman Ali</Text>
        <Text style={styles.paraStyle}>I am a front end developer 😀</Text>

        <View>
          <Image style={styles.imgStyle} source={ProfileImage} />
        </View>

        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}>About me</Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean commodo ligula eget dolor.
          </Text>
        </View>

        <Text style={styles.mainHeader}>Follow me on Social Network</Text>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL('https://www.instagram.com/')}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL('https://www.youtube.com/')}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/187/187210.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL('https://discord.com/')}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/906/906361.png',
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  mainHeader: {
    fontSize: 24,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
  },
  paraStyle: {
    fontSize: 18,
    color: 'white',
    paddingBottom: 30,
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#FF0060',
    marginTop: 20,
  },
  aboutLayout: {
    backgroundColor: '#FF3350',
    paddingHorizontal: 5,
    marginTop: 20,
    borderRadius: 8,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 500,
    marginVertical: 15,
    alignSelf: 'center',
  },
  aboutPara: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 26,
  },
  menuContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
  iconStyle: {
    width: '100%',
    height: '15%',
    aspectRatio: 1,
  },
});

export default About;
