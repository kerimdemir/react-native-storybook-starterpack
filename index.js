/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StorybookUIRoot from "./storybook";

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => StorybookUIRoot);
