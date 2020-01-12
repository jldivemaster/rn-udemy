import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title='forest' imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail title='beach' imageSource={require('../../assets/beach.jpg')}/>
      <ImageDetail title='mountain' imageSource={require('../../assets/mountain.jpg')}/>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default ImageScreen;
