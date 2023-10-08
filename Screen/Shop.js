import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput,Image,TouchableOpacity,FlatList} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = () => {
  const [categories, newcategories] = useState([
    {
        name: "CLOTHING",
        image: require('../assets/image/1.png'),
    },
    {
        name: "ACESSORIES",
        image: require('../assets/image/2.png'),
    },
    {
        name: "SHOES",
        image: require('../assets/image/3.png'),
    },
    {
        name: "WATCHES",
        image: require('../assets/image/4.png'),
    },
    {
        name: "BAGS",
        image: require('../assets/image/5.png'),
    },
    {
        name: "DRESSES",
        image: require('../assets/image/6.png'),
    },
  ]);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
            <TouchableOpacity
                 key={item.name}
                style={styles.newcategory}
            >
            <Image
                style={styles.newcategoryImage}
                source={item.image}
            />
            <Text style={styles.newcategoryText}>{item.name}</Text>
            </TouchableOpacity>
        )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  newcategory: {
    width: 400,
    height: 130,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center',
  },
  newcategoryImage: {
    width: 350,
    height: 100, 
    borderRadius: 20,
  },
  newcategoryText: {
    width:350,
    height:100,
    position:'absolute',
    fontSize: 18,
    borderRadius: 20,
    paddingTop:35,
    fontWeight: 'bold',
    color:'white',
    textAlign: 'center', 
    top: '50%',
    left: '50%', 
    transform: [{ translateX: -175 }, { translateY: -50 }],
    backgroundColor: 'rgba(139, 69, 19, 0.5)',
},

});

export default HomeScreen;
