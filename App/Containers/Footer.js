import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import {Icon} from 'native-base';


export default class Footer extends Component<{}> {

  render() {
    return (
      <View >
        <Text style ={{borderBottomWidth: 1,borderBottomColor:'#E0E0E0'}}></Text>
        <View style = {{flexDirection: 'row',justifyContent:'space-between',padding:10}}>
          <View style={{flexDirection:'row',alignItems: 'center',paddingLeft:15}}>
            <Text style={{fontSize: 14,fontWeight:'bold'}}>
            All
            </Text>
            <Text style={{fontSize: 14,marginLeft:20,fontWeight:'bold'}}>
            Mentions
            </Text>
          </View>
          <Icon name="settings" style={{color:'#1da1f2'}} />
        </View>
      </View>

    );
  }
}
