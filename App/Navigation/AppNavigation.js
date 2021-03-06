import React from 'react'
import { Text,Animated, Easing, Image  } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Screen1 from '../Containers/Screen1'
import Screen2 from '../Containers/Screen2'
import Screen3 from '../Containers/Screen3'
import Screen4 from '../Containers/Screen4'


import DrawerContainer from '../Containers/DrawerContainer'
import { Metrics } from '../../App/Themes'

import styles from './Styles/NavigationStyles'

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

// drawer stack
const DrawerStack = DrawerNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
  screen3: { screen: Screen3 },
  screen4: { screen: Screen4 },
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

const drawerButton = (navigation) =>
  <Text
    style={{padding: 5, color: 'white'}}
    onPress={() => {
      // Coming soon: navigation.navigate('DrawerToggle')
      // https://github.com/react-community/react-navigation/pull/2492
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
  }><Image
      style={{width: Metrics.screenWidth/8, height: Metrics.screenWidth/8 ,borderRadius:35/2,marginLeft:5,marginTop:5,paddingTop:5}}
      source={require('../../assets/icons/propic.png')}
    />
    </Text>


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#fff'},
    title: 'Home',
    headerTintColor: '#000',
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation)
  })
})




// Manifest of possible screens
const PrimaryNav = StackNavigator({
  loginStack: { screen: DrawerNavigation },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav
