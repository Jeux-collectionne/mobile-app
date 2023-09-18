import React from 'react'
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native'
import dataEventsTest from '../dataTests/dataEventsTest';
import Carousel from 'react-native-reanimated-carousel';
import BoardGameEvent from '../interfaces/BoardGameEvent';

export default function CarouselEventsCardsComponent() {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  // let boardGameEventTable: BoardGameEvent[] = [];

    return (
      <View style={{ flex: 1 }}>
        <Carousel
          loop
          width={width}
          height={height/5}
          autoPlay={true}
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
//       // layout="tinder"
//       // layoutCardOffset={9}
//       ref={isCarousel}
//       data={dataEventsTest}
//       renderItem={CarouselCardComponent}
//       sliderWidth={SLIDER_WIDTH}
//       itemWidth={CARD_WIDTH}
//       // inactiveSlideShift={0}
//       // useScrollView={true}
//       />
//     </View>
//   )