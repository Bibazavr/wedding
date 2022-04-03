import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {} from '@rneui/themed';
import {StyleSheet, Image} from 'react-native';
import CustomHeader from './Header';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <Image source={{uri: require('./img/lynx.jpg'), height: 1000}} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
