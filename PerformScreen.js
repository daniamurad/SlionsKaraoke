
import React from 'react';
import { StyleSheet,StackNavigator, Text, View , Image,TextInput , Button, TouchableOpacity} from 'react-native';

export class PerformScreen extends React.Component {
    static navigationOptions = {
      title: 'Perform',
      titleStyle:  styles.ScreenTitleStyle,
      headerStyle:  styles.PerformScreenHeaderStyle,
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

        <View style={{flex: 0, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', margin:10}}>
            <View style={{flex: 0, flexDirection: 'column', justifyContent:'center'}}>
            <Text style={styles.StyleSongName}>Let It Go</Text>
              <Text style={styles.TextStyleTitleKaraoke}>Idina Menzel</Text>
              <Text style={styles.StyleSoundtrack}>Frozen Soundtrack</Text>
            </View>
            <Image style={styles.StyleLearnSongIcon} source={require('./icons/frozen.jpg')}  />
        </View>

        <View style={{backgroundColor:'#BFC9CA', margin: 15, height: 250}}>
            <View style = {{margin: 20}}>
                <Text style={styles.TextStyleSongCurrentLyrics}>Snow glows white on the mountain tonight</Text>
                <Text style={styles.TextStyleSongCurrentLyrics}>雪今晚在山上发出白光</Text>
            </View>

            <View style = {{margin: 20}}>
                <Text style={styles.TextStyleSongNextLyrics}>Not a footprint to be seen</Text>
                <Text style={styles.TextStyleSongNextLyrics}>不是被看见的脚印</Text>
            </View>
        </View>


        <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')} style = {{alignSelf:'center'}}>
             <Image style={styles.PlayBackIcons} source={require('./icons/red_mic.gif')}  />
             </TouchableOpacity>
             
            </View>
      );
    }
  }