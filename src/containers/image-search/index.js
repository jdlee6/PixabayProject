import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableHighlight } from "react-native";
import SearchBar from "../../components/search-bar";
import axios from 'axios';
import { Link } from "react-router-native";
import envs from "../../config/env";

const ImageSearch = () => {
  const [text, setText] = useState('');
  const [displayImages, setDisplayImages] = useState(false);
  const [imageObjects, setImageObjects] = useState([]);
  const { API_KEY, PIXABAY_URL } = envs;

  const handleChange = (text) => {
    setText(text)
  };

  const handleSubmit = async () => {
    const url = `${PIXABAY_URL}${API_KEY}&q=${text}s&image_type=photo`
    const result = await axios.get(url);
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
            <View key={image.id} style={styles.item}>
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
