import React from 'react';
import { ScrollView, StyleSheet,StackNavigator, Text, View , Image,TextInput , Button, TouchableOpacity, TouchableHighlight} from 'react-native';
import Voice from 'react-native-voice';
import stringSimilarity from 'string-similarity';
import Sound from 'react-native-sound';
import BackgroundTimer from 'react-native-background-timer';

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
      this.timeoutIdStart = [];
      this.timeoutIdEnd = [];
      this.backingTrack = '';
      this.lyricsEnglish = [];
      this.noOfSections = 1;
      //this.similarityScores = [];
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
        jsonData: '',
        similarityScores: [],
      };
      Voice.onSpeechStart = this.onSpeechStart.bind(this);
      Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
      Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
      Voice.onSpeechError = this.onSpeechError.bind(this);
      Voice.onSpeechResults = this.onSpeechResults.bind(this);
      Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
      Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
      this._startRecognizing =  this._startRecognizing.bind(this);
      this._stopRecognizing = this._stopRecognizing.bind(this);
      fetch('https://s3-ap-southeast-1.amazonaws.com/slionsbucket/letItGo.json').then((response) => response.json()).then((responseData) => {
        this.setState({
          jsonData: responseData
        });
        
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < this.state.jsonData.sections[0].lines.length; j++) {
        this.lyricsEnglish.push(this.state.jsonData.sections[i].lines[j].lyric_english);
      }
    }
      });


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
      console.log('userSpeechResults1', userSpeechResults[userSpeechResults.length - 1]);
      console.log('userSpeechResults2', this.lyricsEnglish[userSpeechResults.length - 1]);
      const userText = userSpeechResults[userSpeechResults.length - 1].toLowerCase();
      const lyricText = this.lyricsEnglish[userSpeechResults.length - 1].toLowerCase();
      const userTextWords = userText.split(' ');
      const lyricTextWords = lyricText.split(' ');
      console.log('userSpeechResults3', userTextWords);
      console.log('userSpeechResults4', lyricTextWords);
      let similarity = stringSimilarity.compareTwoStrings(userText, lyricText);
      let similarityScores = this.state.similarityScores.slice();
      similarityScores.push(similarity);
      console.log('similarity', similarity);

      this.setState({
        firstResult: e.value[0],
        results: e.value,
        userSpeechResults: userSpeechResults,
        similarityScores: similarityScores
        
      });
      

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
//////////**** NEW STUFF *//////////////////
        console.log('_startRecognizing');
        console.log('lyricsEnglish', this.lyricsEnglish);


     



//////****** *////////////////////////

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
        this.state.similarityScores = [];
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
  

    _perform() {

      console.log('perform start');

     
    //    for (let i = 0; i<this.noOfSections; i++){
    // //     //var timeout=

    //      for (let j = 0; j < this.state.jsonData.sections[this.noOfSections - 1].lines.length; j++) {
    //       console.log('dataresponse', this.state.jsonData.sections[i].lines[j].lyric_english); 

    //       this.timeoutIdStart[j] = BackgroundTimer.setTimeout(() => {
    //         console.log('dataresponse', this.state.jsonData.sections[i].lines[j].lyric_english); 
    //         console.log('stop recognition');
    //   //      this._stopRecognizing(this);
    //         console.log('start recognition');
    //         this._startRecognizing(this);

    //         console.log('start timer', (parseFloat(this.state.jsonData.sections[i].lines[j].time_start) + 0.25) * 1000);
    //       }, (parseFloat(this.state.jsonData.sections[i].lines[j].time_start) + 0.25) * 1000);
    //      }
    //     }

    //     for (let i = 0; i<this.noOfSections; i++){
    //       //     //var timeout=
      
    //            for (let j = 0; j < this.state.jsonData.sections[this.noOfSections - 1].lines.length; j++) {
    //             console.log('dataresponse', this.state.jsonData.sections[i].lines[j].lyric_english); 
      
    //             this.timeoutIdEnd[j] = BackgroundTimer.setTimeout(() => {
    //               //this._stopRecognizing(this);
    //               //this._startRecognizing(this);
      
    //               console.log('stop timer', (parseFloat(this.state.jsonData.sections[i].lines[j].time_start) - 0.25) * 1000);
    //             }, (parseFloat(this.state.jsonData.sections[i].lines[j].time_start) - 0.25) * 1000);
    //            }
    //           }
  
      this._startRecognizing(this);
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

        {/* <Text
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
        </Text> */}

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
        {this.state.userSpeechResults[this.state.userSpeechResults.length-1]}
        {/* {this.userSpeechResults.push(this.state.results[0])}
        {console.log('user Speech results', this.userSpeechResults) } */}
        </Text>  

        <Text
        style= {styles.stat}>
        Score: 
        </Text>

        <Text
        style={styles.stat}>
        {this.state.similarityScores[this.state.similarityScores.length - 1] * 100}
        {/* {this.userSpeechResults.push(this.state.results[0])}
        {console.log('user Speech results', this.userSpeechResults) } */}
        </Text>       


        {/* <Text
          style={styles.stat}>
          {`End: ${this.state.end}`}
        </Text> */}


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

        <TouchableOpacity onPress={this._perform.bind(this)}>
             <Image style={styles.PlayBackIcons} source={require('./icons/red_mic.gif')}  />
        </TouchableOpacity> 
             </View>
            </View>
      );
    }
  }