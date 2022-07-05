import React from "react";
import {useState,useEffect}  from 'react'
import { ImageBackground,StyleSheet, View, Image, Text } from "react-native";
import {  User_Home } from "../constants";
import COLORS from "../components/colors";
import WelcomeScreen from "./WelcomeScreen";



function SplashScreen({navigation}) {


useEffect(()=>{
 setTimeout(()=>{
  console.log('alert');

 

 navigation.navigate('WelcomeScreen')

 },5000);
},[]);


  return (
    
   <View style={styles.container} >
  
   <ImageBackground
   style={styles.logo}
     source={require('../assets/logo.png')}
     resizeMode="cover" >
    </ImageBackground>
  

    
  

    
 </View>
  );
}

const styles = StyleSheet.create({
  
 container:{
    flex:1, 
    backgroundColor :COLORS.primary,
    width:'100%',
    height:'100%',
    justifyContent:'center',
 

    
   },
   tagline:{
    position: "absolute",
    paddingTop:"40%",
   margin:31,
    fontSize:20,
    fontWeight:"bold",
    // textTransform:"uppercase",
    color:COLORS.white,
   },
 logo: {
  width: 220,
  height: 220,
  marginLeft:'22%',
},

 

});

export default SplashScreen;