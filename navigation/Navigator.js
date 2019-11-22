import React from 'react';
import { Container, Header, Title, Content, Body, Text, Icon } from 'native-base';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import AllToDo from '../screens/AllToDo';
import ActiveToDo from '../screens/ActiveToDo';
import CompletedToDo from '../screens/CompletedToDo';

export default TabNavigator({
  All: { screen: AllToDo },
  Active: { screen: ActiveToDo },
  Completed: { screen: CompletedToDo },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'All') {
        iconName = `list`;
      } else if (routeName === 'Active') {
        iconName = `unlock`;
      } else{
        iconName = `checkmark`;
      }
  
      return <Icon name= { iconName } color = { 'red' } active = { true } />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
});
