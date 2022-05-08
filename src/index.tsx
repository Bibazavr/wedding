import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createTheme, ThemeProvider} from '@rneui/themed';
import App from './App';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'dark',
});

const Index = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default Index;
