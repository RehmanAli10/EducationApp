import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const HeaderComponent = ({
  onPressFirstIcon,
  firstIcon,
  centerText,
  lastIcon,
  onPressSecondIcon,
}) => {
  return firstIcon && centerText && !lastIcon ? (
    <View style={styles.headerMainWrapper}>
      <TouchableOpacity onPress={onPressFirstIcon}>
        {firstIcon && firstIcon}
      </TouchableOpacity>

      <View style={styles.centerTextWrapper}>
        <Text style={styles.headerTextCenterStyle}>{centerText}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.headerMainWrapper}>
      <TouchableOpacity onPress={onPressFirstIcon}>
        {firstIcon && firstIcon}
      </TouchableOpacity>

      <Text style={styles.headerTextCenterStyle}>{centerText}</Text>
      <TouchableOpacity onPress={onPressSecondIcon}>
        {lastIcon && lastIcon}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  headerMainWrapper: {
    marginTop: '5%',
    width: '100%',
    paddingHorizontal: '5%',
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  centerTextWrapper: {
    position: 'absolute',
    left: '53%',
    bottom: 5,
  },
  headerTextCenterStyle: {
    fontSize: 16,
    // color: '#ACACAC',
    color: 'black',
    fontWeight: '600',
  },
});

export default HeaderComponent;
