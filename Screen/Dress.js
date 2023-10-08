import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';

const productList = [
  { id: '1', name: '$29.99', description: 'Abigel Ruched Mini Dress - Jade', image: require('../assets/image/Dress1.png') },
  { id: '2', name: '$29.99', description: 'Leilah Shirt Dress - Leopard',image: require('../assets/image/Dress2.png') },
  { id: '3', name: '$29.99', description: 'Living My Best Life Dress',image: require('../assets/image/Dress3.png') },
  { id: '4', name: '$34.99', description: 'The Cindy Snakeskin Blazer',image: require('../assets/image/Dress4.png') },
  { id: '5', name: '$49.99', description: 'I Dont Know',image: require('../assets/image/Dress5.png') },
  { id: '6', name: '$100.00', description: 'Still Dont Know The Name',image: require('../assets/image/Dress6.png') },
];

const Dress = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  productItem: {
    width: 200, 
    height: 250,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    backgroundColor:'white',

  },
  productImage: {
    width: 150, 
    height: 200,
    resizeMode: 'cover', 
    marginTop:20,
    
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight:80,
    marginTop:10,
  },
  productDescription: {
    marginTop: 6,
    color: 'gray',
  },
});

export default Dress;
