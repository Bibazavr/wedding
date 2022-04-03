import {Header, Text} from '@rneui/themed';
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const CustomHeader = () => {
  return (
    <Header
      centerComponent={<Text>Wedding</Text>}
      rightComponent={<ThemeSwitcher />}
    />
  );
};

export default CustomHeader;
