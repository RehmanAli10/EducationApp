import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import React from 'react';

const HeaderComponent = ({headerText, icon, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconWrapper} onPress={onPress}>
        {icon}
      </TouchableOpacity>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerWrapper: {
    flex: 1,
    marginRight: '20%',
    alignItems: 'center',
  },
  iconWrapper: {
    marginLeft: '5%',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HeaderComponent;
