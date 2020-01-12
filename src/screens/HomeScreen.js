import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>I'm in, bitches!</Text>
      <Button title="Go to Components"
        onPress={() => props.navigation.navigate('Components')} />
      <Button title="Go to List Screen"
        onPress={() => props.navigation.navigate('List')} />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
