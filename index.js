/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Index from './src/index';
import appName from './app.json';

AppRegistry.registerComponent(appName.name, () => Index);

// Run application on web
if (typeof document !== 'undefined') {
  AppRegistry.runApplication(appName.name, {
    rootTag: document.getElementById('root'),
  });
}
