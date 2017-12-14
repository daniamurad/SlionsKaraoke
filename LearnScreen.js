import React from 'react';
import { StyleSheet,StackNavigator, Text, View , Image,TextInput , Button, TouchableOpacity, Alert,ToastAndroid, Slider,
  DeviceEventEmitter,
  NativeAppEventEmitter,
  Platform } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import Sound from 'react-native-sound';

export class LearnScreen extends React.Component {

    static navigationOptions = {
      title: 'Learn',
      titleStyle: styles.ScreenTitleStyle,
      headerStyle: styles.BlueScreenHeaderStyle,
      headerTitleStyle: styles.ScreenHeaderTitleStyle,
    };

    constructor(props) {
      super(props);
      this.audioFlag = 0;
      this.minValue = 0;
      this.vocalDuration = 0;
      this.sectionDuration = 0;
      this.noOfSections = 1;
      this.urls = { url: 'http://lacavewebradio.chickenkiller.com:8000/stream.mp3' };
      this.vocalsTrack = '';
      this.backingTrack = '';
      this.timeoutId = [];
      this.startTime = [];
      this.endTime = [];
      this.lyricsEnglish = [];
      this.lyricsChinese = [];
      this.backgroundTimerId = 0;
      this.state = {
          jsonData: '',
          secondaryLyric: '',
          primaryLyric: '',
          pinyinLyric: '',
          SliderValue: 0, 
          value: 0,       
      };
  
    }

    _readJson() {
      //ToastAndroid.show('_readJson', ToastAndroid.SHORT);
      fetch('https://s3-ap-southeast-1.amazonaws.com/slionsbucket/letItGo.json').then((response) => response.json()).then((responseData) => {
        this.setState({
          jsonData: responseData
        });
        console.log('JSON DATA', this.state.jsonData);

        var data = responseData.sections.map(function(item) {
          return item.lines.map(function(line) {
            return {
              start_time: line.time_start
            };
          });
        });
        console.log('JSON DATA DATA', data);


      });
      ToastAndroid.show('_readJson!', ToastAndroid.SHORT);
      
    }

    _changeSliderValue(ChangedValue) {
      ToastAndroid.show('__changeSliderValue!', ToastAndroid.SHORT);
      this.state.SliderValue = ChangedValue;
    }

    _audioFile() {
      const EventEmitter = Platform.select({
        ios: () => NativeAppEventEmitter,
        android: () => DeviceEventEmitter,
      })();

      ToastAndroid.show('_audioFile local !', ToastAndroid.SHORT);
      //ReactNativeAudioStreaming.play(url_1, {});
      
      ToastAndroid.show('_audioFile fetch json !', ToastAndroid.SHORT);

      fetch('https://s3-ap-southeast-1.amazonaws.com/slionsbucket/letItGo.json').then((response) => response.json()).then((responseJson) => {
        this.setState({
          jsonData: responseJson
        });
        ToastAndroid.show('_audioFile fetching json !', ToastAndroid.SHORT);
        var data = responseJson.sections.map(function(item) {
          return item.lines.map(function(line) {
            return {
              start_time: line.time_start,
              end_time: line.time_end,
              english: line.lyric_english,
              chinese: line.lyric_chinese,
              pinyin: line.lyric_pinyin,
              reference: line.reference_translation
            };
          });
        });

        this.sectionDuration = parseFloat( this.state.jsonData.sections[this.noOfSections - 1].end_section);
       // var i = 0;
       
    for (let i = 0; i < this.noOfSections; i++) {
      for (let j = 0; j < this.state.jsonData.sections[this.noOfSections - 1].lines.length; j++) {
        this.startTime.push(this.state.jsonData.sections[i].lines[j].time_start);
        this.endTime.push(this.state.jsonData.sections[i].lines[j].time_end);
        this.lyricsEnglish.push(this.state.jsonData.sections[i].lines[j].lyric_english);
        this.lyricsChinese.push(this.state.jsonData.sections[i].lines[j].lyric_chinese);
      }
    }



    //BackgroundTimer.setTimeout(() => {
 //     ToastAndroid.show('last last lyric timer', ToastAndroid.SHORT);
      // this will be executed once after 10 seconds
      // even when app is the the background
 //       console.log('tac');
  //      BackgroundTimer.clearInterval(this.backgroundTimerId);
   //     this.backingTrack.stop();
    //    this.vocalsTrack.stop();
   // }, parseFloat(this.state.jsonData.sections[this.noOfSections - 1].end_section) * 1000);
  
        ///// ************************8 /////



        this.backingTrack = new Sound('letitgobacking.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
          // loaded successfully
          
          this.backingTrack.play((success) => {
            this.audioFlag = 1;
          if (success) {
            
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
            // reset the player to its uninitialized state (android only)
            // this is the only option to recover after an error occured and use the player again
            this.backingTrack.reset();
          }
        });

          ToastAndroid.show('play sound', ToastAndroid.SHORT);
          console.log('duration in seconds: ', this.backingTrack.getDuration(), 'number of channels: ', this.backingTrack.getNumberOfChannels());
        });
        

        this.vocalsTrack = new Sound('letitgovocals.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
          // loaded successfully
          
          this.vocalsTrack.play((success) => {
            this.audioFlag = 1;
          if (success) {
            
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
            // reset the player to its uninitialized state (android only)
            // this is the only option to recover after an error occured and use the player again
            this.vocalsTrack.reset();
          }
        });

          ToastAndroid.show('play vocalsTrack sound', ToastAndroid.SHORT);
          this.vocalDuration = this.vocalsTrack.getDuration();
          console.log('duration in seconds: ', this.vocalsTrack.getDuration(), 'number of channels: ', this.vocalsTrack.getNumberOfChannels());
        });

        this.backgroundTimerId = BackgroundTimer.setInterval(() => {
          //ToastAndroid.show('last last lyric timer', ToastAndroid.SHORT);
          // this will be executed once after 10 seconds
          // even when app is the the background
            console.log('setInterval tac');
            
            this.vocalsTrack.getCurrentTime((seconds) => { 
              console.log('Song is at ', seconds);
              for (let k = 0; k < this.startTime.length; k++) {

                console.log('seconds', seconds);
                console.log('song start time', this.state.jsonData.sections[0].lines[0].time_start);
                console.log('Song end time', this.state.jsonData.sections[this.noOfSections - 1].end_section);
                console.log('New line');

                if (seconds > this.startTime[k] && seconds < this.endTime[k]) {
                this.state.secondaryLyric = this.lyricsEnglish[k];
                this.state.primaryLyric = this.lyricsChinese[k];
                 console.log('current lyric', this.lyricsEnglish[k]);
                }
                if (seconds < this.state.jsonData.sections[0].lines[0].time_start) {
                  console.log('Song started');
                  this.state.secondaryLyric = '';
                  this.state.primaryLyric = '';
                }

                if (seconds > this.state.jsonData.sections[this.noOfSections - 1].end_section - 0.15) {
                  console.log('Song ended');
                  // this will be executed once after 10 seconds
                  // even when app is the the background
                    BackgroundTimer.clearInterval(this.backgroundTimerId);
                    this.backingTrack.stop();
                    this.vocalsTrack.stop();
                    this.setState({ value: 0 });
                }

             //   let diff = Math.abs(seconds - this.startTime[k]);
             //   console.log('Difference', diff);
              }
            //  for (let i = 0; i < this.noOfSections; i++) {
              //  for (let j = 0; j < this.state.jsonData.sections[this.noOfSections - 1].lines.length; j++) {
                //  let diff = seconds - this.state.jsonData.sections[this.noOfSections - 1].lines.time_start;
               //   console.log('DIFFERENCE', diff);
             //   }
             // }
              this.setState({ value: seconds });
           });
        }, 0.1 * 1000);


        //////////**********************///////


        ToastAndroid.show(responseJson.track_name, ToastAndroid.SHORT);
    

      }).catch(function (err) {
        ToastAndroid.show('_audioFile error fetching json !', ToastAndroid.SHORT);
        console.log('network error', err);
        return err;})

      
      //RNAudioStreamer.setUrl(url);     
      //RNAudioStreamer.play()
    }

  

    navigateToPerform(){

      console.log(' this.audioFlag', this.audioFlag );
      if (this.audioFlag === 1){
      this.backingTrack.stop();
      this.vocalsTrack.stop();
      ToastAndroid.show('navigateToPerform', ToastAndroid.SHORT);
      console.log('timeout ID', this.timeoutId.length);
      BackgroundTimer.clearInterval(this.backgroundTimerId);
      }
      this.props.navigation.navigate('Perform');

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

        <View style={{backgroundColor:'#BFC9CA', margin: 15, height: 200}}>
            <View style = {{margin: 20}}>
                <Text style={styles.TextStyleSongCurrentLyrics}>{this.state.secondaryLyric}</Text>
                <Text style={styles.TextStyleSongCurrentLyrics}>{this.state.primaryLyric}</Text>
            </View>

            {/* <View style = {{margin: 20}}>
                <Text style={styles.TextStyleSongNextLyrics}>Not a footprint to be seen</Text>
                <Text style={styles.TextStyleSongNextLyrics}>不是被看见的脚印</Text>
            </View> */}
        </View>

        < View style={{flex: 0, flexDirection: 'row', justifyContent:'space-between'}}>

        <TouchableOpacity  onPress={this._readJson.bind(this)} >
            <Image style={styles.PlayBackIcons} source={require('./icons/repeat.gif')}  />
        </TouchableOpacity>

        <TouchableOpacity  onPress={this._audioFile.bind(this)} >
            <Image style={styles.PlayBackIcons} source={require('./icons/bluePlay.gif')} />
        </TouchableOpacity>
             <TouchableOpacity onPress={this.navigateToPerform.bind(this)}>
             <Image style={styles.PlayBackIcons} source={require('./icons/red_mic.gif')}  />
             </TouchableOpacity>
        </View>

        <View>
        
               <Text style = {{fontSize: 20}}>Slider Value = { this.state.SliderValue }</Text>
        
               <Slider
                 step = {1}
                 minimumValue = {0}
                 maximumValue = {this.sectionDuration}
                 minimumTrackTintColor = "#009688"
                 value = {this.state.value}
                 /* onValueChange={(ChangedValue) => {
                   this.vocalsTrack.setCurrentTime(ChangedValue); 
                   this.vocalsTrack.getCurrentTime((seconds) => { console.log('Song is at ', seconds); });
                   this.backingTrack.setCurrentTime(ChangedValue);
                  }
                 } */
                 onValueChange={(value) => {
                  this.vocalsTrack.setCurrentTime(value); 
                  this.backingTrack.setCurrentTime(value);
                  this.setState({ value }); 
                  }
                }
                 style = {{ width: '100%' }} 
                 />
        
            </View>
            </View>
      );
    }
  }