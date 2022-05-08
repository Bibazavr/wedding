import {Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Кирилл & Анюта</Text>
      <Text style={styles.textSecond}>07.06.2022</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
  },
  text: {
    fontSize: 40,
    fontFamily: 'Cursive',
    color: 'white',
  },
  textSecond: {
    fontSize: 25,
    fontFamily: 'Cursive',
    color: 'white',
  },
});
