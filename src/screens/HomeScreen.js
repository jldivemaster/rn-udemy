import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>I'm in, yo!</Text>
      <Button title="Go to Components"
        onPress={() => props.navigation.navigate('Components')} />
      <Button title="Go to List Screen"
        onPress={() => props.navigation.navigate('List')} />
      <Button title="Go to Image Screen"
        onPress={() => props.navigation.navigate('Image')} />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
