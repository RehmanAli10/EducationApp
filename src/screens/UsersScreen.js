import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BackIcon from '../../Assets/icons/BackIcon';
import {useNavigation} from '@react-navigation/core';

const UsersScreen = () => {
  const navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(true);
  const [studentData, setStudentData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://thapatechnical.github.io/userapi/users.json',
      );
      const realData = await response.json();
      setStudentData(realData);
      setIsLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const navigationToCourses = () => {
    navigation.navigate('Courses');
  };

  const showUserData = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.card}>
          <View style={styles.imgContainer}>
            <Image style={styles.imgStyle} source={{uri: item.image}} />
          </View>

          <View>
            <View style={styles.bioDataContainer}>
              <Text style={styles.bioData}> Bio-Data </Text>
              <Text style={styles.idNumber}>
                {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
              </Text>
            </View>

            <View style={styles.mainContain}>
              <Text style={styles.myName}> Name: {item.name} </Text>
              <Text style={styles.myName}> email: {item.email} </Text>
              <Text style={styles.myName}> mobile: {item.mobile} </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        headerText={'List of Students'}
        icon={<BackIcon fill={'white'} height={30} width={30} />}
        onPress={navigationToCourses}
      />
      <Text>List of Students</Text>
      <FlatList
        data={studentData}
        renderItem={showUserData}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainContainer: {
    width: '100%',
    minHeight: '100%',
    paddingVertical: 50,
    backgroundColor: 'black',
    flex: 1,
  },
  card: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 20,
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#353535',
    paddingVertical: 10,
    fontFamily: 'WorkSans_400Regular',
  },
  idNumber: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'WorkSans_400Regular',
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'WorkSans_400Regular',
  },
  mainHeader: {
    fontSize: 30,
    color: '#a18ce5',
    textAlign: 'center',
    fontFamily: 'WorkSans_400Regular',
    paddingVertical: 50,
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: '100%',
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: '#353535',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 20,
  },
  myName: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
    fontFamily: 'WorkSans_400Regular',
  },
});

export default UsersScreen;
