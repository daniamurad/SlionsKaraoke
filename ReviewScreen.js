
import React from 'react';
import { ScrollView,StyleSheet,StackNavigator, Text, View , Image,TextInput , Button, TouchableOpacity} from 'react-native';

export class ReviewScreen extends React.Component {
    static navigationOptions = {
      title: 'Review',
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
        <Text>Review Screen</Text>
        <ScrollView >
        <View style={{backgroundColor:'#BFC9CA', margin: 10}}>
        < View >
            <View style = {{ margin: 10}}>
                <Text style={styles.CorrectReviewLyrics}>Snow glows white on the mountain tonight</Text>
                <Text style={styles.CorrectReviewLyrics}>雪今晚在山上发出白光</Text>
                
            </View>
        </View>

            <View style = {{margin: 10}}>
                <Text style={styles.CorrectReviewLyrics}>Not a footprint to be seen</Text>
                <Text style={styles.CorrectReviewLyrics}>不是被看见的脚印</Text>
            </View>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Practice')}>
            <View style = {{margin: 10}}>
                <Text style={styles.IncorrectReviewLyrics}>Kingdom of isolation</Text>
                <Text style={styles.IncorrectReviewLyrics}>隔离王国</Text>
            </View>
            </TouchableOpacity>

            <View style = {{margin: 10}}>
                <Text style={styles.CorrectReviewLyrics}>and it looks like I am the queen</Text>
                <Text style={styles.CorrectReviewLyrics}>看起来我是女王</Text>
            </View>

            <View style = {{margin: 10}}>
                <Text style={styles.IncorrectReviewLyrics}>the wind is howling like this swirling storm inside</Text>
                <Text style={styles.IncorrectReviewLyrics}>嗖嗖的风在里面</Text>
            </View>
            </View>
        </ScrollView >
        </View>
      
      );
    }
  }