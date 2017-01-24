/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {Component} from 'react'
import {
  AppRegistry,
  DeviceEventEmitter,
  Image,
  Navigator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
}  from 'react-native';


class ThirtyDaysOfReactNative extends Component {
    componentDidMount() {
      StatusBar.setBarStyle(0);
    }

    configureScene(route, routeStack) {
      if (route.type == 'Bottom') {
        return Navigator.SceneConfigs.FloatFromBottom;
      }
      return Navigator.SceneConfigs.PushFromRight;
    }

    routeMapper = {
      LeftButton: (route,navigator,index,navState) => {
        if (route.index > 0) {
          return <TouchableOpacity
            underlayColor = 'transparent'
            onProgress = {() => {if (index > 0) {navigator.pop()}}}>
          </TouchableOpacity>
        } else {
          return null;
        }
      },
      RightButton: (route,navigator,index,navState) => {
        return null;
      },
      Title:(route,navigator,index,navState) => {
        return (<Text style = {styles.navTitle}>{route.title}</Text>)
      }
    };

    render() {
      return (
        <Navigator
        initialRoute = {{
          title: '30 Days of RN',
          index: 0,
          display: true
          //component:MainVIew,
        }}/>
      )
    }

}
function functionName() {
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
  },
  mainView:{
    marginTop: 63
  },
  navBar:{
    borderBottomWidth: 1,
    bordetBottomColor:'#ddd',
  },
  navTitle: {
    paddingtTop:10,
    fontSize:18,
    fontWeight:"500",
  },

  navBackBtn: {
    paddingtTop: 10,
    paddingtLeft: 10,
    fontSize: 18,
    color: "#555"
  }
})


AppRegistry.registerComponent('AwesomeProject', () => ThirtyDaysOfReactNative);
