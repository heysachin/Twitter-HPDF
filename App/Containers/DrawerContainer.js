import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native'
import {
  NavigationActions
} from 'react-navigation'
import {
  Metrics
} from '../../App/Themes'
import Icon1 from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  Body,
  Content,
  Left,
  Title,
  Thumbnail,
  Col,
  Row,
  Grid,
  Icon,
  Spinner,
  Fab,
  Button,
  Footer,
  Input,
  Right
} from "native-base";

export default class DrawerContainer extends React.Component {

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView>
  <View style={{ flex:1, flexDirection: 'column', backgroundColor: 'rgba(230,236,240,1)', justifyContent: 'space-between', }}>
    <View style={styles.subcontainer,{flex:1,paddingLeft:20,paddingTop:10}}>


      <Image style={{width: 60, height: 60,borderRadius:30}} source={require( '../../assets/icons/propic.png')} />


      <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingRight:10}}>
        <Text style={{fontWeight: 'bold',fontSize: 20,color: 'black',paddingTop:8}}>
                                Sachin Dev. S
                              </Text>
        <Icon1 name='chevron-down' style={{fontSize:20,color: '#1da1f2',fontWeight: 'bold'}}/>
      </View>


      <Text style={{fontSize: 15,color: 'grey',paddingTop: 5}}>
                @Sachin_Dev_S
                </Text>
      <Text style={{paddingTop:15}}>

                    <Text style={{fontWeight: 'bold',fontSize: 17}}>
                    690{' '}
                    </Text>

      <Text style={{fontSize: 17}}>
                    Following{'   '}
                    </Text>

      <Text style={{fontWeight: 'bold',fontSize: 17}}>
                    653{' '}
                    </Text>

      <Text style={{fontSize: 17}}>
                    Followers
                    </Text>

      </Text>
    </View>

    <View style={{ marginBottom:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft:0, marginRight:0 }} />
    <View style={styles.subcontainer1}>

      <Text style={{paddingTop:1}}/>

      <Text>

                  <Image
                    style={{width: 50, height: 50}}
                    source={require('../../assets/icons/profile.png')}

                    />

                  <Text style={{fontSize: 20,textAlign:'center'}}
                  onPress={() => navigation.navigate('screen1')}>

                  {'      '}Profile
                  </Text>
      </Text>
      <Text style={{paddingTop:1}}/>

      <Text>
                  <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/icons/list.png')}

                    />

                  <Text style={{fontSize: 20,textAlign:'center'}}
                  onPress={() => navigation.navigate('screen2')}
                  >
                  {'      '}List
                  </Text>
      </Text>
      <Text style={{paddingTop:1}}/>

      <Text>
                  <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/icons/moments.png')}
                    />

                  <Text style={{fontSize: 20,textAlign:'center'}}
                  onPress={() => navigation.navigate('screen3')}
                  >
                  {'      '}Moments
                  </Text>
      </Text>
      <Text style={{paddingTop:1}}/>

      <Text style={{marginBottom:10}}>
                  <Image
                  style={{width: 50, height: 50}}

                  source={require('../../assets/icons/highlights.png')}

                    />

                  <Text style={{fontSize: 20,textAlign:'center'}}
                  onPress={() => navigation.navigate('screen4')}

                  >
                  {'      '}Highlights
                  </Text>
      </Text>

    </View>
    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, }} />
    <View style={styles.subcontainer}>

      <Text style={{fontSize: 20,paddingBottom:20,paddingTop:10}}>
            Settings and Privacy
            </Text>
      <Text style={{fontSize: 20}}>
            Help center
            </Text>
    </View>
    <View style={styles.spaceBlank}/>

    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft:0, marginRight:0 }} />



    <View style={styles.tweetFooter}>
      <View>
        <Image style={{width: 30, height: 30}} source={require( '../../assets/icons/dnd.png')} />
      </View>
      <View/>
      <View/>
      <View>
        <Image style={{width: 30, height: 30}} source={require( '../../assets/icons/qr.png')} />
      </View>

    </View>
    <View style={styles.spaceBlank}/>


  </View>
</ScrollView>



    )
  }
}

const styles = StyleSheet.create({
  subcontainer: {
    backgroundColor: 'rgba(230,236,240,1)',

    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,

    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "flex-start",

  },

  subcontainer1: {

    flexDirection: 'column',
    justifyContent: 'space-around',

    backgroundColor: 'rgba(230,236,240,1)',

    paddingHorizontal: 20,
    alignItems: "flex-start",

  },
  spaceBlank: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: "flex-start",


  },
  rowBlank: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "flex-start",


  },

  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: 'rgba(230,236,240,1)',
    alignItems: "flex-start",


  },
  tweetFooter: {

    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
  },
  footerIcons: {
    flexDirection: "row",
    alignItems: "stretch",
  },
})
