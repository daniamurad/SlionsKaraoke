
import React from 'react';
import { StyleSheet,StackNavigator, Text, View , Image,TextInput , Button, TouchableOpacity} from 'react-native';

export class FeedbackScreen extends React.Component {
    static navigationOptions = {
      title: 'Feedback',
      titleStyle:  styles.ScreenTitleStyle,
      headerStyle:  styles.GreenScreenHeaderStyle,
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

        <View style = {{flex: 0, flexDirection: 'column',justifyContent:'center', alignItems:'center', margin:10}}>
            <Text style={styles.StyleSongName}>Success!</Text>
            <View style={{flex: 0, flexDirection: 'row'}}>
                <Image style={styles.FeedBackIcons} source={require('./icons/filledStar.gif')}  />
                <Image style={styles.FeedBackIcons} source={require('./icons/emptyStar.gif')}  />
                <Image style={styles.FeedBackIcons} source={require('./icons/filledStar.gif')}  />
            </View>
            <Text style={styles.TextStyleTitleKaraoke}>Word Accuracy: 78%</Text>
        </View>



       <View style={{flex: 0, flexDirection: 'column', justifyContent:'space-between', margin:10}}>
       <TouchableOpacity  onPress={() => this.props.navigation.navigate('Review')} >
            <Image style={styles.FeedbackImageStyle} source={require('./icons/greenPlay.gif') }/>
            </TouchableOpacity>
            <View style={{flex: 0, flexDirection: 'row', justifyContent:'space-between'}}>
                <Image style={styles.FeedBackIcons} source={require('./icons/repeatGreen.gif')}  />
                <Image style={styles.FeedBackIcons} source={require('./icons/greenMenu.gif')}  />
            </View>
        </View>

        </View>
      
      );
    }
  }