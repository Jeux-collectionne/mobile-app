import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CarouselCrowfundingsCardsComponent from '../../components/CarouselCrowfundingsCardsComponent';
import CarouselEventsCardsComponent from '../../components/CarouselEventsCardsComponent';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Events</Text>
        <CarouselEventsCardsComponent />
        {/* passer le set de data en param du composant appelé  => voir comment ça fonctionne */}
        {/* <CarouselCardsComponent boardGameEventTable ={dataEventsTest} /> */}
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Tendances</Text>
        <CarouselEventsCardsComponent />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Crowfundings</Text>
        <CarouselCrowfundingsCardsComponent />
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
