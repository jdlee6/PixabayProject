import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

const ImageDetail = (props) => {
  const { imageURL, user, tags } = props.location.state;

  return (
    <>
      <Link to="/">
        <Text style={styles.button}>{'< '}Back</Text>
      </Link>
      <View>
        <Image source = {{uri: imageURL}} style = {{ width: 400, height: 400 }} />
        <Text style={styles.text}>Author: {user}</Text>
        <Text style={styles.text}>Tags: {tags}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    width: 120,
    fontSize: 20
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default ImageDetail;