package com.slionskaraoke;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.wenkesj.voice.VoicePackage;
import com.prayagad.speech.utils.RNGoogleSpeechPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.ocetnik.timer.BackgroundTimerPackage;
import rnsoundplayer.RNSoundPlayerPackage;
import fm.indiecast.rnaudiostreamer.RNAudioStreamerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.audioStreaming.ReactNativeAudioStreamingPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {

      return Arrays.<ReactPackage>asList(
          new ReactNativeAudioStreamingPackage(),
          new MainReactPackage(),
            new VoicePackage(),
            new RNGoogleSpeechPackage(),
            new RNSoundPackage(),
            new BackgroundTimerPackage(),
            new RNSoundPlayerPackage(),
            new RNAudioStreamerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
