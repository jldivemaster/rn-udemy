import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {

    return (
      <View>
        <Text style={styles.textStyle}>Components Screen</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default ComponentsScreen;
