import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home';
// import CompanyDetails from './screens/CompanyDetails';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserStack from './UserStack';

const Stack = createNativeStackNavigator();  


const UserHomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='UserStack'>
          <Stack.Screen name='UserStack' component={UserStack}/>
           <Stack.Screen name='Home' component={Home}/>
           {/* <Stack.Screen name='CompanyDetails' component={CompanyDetails}/> */}
        
         </Stack.Navigator> 
  )
}



export default UserHomeStack