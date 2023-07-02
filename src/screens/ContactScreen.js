import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BackIcon from '../../Assets/icons/BackIcon';
import {useNavigation} from '@react-navigation/native';

const ContactScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [textArea, setTextArea] = useState();
  const navigationToAbout = () => {
    navigation.navigate('About');
  };

  const handleFormSubmit = () => {
    if (!name) {
      Alert.alert('Error', 'Please enter your name');
      return;
    }

    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    if (!mobileNumber || (mobileNumber && mobileNumber.length !== 11)) {
      Alert.alert('Error', 'Please enter your mobile number');
      return;
    }

    if (!textArea) {
      Alert.alert('Error', 'Please enter your message');
      return;
    }

    setName('');
    setEmail('');
    setMobileNumber('');
    setTextArea('');

    Alert.alert('Success', 'Form submitted successfully');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderComponent
            headerText={'Contact Us'}
            icon={<BackIcon fill={'white'} height={30} width={30} />}
            onPress={navigationToAbout}
          />

          <View style={styles.headerWrapper}>
            <Text style={styles.mainHeader}> Level up your knowledge</Text>
            <Text style={styles.description}>
              You can reach anytime via vrehmanali@outlook.com
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your name</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={'e.g. Hehachi Mishima'}
              value={name}
              onChangeText={value => setName(value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your email</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={'e.g. kazuya@gmail.com'}
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your Mobile Number</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.inputStyle}
              placeholder={'e.g. 090078601'}
              value={mobileNumber}
              onChangeText={value => setMobileNumber(value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labels}>How we can help you?</Text>
            <TextInput
              style={[styles.inputStyle, styles.multilineStyle]}
              placeholder={'Tell us about yourself'}
              value={textArea}
              onChangeText={value => setTextArea(value)}
            />
          </View>

          <View style={styles.submitWrapper}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleFormSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 15,
  },
  mainHeader: {
    fontSize: 24,
    color: '#FF3350',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 18,
    color: 'white',
    paddingBottom: 20,
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 15,
    color: '#FF3350',
    paddingBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#FF0060',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multilineStyle: {
    paddingVertical: 4,
  },
  submitWrapper: {
    alignItems: 'center',
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#FF3350',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ContactScreen;
