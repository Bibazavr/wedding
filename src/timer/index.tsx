import dayjs from '../date';
import {Text} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {weddingDate} from './constants';
import {getTimeRemaining} from './getTimeRemaining';
import {StyleSheet, View} from 'react-native';

export const Timer = () => {
  const [remaining, setRemaining] = useState<
    ReturnType<typeof getTimeRemaining>
  >(getTimeRemaining(weddingDate));

  useEffect(() => {
    let countdown: number;
    let timer = setInterval(() => {
      countdown = weddingDate.valueOf() - dayjs().valueOf();

      setRemaining(getTimeRemaining(weddingDate));
      if (countdown <= 0) {
        countdown = 0;
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>До свадьбы осталось:</Text>
      <View style={styles.timer}>
        <Text style={styles.text}>Дней {'\n' + remaining.days}</Text>
        <Text style={styles.text}>Часов {'\n' + remaining.hours}</Text>
        <Text style={styles.text}>Минут {'\n' + remaining.minutes}</Text>
        <Text style={styles.text}>Секунд {'\n' + remaining.seconds}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    margin: 4,
    padding: 8,
    fontFamily: 'Cursive',
  },
});
