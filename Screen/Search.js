import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput,Image,TouchableOpacity,FlatList} from "react-native";
import SearchIcon from '../assets/image/IconSearch.png';
const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQueryChange = (text) => {
        setSearchQuery(text);
    
    };
  
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Image source={SearchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBarContainer: {
    width: 300,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FBFBFB",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginHorizontal: 40,
    marginBottom: 10,
    marginTop: 50,
  },
  searchIcon: {
    width: 20, 
    height: 20,
    marginRight: 10,
  },
});

export default Search;
