import React from 'react'
import { StyleSheet, Text, View, Image,TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation'

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
      <View style={styles.container}>
          <View style={styles.subcontainer}>

              <Image
                  style={{width: 60, height: 60,borderRadius:30}}
                  source={require('../../assets/icons/propic.png')}
                />
                <Text>
                <Text style={{fontWeight:'bold',fontSize: 20,paddingTop:8}}>
                Sachin Dev. S{'\t\t\t\t\t'}
                </Text>
                <Image
                    style={{width: 15, height: 15}}
                    source={require('../../assets/icons/arrow.png')}
                  />
                </Text>

                <Text style={{fontSize: 15,color:'grey',paddingTop: 5}}>
                @Sachin_Dev_S
                </Text>
                <Text style ={{paddingTop:15}}>

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

            <View
                style={{
                  marginBottom:10,
                  borderBottomColor: 'grey',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginLeft:0,
                  marginRight:0
                }}
            />
        <View style={styles.subcontainer1}>

        <Text style={{paddingTop:1}}/>

        <Text>

                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../assets/icons/profile.png')}

                    />

                  <Text style={{fontSize: 17,textAlign:'center'}}
                  onPress={() => navigation.navigate('screen1')}>

                  {'      '}Profile
                  </Text>
            </Text>
            <Text style={{paddingTop:1}}/>

            <Text>
                  <Image
                  style={{width: 30, height: 30}}
                  source={require('../../assets/icons/list.png')}

                    />

                  <Text style={{fontSize: 17,textAlign:'center'}}
                  onPress={() => navigation.navigate('screen2')}
                  >
                  {'      '}List
                  </Text>
            </Text>
            <Text style={{paddingTop:1}}/>

            <Text>
                  <Image
                  style={{width: 30, height: 30}}

                  source={require('../../assets/icons/moments.png')}

                    />

                  <Text style={{fontSize: 17,textAlign:'center'}}
                  onPress={() => navigation.navigate('screen3')}
                  >
                  {'      '}Moments
                  </Text>
            </Text>
            <Text style={{paddingTop:1}}/>

            <Text style={{marginBottom:10}}>
                  <Image
                  style={{width: 30, height: 30}}

                  source={require('../../assets/icons/highlights.png')}

                    />

                  <Text style={{fontSize: 17,textAlign:'center'}}
                onPress={this.logout}
                  >
                  {'      '}Highlights
                  </Text>
            </Text>

        </View>
            <View
                style={{

                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                }}
            />

            <View style={styles.subcontainer}>

            <Text style={{fontSize: 20,paddingBottom:20,paddingTop:10}}>
            Settings and Privacy
            </Text>
            <Text style={{fontSize: 20}}>
            Help center
            </Text>
            </View>
            <View style={styles.subcontainer}/>

                <View
                    style={{

                      borderBottomColor: 'grey',
                      borderBottomWidth: StyleSheet.hairlineWidth,


                      marginLeft:0,
                      marginRight:0
                    }}
                />


                <View style={styles.subcontainer}>


                <Text style={{marginBottom:10}}>
                      <Image
                      style={{width: 30, height: 30}}
                      resizeMode="contain"
                      source={require('../../assets/icons/moon.png')}


                        />
                        <Text>{"\t\t\t\t\t\t\t"}</Text>

                        <Image
                        style={{width: 30, height: 30}}
                        resizeMode="contain"

                        source={require('../../assets/icons/qr.png')}


                          />
                          </Text>
            </View>

        </View>



    )
  }
}

const styles = StyleSheet.create({
  subcontainer: {
    backgroundColor: '#f6f6f6',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom:20,
  },subcontainer1: {
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20
  },container: {
    flex: 1,
    backgroundColor: '#f6f6f6',

  },

  // uglyDrawerItem: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: '#E73536',
  //   padding: 15,
  //   margin: 5,
  //   borderRadius: 2,
  //   borderColor: '#E73536',
  //   borderWidth: 1,
  //   textAlign: 'center'
  // }
})
