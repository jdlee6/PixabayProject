import React from 'react';
import { View, Text, Image } from 'react-native';
import { Link } from "react-router-native";

const ImageDetail = (props) => {
  const { imageURL, user } = props.location.state;

  return (
    <>
      <Link to="/">
        <Text>Back</Text>
      </Link>
      <View>
        <Text>{user}</Text>
        <Image source = {{uri: imageURL}} style = {{ width: 400, height: 400 }} />
      </View>
    </>
  )
}

export default ImageDetail;