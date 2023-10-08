import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity,FlatList } from 'react-native';
import product1Image from '../assets/image/Dress5.png';
import product2Image from '../assets/image/Dress4.png';

const productList = [
  { id: '1', name: 'Sản phẩm 1', colors: ['Đỏ', 'Xanh'], sizes: ['S', 'M'], image: product1Image },
  { id: '2', name: 'Sản phẩm 2', colors: ['Xanh', 'Vàng'], sizes: ['M', 'L'], image: product2Image },
  // Thêm các sản phẩm khác ở đây
];

const ProductItem = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const selectColor = (color) => {
    setSelectedColor(color);
  };

  const selectSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <View style={styles.productItem}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.customizationContainer}>
          <Text style={styles.customizationLabel}>Color:</Text>
          {product.colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorButton,
                selectedColor === color && styles.selectedColorButton,
              ]}
              onPress={() => selectColor(color)}
            >
              <Text style={styles.colorButtonText}>{color}</Text>
              {selectedColor === color && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.customizationContainer}>
          <Text style={styles.customizationLabel}>Size:</Text>
          {product.sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.selectedSizeButton,
              ]}
              onPress={() => selectSize(size)}
            >
              <Text style={styles.sizeButtonText}>{size}</Text>
              {selectedSize === size }
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Image source={product.image} style={styles.productImage} />
    </View>
  );
};
const ShoppingBag = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem product={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  shoppingBagImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  customizationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  customizationLabel: {
    marginRight: 4,
  },
  colorButton: {
    backgroundColor: 'white',
    borderRadius: 0,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
    selectedColorButton: {
        backgroundColor: 'rgba(255, 255, 255, 0)', // Màu được chọn
      },
      colorButtonText: {
        backgroundColor:'red',
      },
      sizeButton: {
        backgroundColor: 'lightgray',
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginRight: 8,
      },
      selectedSizeButton: {
        backgroundColor: 'black', // Kích cỡ được chọn
      },
      sizeButtonText: {
        color: 'white',
      },
      checkmark: {
        color: 'black',
        marginLeft: 4,
      },
      productImage: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
      },
    });
    
    export default ShoppingBag;