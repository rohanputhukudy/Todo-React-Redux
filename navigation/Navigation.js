import React from 'react';
import TabNavigator from './Navigator';
import { AppLoading } from 'expo'; // requirement for using native-base in expo
import * as Font from 'expo-font';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoading: true, // to load font in expo
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("app/node_modules/native-base/Fonts/Roboto.ttf"),
      Robot_medium: require("app/node_modules/native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontLoading: false });
  }

  render() {
    if (this.state.fontLoading) {
      return (
        <AppLoading />
      );
    } else {
      return (
        <TabNavigator />
      );
    }
  }
}

