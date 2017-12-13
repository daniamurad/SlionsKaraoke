import React from 'react';
import { ScrollView, StyleSheet,StackNavigator, Text, View , Image,TextInput , Button, TouchableOpacity, TouchableHighlight} from 'react-native';
import SpeechTranslatorModule from 'react-native-google-speech';
import Voice from 'react-native-voice';

export class PerformScreen extends React.Component {
    static navigationOptions = {
      title: 'Perform',
      titleStyle:  styles.ScreenTitleStyle,
      headerStyle:  styles.PerformScreenHeaderStyle,
      headerTitleStyle: styles.ScreenHeaderTitleStyle,
    };

    constructor(props) {
      
      super(props);
      //this.userSpeechResults = [];
      this.state = {
        recognized: '',
        pitch: '',
        error: '',
        end: '',
        started: '',
        results: [],
        partialResults: [],
        userSpeechResults: [],
        firstResult: '',
      };
      Voice.onSpeechStart = this.onSpeechStart.bind(this);
      Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
      Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
      Voice.onSpeechError = this.onSpeechError.bind(this);
      Voice.onSpeechResults = this.onSpeechResults.bind(this);
      Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
      Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
      this.flag = 0;
    }

    onSpeechStart(e) {
      this.setState({
        started: '√',
      });
    }
    onSpeechRecognized(e) {
      this.setState({
        recognized: '√',
      });
    }
  
    onSpeechEnd(e) {
      this.setState({
        end: '√',
      });
    }
  
    onSpeechError(e) {
      this.setState({
        error: JSON.stringify(e.error),
      });
    }
  
    onSpeechResults(e) {
      let userSpeechResults = this.state.userSpeechResults.slice();
      userSpeechResults.push(e.value[0]);
      this.setState({
        firstResult: e.value[0],
        results: e.value,
        userSpeechResults: userSpeechResults
        
      });
      console.log('userSpeechResults', userSpeechResults);
    }
  
    onSpeechPartialResults(e) {
      this.setState({
        partialResults: e.value,
      });
    }
  
    onSpeechVolumeChanged(e) {
      this.setState({
        pitch: e.value,
      });
    }
  
    async _startRecognizing(e) {
      this.setState({
        recognized: '',
        pitch: '',
        error: '',
        started: '',
        results: [],
        partialResults: [],
        end: ''
      });
      try {
        await Voice.start('en-US');
      } catch (e) {
        console.error(e);
      }
    }
  
    async _stopRecognizing(e) {
      try {
        await Voice.stop();

      } catch (e) {
        console.error(e);
      }
    }
  
    async _cancelRecognizing(e) {
      try {
        
        await Voice.cancel();
      } catch (e) {
        console.error(e);
      }
    }
  
    async _destroyRecognizer(e) {
      try {
        this.setState({ userSpeechResults: [] });
        await Voice.destroy();
      } catch (e) {
        console.error(e);
      }
      this.setState({
        recognized: '',
        pitch: '',
        error: '',
        started: '',
        results: [],
        partialResults: [],
        end: ''
      });
    }
  

    _testGoogle() {
    }
    
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
<ScrollView>
        <View style={{backgroundColor:'#BFC9CA', margin: 10, height: 250}}>

        <Text
          style={styles.stat}>
          {`Started: ${this.state.started}`}
        </Text>

        <Text
          style={styles.stat}>
          {`Recognized: ${this.state.recognized}`}
        </Text>
        <Text
          style={styles.stat}>
          {`Pitch: ${this.state.pitch}`}
        </Text>

        <Text
          style={styles.stat}>
          {`Error: ${this.state.error}`}
        </Text>
        {/* <Text
          style={styles.stat}>
          Results
        </Text> */}

        {this.state.results.map((result, index) => {
          return (
            
            
            <Text
              key={`result-${index}`}
              style={styles.stat}>
              {/*{result}*/}
            </Text>
            
          )
        })}

           {/* <Text
          style={styles.stat}>
          Partial Results
        </Text>
        {this.state.partialResults.map((result, index) => {
          return (
            <Text
              key={`partial-result-${index}`}
              style={styles.stat}>
              {result}
            </Text>
          )
        })} */}


        <Text
        style= {styles.stat}>
        First element: 
        </Text>

        <Text
        style={styles.stat}>
        {this.state.userSpeechResults}
        {/* {this.userSpeechResults.push(this.state.results[0])}
        {console.log('user Speech results', this.userSpeechResults) } */}
        </Text>        


        <Text
          style={styles.stat}>
          {`End: ${this.state.end}`}
        </Text>


          <TouchableHighlight onPress={this._stopRecognizing.bind(this)}>
          <Text
            style={styles.action}>
            Stop Recognizing
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._cancelRecognizing.bind(this)}>
          <Text
            style={styles.action}>
            Cancel
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._destroyRecognizer.bind(this)}>
          <Text
            style={styles.action}>
            Destroy
          </Text>
        </TouchableHighlight>

            {/* <View style = {{margin: 20}}>
                <Text style={styles.TextStyleSongCurrentLyrics}>Snow glows white on the mountain tonight</Text>
                <Text style={styles.TextStyleSongCurrentLyrics}>雪今晚在山上发出白光</Text>
            </View>

            <View style = {{margin: 20}}>
                <Text style={styles.TextStyleSongNextLyrics}>Not a footprint to be seen</Text>
                <Text style={styles.TextStyleSongNextLyrics}>不是被看见的脚印</Text>
            </View> */}
        </View>
        </ScrollView>

        <View style={{ 
            flex: 1,
            flexDirection: 'row'
        }}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')} style = {{alignSelf:'auto'}}>
             <Image style={styles.PlayBackIcons} source={require('./icons/red_mic.gif')}  />
             </TouchableOpacity>

        <TouchableOpacity onPress={this._startRecognizing.bind(this)}>
             <Image style={styles.PlayBackIcons} source={require('./icons/red_mic.gif')}  />
        </TouchableOpacity> 
             </View>
            </View>
      );
    }
  }