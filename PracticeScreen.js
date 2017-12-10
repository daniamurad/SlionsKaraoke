
import React from 'react';
import { StyleSheet,StackNavigator, Text, View , Image,TextInput , Button, TouchableOpacity} from 'react-native';

export class PracticeScreen extends React.Component {
    static navigationOptions = {
      title: 'Practice',
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
        <Text>Practice Screen</Text>


        </View>
      
      );
    }
  }