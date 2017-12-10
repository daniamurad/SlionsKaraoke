import React from 'react';
import { ScrollView,StyleSheet,StackNavigator, Text, View , Image,TextInput , Button, TouchableOpacity} from 'react-native';

export class GenreScreen extends React.Component {
    static navigationOptions = {
      title: 'Genre', //add chinese name here too dynamically
      titleStyle:  styles.ScreenTitleStyle,
      headerStyle:  styles.BlueScreenHeaderStyle,
      headerTitleStyle: styles.ScreenHeaderTitleStyle,
    };
    render() {
      return (
        <View style={{ 
          flex: 1,
          flexDirection: 'column',
          //justifyContent: 'center',
          //alignItems: 'center',
        }}>

<ScrollView >
        <View style={{flex: 0, flexDirection: 'column', justifyContent:'center', alignItems: 'center',}}>
             < View style={{flex: 0, flexDirection: 'row'}}>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('PickSong')}  >
             <Image style={styles.GenreImageStyle} source={require('./icons/kids.png')}  />
             </TouchableOpacity>

             <Image style={styles.GenreImageStyle} source={require('./icons/pop.png')}  />
             </View>

             < View style={{flex: 0, flexDirection: 'row', justifyContent:'space-between'}}>
             <Image style={styles.GenreImageStyle} source={require('./icons/kids.png')}  />
             <Image style={styles.GenreImageStyle} source={require('./icons/pop.png')}  />
             </View>

             < View style={{flex: 0, flexDirection: 'row', justifyContent:'space-between'}}>
             <Image style={styles.GenreImageStyle} source={require('./icons/kids.png')}  />
             <Image style={styles.GenreImageStyle} source={require('./icons/pop.png')}  />
             </View>

             < View style={{flex: 0, flexDirection: 'row', justifyContent:'space-between'}}>
             <Image style={styles.GenreImageStyle} source={require('./icons/kids.png')}  />
             <Image style={styles.GenreImageStyle} source={require('./icons/pop.png')}  />
             </View>


       </View>
       </ScrollView>
            </View>
      );
    }
  }