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
  TextInput,
} from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUP = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.firstCicle}/>
        <View style={styles.secondCicle}/>
        <View style={styles.titleContainer}>
            <Image source={require('../../assets/img/Logo.png')} style={styles.logo}/>
            <Text style={styles.title}>
                Sign Up
            </Text>
        </View>
        <View style={styles.InputContainer}>
            <Text style={styles.title}>
                Enter Number
            </Text>
            <View style={styles.textcontainer}>
                <Icon name="phone" color="black" size={24} style={styles.Icon}/>
                <TextInput placeholder="+27 67 067 0856" style={styles.textinput}/>
            </View>
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                Continue
            </Text>
            <Icon name="arrowright" color="black" size={24} style={styles.Icon}/>
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
    InputContainer:{
        backgroundColor:'#373839',
        height:303,
        width:329,
        borderRadius:42,
        justifyContent:'center',
        alignItems:'center',
    },
    textinput:{
        paddingHorizontal:12,
        color:'black',
    },
    textcontainer:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#C4C4C4',
        width:220,
        borderRadius:5,
        marginTop:15,
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
    button:{
        display:'flex',
        flexDirection:'row',
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
        fontSize:16,
    },
    Icon:{
        paddingVertical:'5%',
        paddingLeft:'5%',
    }
});

export default SignUP;
