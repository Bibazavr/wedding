import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  View,
} from 'react-native';
import CustomHeader from './Header';
import {Map} from './map';
import {Timer} from './timer';
import {Text} from '@rneui/base';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: require('./img/photo2.jpg')}}
        style={styles.first}>
        <CustomHeader />
        <Timer />
      </ImageBackground>

      <ImageBackground
        source={{uri: require('./img/photo10.jpg')}}
        style={styles.second}>
        <View style={styles.secondContainer}>
          <Text style={styles.text}>Дорогие гости!</Text>

          <Text style={styles.textSecond}>
            07.06.2022{'\n'}
            <Text style={{fontWeight: 'bold'}}>Кирилл и Анна</Text> {'\n'}
            <Text style={{fontStyle: 'italic'}}>
              скажут важные слова в&nbsp;окружении родных и близких {'\n'} Сбор
              гостей в 16:00
            </Text>
          </Text>
        </View>
      </ImageBackground>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image
          source={{uri: require('./img/photo7.jpg'), width: 800, height: 800}}
        />
        <Image
          source={{uri: require('./img/photo.jpg'), width: 800, height: 800}}
        />
        <Image
          source={{uri: require('./img/photo1.jpg'), width: 800, height: 800}}
        />
        <Image
          source={{uri: require('./img/photo4.jpg'), width: 800, height: 800}}
        />
        <Image
          source={{uri: require('./img/photo5.jpg'), width: 800, height: 800}}
        />

        <Image
          source={{uri: require('./img/photo8.jpg'), width: 800, height: 800}}
        />
      </ScrollView>
      <ImageBackground
        source={{uri: require('./img/photo11.jpg'), width: 600, height: 600}}>
        <Map />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  first: {
    minHeight: 800,
  },
  second: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: 800,
    flex: 1,
    flexWrap: 'wrap',
  },
  secondContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontFamily: 'Cursive',
  },
  textSecond: {
    fontSize: 30,
  },
});
export default App;
