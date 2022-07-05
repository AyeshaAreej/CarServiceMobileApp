import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import { Auth_Stack,  User_Home,Company_Booking} from './constants';
import AuthStack from './AuthStack';
import UserHomeStack from './UserHomeStack';

const MainStack =createStackNavigator();

function RoutNavigator(){
    return (
     <NavigationContainer >
          <MainStack.Navigator initialRouteName={Auth_Stack}>
             <MainStack.Screen
             name={Auth_Stack}
             component={AuthStack}
             options={{headerShown:false}}
             />

   
             <MainStack.Screen
             name={User_Home}
             component={UserHomeStack}
             options={{headerShown:false}}
             />
             {/* <MainStack.Screen
                name={Company_Booking}
                component={UserHomeStack}
                options={{headerShown:false}}
             /> */}

            



            
          </MainStack.Navigator>
     </NavigationContainer>
    )
}

export default RoutNavigator;