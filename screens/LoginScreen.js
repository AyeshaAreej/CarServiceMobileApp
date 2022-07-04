import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
// import { Company_Home, User_Home, Admin_Home,Vendor_Home } from "../constants";

// import { StatusBar } from "react-native-web";
import COLORS, { colors } from "../components/colors";
import { Formik } from 'formik';
import * as yup from 'yup';
// Social buttons
import { FacebookSocialButton } from "react-native-social-buttons";
import {GoogleSocialButton } from "react-native-social-buttons";





function LoginScreen() {

  // State Variables
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [signup, setSignup] =useState('false')

  // function handleLogin(values){

  //   const role='user'
  //   if(role=='user'){
  //     navigation.navigate(User_Home)
  //   }
  //   else if (role=='company'){
  //     navigation.navigate(Company_Home)
  //   }
  //   else if (role=='admin'){
  //     navigation.navigate(Admin_Home)
     
  //   }

  //   else if(role=='vendor'){
  //    navigation.navigate(Vendor_Home)
  //   }
  //   else{
  //     console.log('no role')
  //   }
    
   
  // }
  return (
    
   <View style={{flex:1, backgroundColor:COLORS.primary}} >
   <View style={styles.topView}>
   <ImageBackground
   style={styles.logo}
     source={require('../assets/logo.png')}
     resizeMode="cover" >
    </ImageBackground>
     <Text style={{color:COLORS.grey, marginLeft:152,fontSize:30,fontWeight:'bold',}}>Sign In</Text>
    
 </View>

      {/* Form Inputs View */}
   <View style={styles.center}>
          <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={
        (values) => {
          console.log(values)
          // handleLogin(values)
          }}
          validationSchema={yup.object().shape({
            email: yup
            .string()
            .email()
            .required('Email is required.'),           
          password: yup
            .string()
            .min(5, 'More than 5 characters are needed.')
            .max(11, 'More than 12 characters are allowed.')
            .required(),
          })}

    
    >
      {({ handleChange, handleSubmit, values,errors,touched, setFieldTouched }) => (
        <>
           <TextInput
             style={styles.input}
             name="email"
             placeholder='Enter Email'
             placeholderTextColor="white" 
             onChangeText={handleChange('email')}
             onBlur={()=>setFieldTouched('email')}
             value={values.email}
             keyboardType="email-address"
            
           />
            {touched.email && errors.email &&
              <Text style={{ marginLeft:10,fontSize: 18, color: 'red'}}>{errors.email}</Text>
            }

           <TextInput
             style={styles.input}
             name="password"
            placeholder="Enter Password"
            placeholderTextColor="white" 
             onChangeText={handleChange('password')}
             onBlur={() => setFieldTouched('password')}
            value={values.password}
            secureTextEntry />
            {touched.password && errors.password &&
              <Text style={{ marginLeft:10,fontSize: 18, color: 'red' }}>{errors.password}</Text>
            }

           <Text style={styles.center}>Forgot Password?</Text>
            {/*SignIn Button  */}
          <View style={styles.center}>
          <View style={styles.button}>
           <Button  onPress={handleSubmit} 
           title="Sign In"
           color={COLORS.grey}
           /> 
          </View>
          </View>
       
        </>
      )}
    </Formik>


     </View>

     <View style={styles.center}>
        <Text style={{fontWeight: "bold", color:"white"}}>OR</Text>

          {/* Social buttons */}
    
          
              
    
              <View  style={styles.rightTag}>
              <GoogleSocialButton onPress={() => {}} buttonViewStyle={{width:'74%',backgroundColor:'#F5F5DC', }} logoStyle={{marginLeft:10}}textStyle={{color:COLORS.dark,fontSize:18}} />
              <FacebookSocialButton onPress={() => {}} buttonViewStyle={{width:'70%'}} logoStyle={{marginLeft:10}}textStyle={{color:COLORS.white,fontSize:18}} />
              </View>
  
             

    </View>
    
 </View>
  );
}

const styles = StyleSheet.create({
  
  topView:{
    backgroundColor :COLORS.primary,
    paddingTop:"18%",
    paddingLeft:8,
    width:'100%',
    height:220,
    
   },

 logo: {
  width: 200,
  height: 150,
  marginLeft:100,
},
   
   input:{
   borderBottomColor :COLORS.grey,
   borderBottomWidth:2,
   paddingTop:50,
   width:260,
   fontSize:20,
 
   },

   button:{
    backgroundColor: COLORS.grey,
    width: '100%',
    height: 35,
    borderRadius:20,
    
    

   },
   
center:{
  paddingTop:25,justifyContent:'center',
   alignItems:'center',color:'white'
},
  rightTag:{
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

});

export default LoginScreen;