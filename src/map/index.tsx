import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Map = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Место проведения:</Text>
      <Text style={styles.textSecond}>
        Шатёр Волжский, наб. Гребного канала, 109 с1
      </Text>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.630850947708!2d44.05336466415076!3d56.32986976350307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41502b3621eaca73%3A0xa46391ebd1378751!2z0K_RhdGCLdC60LvRg9CxICLQm9C10YLQviI!5e0!3m2!1sen!2sru!4v1649519097182!5m2!1sen!2sru"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  textSecond: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
