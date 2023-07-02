import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BackIcon from '../../Assets/icons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Courses from '../api/Course';

const CourseScreen = () => {
  const navigation = useNavigation();

  const navigationToHome = () => {
    navigation.navigate('Home');
  };

  const navigationToCourseDetails = () => {
    navigation.navigate('CourseDetails');
  };

  const courseCard = ({item}) => {
    return (
      <View style={styles.courseContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={item.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.mainHeader}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={navigationToCourseDetails}>
            <Text style={styles.buttonText}> course Details </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        headerText={'Courses'}
        icon={<BackIcon fill={'white'} height={30} width={30} />}
        onPress={navigationToHome}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={Courses}
        renderItem={courseCard}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  courseContainer: {
    backgroundColor: 'black',
    padding: 20,
    textAlign: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 15,
  },
  mainHeader: {
    color: '#FF0060',
    fontSize: 22,
    textTransform: 'uppercase',
    paddingBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    paddingBottom: 10,
    lineHeight: 20,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: '#FF0060',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default CourseScreen;
