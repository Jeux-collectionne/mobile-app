import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import CarouselElementComponent from './CarouselElementsListComponent';

// Composant "carroussel", pour faire défiler une liste d'évènements, crowfundings... (depuis 'CarouselElementComponent')

export default function CarouselComponent(props: any) {
  
  const goToDetailElement = () => {
    props.navigation.navigate('Detail');  // Mettre en place la navigation vers un un lien (évènement, crowfunding...)
  };
  // Gérer les chemins de navigation pour les 3 éléments

  return (
    <View style={styles.container}>
      <Text style={styles.title}> <CarouselElementComponent /> </Text>

      <TouchableOpacity onPress={() => goToDetailElement()} style={styles.button}>
        {/* Remplacer le bouton par l'encart de l'event */}
        <Text>View <CarouselElementComponent /> </Text>
      </TouchableOpacity>
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
});