import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Tile} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import CustomHeader from './Header';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <Tile
        imageSrc={require('../public/img/Lynx.webp')}
        caption="Lynx"
        activeOpacity={1}>
        <Text>Biba</Text>
      </Tile>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
