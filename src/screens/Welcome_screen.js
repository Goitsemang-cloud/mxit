/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Welcome_screen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.firstCicle}/>
        <View style={styles.secondCicle}/>
        <View style={styles.titleContainer}>
            <Image source={require('../../assets/img/Logo.png')} style={styles.logo}/>
            <Text style={styles.title}>
                Welcome to Mxit
            </Text>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.title}>
                Everything you can imagine,     And then some.
            </Text>
            <Text style={styles.description}>
                From chatrooms, games, and shoppin to movie clips, Music and sport -
                this is the place to discover and share stuff.
            </Text>
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                Sign Up
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#041313',
        height:windowHeight,
        justifyContent: 'center',
        alignItems:'center',
    },
    firstCicle:{
        backgroundColor:'#59410D',
        height:457,
        width:457,
        borderRadius: 400,
        position:'absolute',
        left:-windowWidth + 160,
        top: '22%',
    },
    secondCicle:{
        backgroundColor:'#756C07',
        height:357,
        width:368,
        borderRadius: 400,
        position:'absolute',
        top: '19%',
        right:-10,
    },
    titleContainer:{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        top:'9%',
        left:'5%',
    },
    logo:{
        width:89,
        height:84,
    },
    title:{
        color:'white',
        fontSize:24,
        paddingHorizontal:15,
    },
    descriptionContainer:{
        position:'absolute',
        top:'28%',
    },
    description:{
        color:'white',
        fontSize:21,
        paddingHorizontal:15,
        paddingTop:25,
    },
    button:{
        position:'absolute',
        bottom:'15%',
        backgroundColor:'#99C24D',
        justifyContent:'center',
        alignItems:'center',
        width:137,
        height:48,
        borderRadius:12,
    },
    buttonText:{
        color:'#000000',
    },
});

export default Welcome_screen;