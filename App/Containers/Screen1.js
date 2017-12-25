import React from 'react'
import { StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Platform,
  TextInput,
} from 'react-native'

import Icon2 from 'react-native-vector-icons/Ionicons';
import Footer from './Footer.js'
import TwitterCard from './TwitterCard';
import FacebookTabBar from './FacebookTabBar';
import ActionButton from 'react-native-action-button';
import { ApplicationStyles, Metrics, Colors } from '../../App/Themes'
import {
  Container,
  Thumbnail,
  Content,
  Icon,
  Button,Fab,Item,Input

} from "native-base";
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class Screen1 extends React.Component {


  render() {
    return (
      <View style={{flex:1}}>

  <ScrollableTabView style={{backgroundColor: '#fff',paddingTop:10 }} initialPage={0} renderTabBar={()=>
    <FacebookTabBar />} >

      <ScrollView tabLabel="ios-home">
      <View style={{flex:1}}>
      <ScrollView tabLabel="ios-home" style={styles.tabView}>

        <TwitterCard/>
        <TwitterCard/>
        <TwitterCard/>

      </ScrollView>

      <Fab position="bottomRight" style={{ backgroundColor: '#1da1f2' }}>
        <Icon2 name="logo-twitter" style={{color: '#ffffff'}}/>
      </Fab>
    </View>
    </ScrollView>
    



    <ScrollView tabLabel="ios-search" style={styles.tabView}>
      <View style={styles.searchSection}>
        <TouchableOpacity>
          <Icon name="md-arrow-back" style={{ fontSize: 30, color: 'rgba(29,161,242,1)', padding: 15, paddingRight:40, }}/>
        </TouchableOpacity>

        <TextInput style={{margin:30},styles.input} placeholder="Search Twitter" onChangeText={(searchString)=> {this.setState({searchString})}} underlineColorAndroid="transparent" />
      </View>
    </ScrollView>
    <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
      <View style={styles.card}>
        <Text>Notifications</Text>
      </View>
    </ScrollView>
    <ScrollView tabLabel="ios-mail" style={styles.tabView}>
      <View style={styles.card}>
        <Text>Messages</Text>
      </View>
    </ScrollView>

  </ScrollableTabView>
  <Footer/>
</View>


)
}


}
const styles = StyleSheet.create({
  tweetHead: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    paddingBottom: 0
  },
  tweetFooter: {

    flexDirection: "row",
    marginTop:20,
    justifyContent: "space-around",
    borderBottomColor: "#CCC",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  footerIcons: {
    flexDirection: "row",
    alignItems: "center"
  },
  tweetReply: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    paddingBottom: 0
  },
  container: {
    flex: 1,
    paddingTop:15,
    backgroundColor: '#fff',
//    alignItems: 'center',
  //  justifyContent: 'center',

  },
  subcontainer:{
    height:100,
    width:Metrics.screenWidth/4,
marginLeft:10

  },
  text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',

   },icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },searchcard:{
    flexDirection: "row",
    marginTop:20,
    justifyContent: "space-between",
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,

    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 15,
    paddingRight:40,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},

  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,

    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(230,236,240,1)',
  },

})
