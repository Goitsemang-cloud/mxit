import React, { useCallback, useRef, useMemo } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
  } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
  import  Icon  from 'react-native-vector-icons/AntDesign';
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


const Profile =()=> {
    const refRBSheet = useRef();
  return (
    <SafeAreaView style={styles.container}>
    {/* background ciricles  */}
    <View style={styles.firstCicle}/>
    {/* background ciricles  */}
    <View style={styles.secondCicle}/>
     {/* title container  */}
    <View style={styles.titleContainer}>
        <Image source={require('../../assets/img/Logo.png')} style={styles.logo}/>
        <Text style={styles.title}>
            Sign Up
        </Text>
    </View>
    {/* input container */}
    <View style={{backgroundColor:'#373839', width:windowWidth-60,height:325, borderRadius:42}}>
        <Text style={[styles.title,{marginTop:20,marginHorizontal:5}]}>
            Profile
        </Text>
        <View style={styles.profileContainer}>
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Image source={require('../../assets/img/Pr.png')} style={{width:240,height:245}}/>
                <Icon name='pluscircleo'  color='white' size={25} style={{alignSelf:'center', position:'relative',top:-60,left:70, backgroundColor:'gray',borderRadius:50,padding:10}}/>
            </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'#373839',alignSelf:'center',alignItems:'center',width:windowWidth-20,height:325,padding:10, borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <Text style={{color:'white'}}>Display Name</Text>
                <View style={{flexDirection:'row', width:windowWidth-70,borderWidth: 2,borderColor:'#59410D',height:50,paddingVertical:10, marginTop:50, borderRadius:15,paddingLeft:10}}>
                    <Icon name='user'  color='white' size={25}/>
                    <TextInput placeholder='username' placeholderTextColor='white' style={{paddingHorizontal:10}}/>
                </View>
        </View>

        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
            wrapper: {
                backgroundColor: "transparent"
            },
            container:{
                backgroundColor:'#373839',
                width:windowWidth-20,
                alignSelf:'center',
                borderRadius:15,
                paddingLeft:10,
                alignItems:'center',
            },
            draggableIcon: {
                backgroundColor: "white"
            }
            }}
        >
        <View style={{paddingTop:5}}>
            <TouchableOpacity onPress={()=> alert('button pressed')} style={{flexDirection:'row',height:50, justifyContent:'center',alignContent:'center',backgroundColor:'#C4C4C4',width:windowWidth-70, borderRadius:20,paddingVertical:5,marginVertical:5}}>
                <Icon name="camera" size={40}/>
                <Text style={{paddingVertical:10,paddingHorizontal:10}}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('button pressed')} style={{flexDirection:'row',height:50, justifyContent:'center',alignContent:'center',backgroundColor:'#C4C4C4',width:windowWidth-70, borderRadius:20,paddingVertical:5,marginVertical:5}}>
                <Icon name="picture" size={40}/>
                <Text style={{paddingVertical:10,paddingHorizontal:10}}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  refRBSheet.current.close()} style={{flexDirection:'row',height:50, justifyContent:'center',alignContent:'center',backgroundColor:'#99C24D',width:windowWidth-70, borderRadius:20,paddingVertical:5,marginVertical:5}}>
                <Icon name="arrowleft" size={40}/>
                <Text style={{paddingVertical:10,paddingHorizontal:10}}>Cancel</Text>
            </TouchableOpacity>
        </View>
        
      </RBSheet>
    </View>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#041313',
        height:windowHeight,
        justifyContent: 'center',
        alignItems:'center',
    },
    textcontainer:{
        marginTop:25,
        flexDirection:'row',
        justifyContent:'center',
        width:60,
        height:60,
        borderRadius:5,
        
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
    profileContainer:{
        marginTop:5,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default Profile