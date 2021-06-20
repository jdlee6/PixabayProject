import React from 'react';
import {View, Text} from 'react-native';
import { BackButton } from "react-router-native";


const ImageDetail = (props) => {
  return (
    <View>
      <BackButton />
      <Text>Hello detail</Text>
    </View>
  )
}

export default ImageDetail;