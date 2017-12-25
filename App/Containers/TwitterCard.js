import React from 'react'
import { StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native'
import { Metrics } from '../../App/Themes'
import {
  Container,
  Thumbnail,
  Content,
  Icon,
  Button,
  Fab,
  Item,
  Input

} from "native-base";

export default class TwitterCard extends React.Component {

    render() {
      return (
          <View style={styles.card}>



          <Content style={{ backgroundColor: "white",position:"relative" }}>
            <View style={styles.tweetHead}>
              <Thumbnail source={require('../../assets/icons/propic.png')} />
              <View
                style={{
                  flex: 1,

                  paddingLeft: 10,
                  height: 56
                }}
              >
              <Text>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    Sachin Dev. S{'   '}
                </Text>

                <Text style={{ color: "#999", fontSize: 13 }}>
                  @Sachin_Dev_S{'   '}
                </Text>
                <Text style={{ color: "#999", fontSize: 13 }}>
                      23 mins ago
                </Text>
                </Text>

                <Text style={{ fontSize: 16, padding: 5 }}>
                Check out my new Tweet and website <Text style={{color:'rgb(29,161,242)'}}> www.sachindev.me</Text>

                </Text>
              </View>

            </View>
            <View style ={{
              marginTop:40,
            paddingHorizontal:10,
            marginBottom:20,
            height: 156}}>
            <Image
                      style={{
                        width: Metrics.screenWidth-20,
                        height: Metrics.screenWidth/2 -20,
                        borderRadius:5,
                      }}
                      source={require('../../assets/icons/bg.png')}
                    />
            </View>




            <View style={styles.tweetFooter}>
              <View>
                <Button
                  transparent
                  dark
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                >
                  <Icon name="ios-text-outline" />
                  <Text>60</Text>
                </Button>
              </View>
              <View>
                <Button transparent dark>
                  <Icon name="ios-repeat" />
                  <Text>2</Text>

                </Button>
              </View>
              <View>
                <Button transparent dark>
                  <Icon name="ios-heart-outline" />
                  <Text>19</Text>

                </Button>
              </View>
              <View>
                <Button transparent dark>
                  <Icon name="ios-mail-outline" />
                </Button>
              </View>
            </View>

          </Content>


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
