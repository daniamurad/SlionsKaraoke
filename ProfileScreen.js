import React from 'react';
import { StyleSheet,StackNavigator, Text, View , Image,TextInput , Button, TouchableOpacity , Picker} from 'react-native';
import styles from './styles'
import ModalDropdown from 'react-native-modal-dropdown';


export class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Profile',
      titleStyle:  styles.ScreenTitleStyle,
      headerStyle:  styles.BlueScreenHeaderStyle,
      headerTitleStyle: styles.ScreenHeaderTitleStyle,
    };
    constructor(props) {
      super(props);
    this.state = { language: 'Your Native Language' };
    }
    render() {
      return (

        <View style={{ 
          flex: 1,
          flexDirection: 'column',
          //justifyContent: 'center',
          //alignItems: 'center',
        }}>

        <Text style={styles.TextStyleProfileHeadings}>Native Language</Text>
        <ModalDropdown defaultValue="Please Select"  options={['Chinese', 'English', 'Malay', 'Tamil']} style={styles.DropDownStyle} 
        textStyle={styles.DropDownTextStyle} 
        dropdownStyle={styles.DropDownDropDownStyle}
        dropdownTextStyle={styles.DropDownDropDownTextStyle}/>

        <Text style={styles.TextStyleProfileHeadings}>Second Language</Text>
        <ModalDropdown defaultValue="Please Select"  options={['Chinese', 'English', 'Malay', 'Tamil']} style={styles.DropDownStyle} 
        textStyle={styles.DropDownTextStyle} 
        dropdownStyle={styles.DropDownDropDownStyle}
        dropdownTextStyle={styles.DropDownDropDownTextStyle}/>
        
        <Text style={styles.TextStyleProfileHeadings}>English Level</Text>
        <ModalDropdown defaultValue="Please Select"  options={['Easy', 'Medium', 'Hard']} style={styles.DropDownStyle} 
        textStyle={styles.DropDownTextStyle} 
        dropdownStyle={styles.DropDownDropDownStyle}
        dropdownTextStyle={styles.DropDownDropDownTextStyle}
        />
        

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Genre')}  style={styles.PickMusicButton}>
    
        <Image
            source={require('./icons/button_pick-music.png')}
          />
        </TouchableOpacity>
        </View>
      );
    }
  }