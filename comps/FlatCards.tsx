import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headText} >Cards</Text>
      <View style={styles.container}>
        <View style={[styles.cardOne, styles.card]}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Red</Text>
        </View>
        <View style={[styles.cardTwo, styles.card]}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Cyan</Text>
        </View>
        <View style={[styles.cardThree, styles.card]}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Yellow</Text>
        </View>
        <View style={[styles.cardThree, styles.card]}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Yellow</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding:5
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '23%',
    margin: 5,
    borderRadius:5,
    borderColor:'white',
    borderWidth:2,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'cyan',
  },
  cardThree: {
    backgroundColor: 'yellow',
  },
  headText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 5
  }
})