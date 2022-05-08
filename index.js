import {AppRegistry} from 'react-native';
import Index from './src/index';
import appName from './app.json';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

AppRegistry.registerComponent(appName.name, () => Index);

// Run application on web
if (typeof document !== 'undefined') {
  // Create stylesheet
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }

  // Inject stylesheet
  document.head.appendChild(style);

  AppRegistry.runApplication(appName.name, {
    rootTag: document.getElementById('root'),
  });
}
