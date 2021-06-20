import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableHighlight } from "react-native";
import SearchBar from "../../components/search-bar";
import axios from 'axios';
import { Link } from "react-router-native";

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

  return (
    <>
      <View>
        <Text style={styles.headline}>Pixabay Search</Text>
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
                user: `${image.user}`,
                tags: `${image.tags}`
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  },
  item: {
    width: '50%'
  },
   headline: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    width: '100%',
    textAlign: 'center'
  }
});

export default ImageSearch;