import { StyleSheet, Text, View , Image,TextInput , Button, TouchableOpacity} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },

  ScreenTitleStyle:{
    textAlign: 'center',
  },

  BlueScreenHeaderStyle: {
    backgroundColor: '#3C3BAA'
  },

  GreenScreenHeaderStyle: {
    backgroundColor: '#0EA80E'
  },

  ScreenHeaderTitleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize:26,
    fontFamily: 'notoserif'
  },

  PerformScreenHeaderStyle: {
    backgroundColor: '#C53A31'
  },

  MicImageStyle: {


    width: 70,
    height: 70 ,// TODO: make it as a percentage of screen
    alignItems: 'center',
    justifyContent: 'center',
    margin:10

  },
  
  TextStyleTitleSLions:	{
	  fontFamily: 'serif',
    fontSize: 70,

  },
  TextStyleTitleKaraoke:	{
	  fontSize: 30,
  },

  UsernameTextInput: {
    height: 70, 
    width:300,
    backgroundColor: '#BFC9CA',  
    alignSelf: 'center',
    marginTop:40,
    marginBottom:15
  },

  PasswordTextInput: {
    height: 70, 
    width:300,
    backgroundColor: '#BFC9CA',  
    alignSelf: 'center',
    margin:10
  },

  LoginButton: {
    height: 100,
    alignSelf: 'center',
    margin:10 
  },

  NewSignUp: {
    alignSelf: 'center',
  },

  DropDownStyle: {
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
  },

  DropDownTextStyle: {    
    fontSize: 20,
    backgroundColor: '#BFC9CA',
    height: 50,
    width:320,
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'center',
    textAlign: 'center'
  },

  DropDownDropDownStyle: {    
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'center',
  },

  DropDownDropDownTextStyle: {    
    fontSize: 20,
    width:320,
    backgroundColor: '#E5E7E9',
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'center',
    textAlign: 'center'
  },

  PickMusicButton: {
    height: 100,
    alignSelf: 'center',
    margin:30 
  },

  TextStyleProfileHeadings:	{
    fontSize: 25,
    color: 'grey',
    margin:20,
    fontFamily:'notoserif'
},

GenreImageStyle: {
        width: 150,
        height: 150 ,// TODO: make it as a percentage of screen
        alignItems: 'center',
        justifyContent: 'center',
        right:10,
        margin:10,
    
      },

      TextStylePickSong:	{
        fontSize: 20,
        color: 'grey',
        margin:20,
        fontFamily:'notoserif'
    },
    TextStyleSongNames:	{
        fontFamily: 'notoserif',
          fontSize: 25,
          width:350,
          height:50,
          backgroundColor: '#BFC9CA',
          justifyContent: 'center',
          alignSelf:'center',
          alignItems: 'center',
          textAlign: 'center',
      
        },

        TextStyleTochableOpacityPickSongs:{
            margin:5,

        },
    
    StyleSoundtrack:{
        fontFamily: 'notoserif',
        fontSize: 20,
    },

    StyleSongName: {
        fontFamily: 'notoserif',
        fontSize: 50,
        //fontWeight: 'bold'
    },

    StyleLearnSongIcon: {
        width: 100,
        height: 100 ,// TODO: make it as a percentage of screen
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    
      },

      TextStyleSongCurrentLyrics:	{
        fontFamily: 'notoserif',
          fontSize: 25,
          width:350,
          backgroundColor: '#BFC9CA',
          justifyContent: 'center',
          alignSelf:'center',
          alignItems: 'center',
          textAlign: 'center',
          textShadowColor:'#404040',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 10
      
        },

        TextStyleSongNextLyrics:{
            fontFamily: 'notoserif',
            fontSize: 20,
            width:350,
            backgroundColor: '#BFC9CA',
            justifyContent: 'center',
            alignSelf:'center',
            alignItems: 'center',
            textAlign: 'center',
        },
    
  PlayBackIcons: {
        width: 50,
        height: 50 ,// TODO: make it as a percentage of screen
        alignItems: 'center',
        justifyContent: 'center',
        margin:5
    
      },

      FeedbackImageStyle: {
        width: 120,
        height: 120 ,// TODO: make it as a percentage of screen
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
      },

      FeedBackIcons: {
        width: 50,
        height: 50 ,// TODO: make it as a percentage of screen
        alignItems: 'center',
        margin:5
    
      },

      TextStyleReviewLyrics:	{
        fontFamily: 'notoserif',
          fontSize: 25,
          width:350,
          backgroundColor: '#BFC9CA',
          justifyContent: 'center',
          alignSelf:'center',
          alignItems: 'center',
          textAlign: 'center',
          textShadowColor:'#404040',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 10
      
        },

        CorrectReviewLyrics:{
            fontFamily: 'notoserif',
            fontSize: 20,
            backgroundColor: '#BFC9CA',
            
        },

        IncorrectReviewLyrics:{
            fontFamily: 'notoserif',
            fontSize: 20,
            backgroundColor: '#BFC9CA',
            color:'red'
        },
        welcome: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
        },
        action: {
          textAlign: 'center',
          color: '#0000FF',
          marginVertical: 5,
          fontWeight: 'bold',
        },
        instructions: {
          textAlign: 'center',
          color: '#333333',
          marginBottom: 5,
        },
        stat: {
          textAlign: 'center',
          color: '#B0171F',
          
        },
        button: {
          width: 30,
          height: 30,
        },
});