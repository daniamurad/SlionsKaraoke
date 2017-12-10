import React from 'react';
import { StyleSheet, Text, View , Image,TextInput , Button, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles'
export default class LoginScreen extends React.Component {


	constructor(props) {
        super(props);
    this.state = { text: 'Username' };
    }
    

    onPressLearnMore() {
        this.props.navigation.navigate('Profile');
        console.log('Pressed!');
        }

    render() {
        
        return (
          <View style={{ 
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          
        <View style={{flex: 0, flexDirection: 'row', justifyContent:'center', alignItems: 'center',}}>
          <Image style={styles.MicImageStyle} source={require('./icons/red_mic.gif')}  />
          < View style={{flex: 0, flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
              <Text style={styles.TextStyleTitleSLions}>SLions</Text>
                <Text style={styles.TextStyleTitleKaraoke}>Karaoke</Text>
          </View>
        </View>
    
            <TextInput
            style={styles.UsernameTextInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TextInput
            style={styles.PasswordTextInput}
            secureTextEntry={false}
            value='password'
          />
    
                
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}  style={styles.LoginButton}>
    
            <Image
            source={require('./icons/button_login.png')}
          />
        </TouchableOpacity>
    
      <Text style={styles.NewSignUp}>New to our App? Sign Up!</Text>
          </View>
        );
      }


}
