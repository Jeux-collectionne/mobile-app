import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
// import SafeAreaScreen from '../../screens/SafeAreaScreen/SafeAreaScreen';
// import logo from './assets/logo.png';

export default function HomeScreen(props: any) {

  const PlaceholderImage = require('../../../assets/logo.png');

  return (
    <View style={styles.container}>
      {/* <SafeAreaScreen /> */}
      {/* <Text>HomeScreen</Text> */}
      <View style={styles.container}>
        <Text style={styles.title}>Events</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Tendances</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Crowfundings</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#F85252',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      fontSize: 50,
      color: 'white',
  },
  button: {
      backgroundColor: 'white',
      color: '#F85252',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 40,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  imageImage: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imageBackgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
