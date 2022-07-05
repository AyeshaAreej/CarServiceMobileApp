
import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import COLORS from "../components/colors";



function WelcomeScreen({navigation}) {


  return (
<View style={{backgroundColor:"#fff"}}>
<View style={styles.logoContainer} >
    <ImageBackground  
     style={styles.logo}
     source={require('../assets/logo1.2.png')}
     resizeMode="cover" >
    </ImageBackground>
   
</View>

{/* Bottom View */}
  <View style={{paddingTop:180}}>
   <View style={styles.bottomView}>
    <Text style={{color:'white', fontSize:30, padding:10, fontWeight:'bold'}}>Welcome</Text>
    <Text style={{padding:7,color:'white', fontSize:19,}}>
    The MECHANOX Application  aims to get people in touch with car repairing service providers when their is an issue in their vehicle.
    </Text>


    
    <View style={styles.container}>
      <View style={styles.button}>
      <Button 
      onPress={()=>navigation.navigate('LoginScreen')}
       title="SignIn"
        color={COLORS.grey}
      /> 
      </View>
     
      <View style={styles.button} >
      <Button
      
       onPress={()=>navigation.navigate('SignUp')} 
      title="SignUp"
      color={COLORS.grey}
        
      />
      </View>
    </View>
     
</View>
    </View>
    

</View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 200,
  
  },
  logoContainer: {
    top:110,
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent:"center",
    
  },


  bottomView:{
  backgroundColor : COLORS.primary,
  paddingTop:"10%",
  paddingLeft:8,
  paddingBottom:10,
  width:'100%',
  height:410,
  borderTopStartRadius:60,
  borderTopEndRadius:60, 
 },


 
   
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:25,
    borderRadius: 100,
    margin:12,

  },
  button: {
  
    width: '45%',
    height: 40,
    borderRadius:70,
  }

});

export default WelcomeScreen;
