import React from 'react';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';

const SearchBar = (props) =>{
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search"         
          onChangeText={props.handleChange}
          value={props.text}
        />
        <Icon name="ios-people" />
      </Item>
      <Button transparent type="submit" onPress={props.handleSubmit}>
        <Text>Search</Text>
      </Button>
    </Header>
  );
}

export default SearchBar;