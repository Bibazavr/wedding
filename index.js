/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import appName from './app.json';

AppRegistry.registerComponent(appName.name, () => App);

// Run application on web
if (typeof document !== 'undefined') {
  AppRegistry.runApplication(appName.name, {
    rootTag: document.getElementById('root'),
  });
}
