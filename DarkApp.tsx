import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './comps/FlatCards'
import ElevatedCards from './comps/ElevatedCards'
import FancyCards from './comps/FancyCards'


export default function DarkApp() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{textAlign:'center',fontSize:35}} >DarkApp</Text>
          <FlatCards />
          <ElevatedCards />
          <FancyCards/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})