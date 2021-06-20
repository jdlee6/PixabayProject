import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableHighlight } from "react-native";
import SearchBar from "../../components/search-bar";
import axios from 'axios';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%' // is 50% of container width
  }
})

const ImageSearch = () => {
  const [text, setText] = useState('');
  const [displayImages, setDisplayImages] = useState('');
  const [imageObjects, setImageObjects] = useState([]);

  const handleChange = (text) => {
    setText(text)
  };

  const handleSubmit = async () => {
    const result = await axios.get(`https://pixabay.com/api/?key=22154655-2ce07437c0a2d6e3e59d94219&q=${text}s&image_type=photo`);
    setImageObjects(result.data.hits);
    setDisplayImages(true);
  };

  console.log(imageObjects);


  return (
    <>
      <View>
        <Text>Pixabay Search</Text>
        <SearchBar text={text} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </View> 
      <View style={styles.container}>
        {displayImages ? (
          imageObjects.map(image => (
            <View style={styles.item}>
            <Link to={{
              pathname: `/image/${image.id}`,
              state: {
                imageURL: `${image.largeImageURL}`,
                user: `${image.user}`
              }
            }}>
            <Image source = {{uri: image.previewURL}}
              style = {{ width: 200, height: 200 }}
            />
            </Link>
            </View>
          )
        )) : null}
      </View>
    </>
  );
};

export default ImageSearch;