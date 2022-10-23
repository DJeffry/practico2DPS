import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

class Video extends Component {
  render() {
    return (
      <View>
        <YoutubePlayer height={250} play={false} videoId={idvid} />
      </View>
    );
  }
}
export default Video;
