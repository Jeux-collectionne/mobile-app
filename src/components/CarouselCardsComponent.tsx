import React from 'react'
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native'
// import Carousel from 'react-native-snap-carousel'
import CarouselCardComponent, { SLIDER_WIDTH, CARD_WIDTH } from './CarouselCardComponent';
import dataEventsTest from '../dataTests/dataEventsTest';
import Carousel from 'react-native-reanimated-carousel';
// import Crowfunding from '../interfaces/Crowfunding';
import BoardGameEvent from '../interfaces/BoardGameEvent';

// Composant "carroussel", pour faire défiler une liste d'évènements, crowfundings... (depuis 'CarouselElementComponent')

// export default function CarouselCardsComponent(carouselCardItem: BoardGameEvent[]) {
export default function CarouselCardsComponent() {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  let boardGameEventTable: BoardGameEvent[] = [];

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={height/5}
                autoPlay={true}
                // autoPlay={false}
                // Passer une carouselCardItem générique ici pour appeler le composant dans HomeScreen
                // data={carouselCardItem}
                /* Fonctionne avec CarouselCardsComponent(props: any)
                data={boardGameEventTable} 
                et dans HomeScreen : <CarouselCardsComponent boardGameEventTable={dataEventsTest} /> 
                SI FONCTIONNE PAS AVEC UNE VARIABLE : faire 3 compo différents, avec les variables en dur */
                data={dataEventsTest}
                scrollAnimationDuration={2000}
                onSnapToItem={(index: any) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'justify', fontSize: 100 }}>
                            {index}
                            <CarouselCardComponent  />
                        </Text>
                    </View>
                )}
            />
        </View>
    );
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

  
  // const goToDetailElement = () => {
  //   carouselCardItem.navigation.navigate('Detail');  // Mettre en place la navigation vers un un lien (évènement, crowfunding...)
  // };
  // Gérer les chemins de navigation pour les 3 éléments
  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}> <CarouselElementComponent /> </Text>

  //     <TouchableOpacity onPress={() => goToDetailElement()} style={styles.button}>
  //       {/* Remplacer le bouton par l'encart de l'event */}
  //       <Text>View <CarouselElementComponent /> </Text>
  //     </TouchableOpacity>
  //   </View>
  // )

//   const isCarousel = React.useRef(null)

//   return (
//     <View>
//       <Carousel
//         // layout="tinder"
//         // layoutCardOffset={9}
//         ref={isCarousel}
//         data={dataEventsTest}
//         renderItem={CarouselCardComponent}
//         sliderWidth={SLIDER_WIDTH}
//         itemWidth={CARD_WIDTH}
//         // inactiveSlideShift={0}
//         // useScrollView={true}
//       />
//     </View>
//   )