import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import BoardGameEvent from '../interfaces/BoardGameEvent';

// Liste des éléments composant le carroussel d'évènements, crowfunding...

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const CARD_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
//const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function CarouselCardComponent(item: any, index: any) {

  // Utiliser la constante pour récupérer les évènements depuis la base de données
  // const [boardGameEventvent, setBoardGameEvent] = useState<BoardGameEvent[]>();

  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.flyer }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.name}</Text>
      <Text style={styles.body}>{item.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: CARD_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: CARD_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  }
})

/* Sources :
  - https://blog.logrocket.com/implement-react-native-snap-carousel/#creating-carousel
  - https://jakecyr.medium.com/create-your-first-react-native-app-a3aa989a7e4e
  */