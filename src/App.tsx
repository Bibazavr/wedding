import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import CustomHeader from './Header';
import {Map} from './map';
import {Timer} from './timer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <Timer />
      <Map />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
