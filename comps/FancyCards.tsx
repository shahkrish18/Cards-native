import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    function openWeb(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headText}>Beautiful Places</Text>
      <View style={[styles.card,styles.cardElev]}>
        <Image source={{
            uri:"https://imgcld.yatra.com/ytimages/image/upload/v1517482972/AdvNation/ANN_TRP676/devkund-waterfall-trek_1491808873_lvfvVS.jpg"
        }} style={styles.cardImg}/>
        <View style={styles.cardBody}>
            <Text style={styles.title}>Devkund Waterfall, Raigad</Text>
            <Text style={styles.cardDesc}>Devkund Waterfall is a waterfall located near Bhira, in Raigad district, Maharastra, India. It is a 'plunge' waterfall pouring massive amounts of water on the rocky surface underneath. It is a popular spot for one day picnics.</Text>
        </View>
      </View>
      <View style={[styles.card,styles.cardElev]}>
        <Image source={{
            uri:"https://static.toiimg.com/thumb/msid-55310626,width-748,height-499,resizemode=4,imgsize-175052/.jpg"
        }} style={styles.cardImg}/>
        <View style={styles.cardBody} >
            <Text style={styles.title} >Paradise of India - GOA</Text>
            <Text style={styles.cardDesc}>The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.</Text>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={()=>openWeb('https://en.wikipedia.org/wiki/Goa')} >
                <Text style={styles.socLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWeb('https://en.wikipedia.org/wiki/Goa')} >
                <Text style={styles.socLinks} >Follow</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    card:{
        width:400,
        height:440,
        borderRadius:5,
        marginHorizontal:8,
        marginVertical:8,
        borderColor:'black',
        borderWidth:2
    },
    cardElev:{
        backgroundColor:'grey',
        shadowColor:'grey',
        elevation:5,
        shadowOffset:{
            width:2,
            height:2
        }
    },
    cardBody:{
        margin:3,
        padding:3
    },
    cardImg:{
        height:220,
        borderColor:'black',
        borderWidth:2,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    cardDesc:{
        fontSize:20,
        color:"white",
        marginTop:9
    },
    title:{
        fontSize:25,
        color:'white',
        textDecorationLine:'underline',
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    socLinks:{
        backgroundColor:"lightblue",
        color:'black',
        fontSize:15,
        marginTop:7,
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:6,
        borderColor:'blue',
        borderWidth:1
    }
})