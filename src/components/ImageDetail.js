import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = props => {
  return (
    <View>
      <Image source={props.imageSource} style={styles.img}/>
      <Text>detail: {props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 150
  }
});

export default ImageDetail;
