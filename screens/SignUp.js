import React from "react";
import {useState, useEffect}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import colors from "../components/colors";
import { Formik } from 'formik';
import * as yup from 'yup';
import COLORS from "../components/colors";
// import { User_Home } from "../constants";






function SignUp({navigation}) {

  // State Variables
  const [username, setUsername]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [phone_no, setPhone_no]=useState('')
  const [city, setCity]=useState('')
  const [signup, setSignup] =useState('false')



  

  return (
    
   <ScrollView style={{flex:1,backgroundColor:COLORS.primary}} >
   <View style={styles.topView}>
   <ImageBackground
   style={styles.logo}
     source={require('../assets/logo.png')}
     resizeMode="cover" >
    </ImageBackground>
     <Text style={{color:COLORS.grey,fontSize:25,fontWeight:'bold',marginLeft:152}}>SignUp</Text>
    
 </View>

      {/* Form Inputs View */}
   <View style={{marginTop:20}}>
          <Formik
             initialValues={{ username:'', email: '', password: '', phone_no:'', city:'' }}
             onSubmit={
              (values) => {
            //  console.log(values)
              navigation.navigate('LoginScreen')
          
             }}
            

              validationSchema={yup.object().shape({
            username: yup
            .string()
            .required('Name is required.'),  
            email: yup
            .string()
            .email()
            .required('Email is required.'), 
             password: yup
            .string()
            .min(5, 'More than 5 characters are needed.')
            .max(11, 'More than 12 characters are not allowed.')
            .required(),
            phone_no: yup
            .number()
            // .min(11, '11 or 12 digits are required')
            // .max(12, '11 or 12 digits are required')
            .required('Phone Number is required.'), 
            city : yup
            .string()
            .required('City is required.'),  
          })}
          
           >
      {({  handleChange, handleSubmit, values,errors,touched, setFieldTouched}) => (
        <View style={{ alignItems:"center",justifyContent:'center' }}>
           <TextInput
             style={styles.input}
             name="username"
             placeholder='Enter User Name'
             placeholderTextColor="grey" 
             onChangeText={handleChange('username')}
             onBlur={()=>setFieldTouched('username')}
            value={values.username}
           
           />
           {touched.username && errors.username &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.username}</Text>
            }
              <TextInput
             style={styles.input}
             name="email"
             placeholder='Enter Email'
             placeholderTextColor="grey" 
             onChangeText={handleChange('email')}
             onBlur={()=>setFieldTouched('email')}
            value={values.email}
            keyboardType="email-address"
            
           />
            {touched.email && errors.email &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.email}</Text>
            }


            <TextInput
             style={styles.input}
             name="password"
             placeholder="Enter Password"
              placeholderTextColor="grey" 
             onChangeText={handleChange('password')}
             onBlur={() => setFieldTouched('password')}
            value={values.password}
            secureTextEntry />
            {touched.password && errors.password &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red' }}>{errors.password}</Text>
            }
            <TextInput
             style={styles.input}
             name="phone_no"
             placeholder='Enter Phone Number'
             placeholderTextColor="grey" 
             onChangeText={handleChange('phone_no')}
             onBlur={()=>setFieldTouched('phone_no')}
            value={values.phone_no}
            keyboardType="numeric"
            
           />
            {touched.phone_no && errors.phone_no &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.phone_no}</Text>
            }

            <TextInput
             style={styles.input}
             name="city"
             placeholder="Enter City"
             placeholderTextColor="grey" 
             onChangeText={handleChange('city')}
             onBlur={()=>setFieldTouched('city')}
             value={values.city}
           />
           {touched.city && errors.city &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red' }}>{errors.city}</Text>
            }
         
            {/*SignUn Button  */}
          {/* <View style={styles.container}> */}
          <View style={styles.button}>

           <Button
          //  onPress={()=>navigation.navigate(User_Home)}
           onPress={handleSubmit}
           title="SignUp"
           color={colors.grey}
           /> 

           
          </View>
          {/* </View> */}
       
        </View>
      )}
    </Formik>


     </View>

     <View style={{justifyContent:'center',alignItems:'center'}}>


            <Text style={{fontSize:15,color:'white'}}>Already Have an Account?  <Text style={{fontWeight: "bold"}}> SignIn</Text> </Text>

            </View>
        
      </ScrollView>
  );
}

const styles = StyleSheet.create({

  topView:{
    backgroundColor :colors.primary,
    paddingTop:"13%",
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
   borderBottomColor :"white",
   borderBottomWidth:2,
   paddingTop:25,
   width:260,
   fontSize:18,
},
// button styling
   container: {
    flex: 1,
    paddingTop:'15%',

  },
   button:{
    backgroundColor:colors.primary,
     marginTop:30,
    justifyContent:'center',
    alignItems:'center',

  
   },
   sbcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    borderRadius: 100,
    margin:20,
    marginBottom: 60

  },
   

});

export default SignUp;