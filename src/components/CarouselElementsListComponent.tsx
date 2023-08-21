import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import BoardGameEvent from '../interfaces/BoardGameEvent';

// Liste des éléments composant le carroussel d'évènements, crowfunding...

export default function CarouselElementsListComponent() {

  const [boardGameEventvent, setBoardGameEvent] = useState<BoardGameEvent[]>([
      { id: 1, name: 'Hammer Time 2023', date: 2023-9-23, place: 'Maison des Enfants, 796 Av. de Dunkerque 59160 Lille, Nord', type: '', description: '' },
  ]);

  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  )
}