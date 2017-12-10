import React from 'react';
import { StyleSheet,StackNavigator, Text, View , Image,TextInput , Button, TouchableOpacity} from 'react-native';

export class PickSongScreen extends React.Component {
    static navigationOptions = {
      title: 'Pick Song', //add chinese name here too dynamically
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

<Text style={styles.TextStylePickSong}>Kids Song (Easy):</Text>

<TouchableOpacity style={styles.TextStyleTochableOpacityPickSongs}>
<View>
<Text style={styles.TextStyleSongNames}>Twinkle Twinkle Little Star</Text>
<Text style={styles.TextStyleSongNames}>一闪一闪亮晶晶</Text>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.TextStyleTochableOpacityPickSongs}>
<View>
<Text style={styles.TextStyleSongNames}>Jingle Bells</Text>
<Text style={styles.TextStyleSongNames}>铃儿响叮当</Text>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.TextStyleTochableOpacityPickSongs} onPress={() => this.props.navigation.navigate('Learn')}>
<View>
<Text style={styles.TextStyleSongNames}>Let It Go</Text>
<Text style={styles.TextStyleSongNames}>随它吧
</Text>
</View>
</TouchableOpacity>



            </View>
      );
    }
  }