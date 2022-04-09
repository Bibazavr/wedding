import dayjs from '../date';
import {Card, Text} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {weddingDate} from './constants';
import {getTimeRemaining} from './getTimeRemaining';
import {StyleSheet} from 'react-native';

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
    <Card wrapperStyle={styles.container}>
      <Card.Title>До свадьбы осталось:</Card.Title>
      <Card.Divider />
      <Text>Дней: {remaining.days}</Text>
      <Text>Часов: {remaining.hours}</Text>
      <Text>Минут: {remaining.minutes}</Text>
      <Text>Секунд: {remaining.seconds}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
