import {Icon, useTheme} from '@rneui/themed';
import React from 'react';

const ThemeSwitcher = () => {
  const {updateTheme} = useTheme();

  const toggleTheme = () => {
    updateTheme(theme => ({
      mode: theme.mode === 'light' ? 'dark' : 'light',
    }));
  };

  return <Icon name={'copy'} type={'font-awesome'} onPress={toggleTheme} />;
};

export default ThemeSwitcher;
