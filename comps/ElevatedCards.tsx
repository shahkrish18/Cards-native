import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={styles.cards}>
                    <Text style={{ fontSize: 20, fontWeight:'500',color:'black' }}>Tap</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={{ fontSize: 20, fontWeight:'500',color:'black' }}>Me</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={{ fontSize: 20, fontWeight:'500',color:'black' }}>To</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={{ fontSize: 20, fontWeight:'500',color:'black' }}>Scroll</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    container: {
        padding: 5
    },
    cards: {
        width: 130,
        height: 130,
        backgroundColor: "#12B0E8",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        borderColor: 'white',
        borderWidth: 2,
        borderRadius:15,
        shadowColor:"black"
    }
})