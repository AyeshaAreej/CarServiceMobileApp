import { View, Text } from 'react-native'
import COLORS from './components/colors';
import React from 'react'
import Home from './screens/Home';
 import Profile from './screens/Profile';
import Location from './screens/Location';
import Message from './screens/Message';
import PaymentMethod from './screens/PaymentMethod';

import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './components/CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome'


const Drawer = createDrawerNavigator();


const UserStack = () => {
  return (
    <Drawer.Navigator 
    drawerContent={props=><CustomDrawer {...props} /> } 
    screenOptions={{
      drawerActiveBackgroundColor:COLORS.primary,
      drawerActiveTintColor:'white',
      drawerInactiveTintColor:'#333'
    }}
    useLegacyImplementation>
          <Drawer.Screen name='Home' component={Home} 
            options={{
              drawerIcon:({focused,size})=>(
                <Icon
                name='home'
                size={size}
                color={focused? 'white' : COLORS.primary}
                />
              ),
            }}
            
          />
          <Drawer.Screen name=' Profile' component={Profile}
              options={{
                drawerIcon:({focused,size})=>(
                  <Icon
                  name='user'
                  size={size}
                  color={focused? 'white' : COLORS.primary}
                  />
                ),
              }}
          />
        
            
          
          <Drawer.Screen name='   Location' component={Location} 
              options={{
                drawerIcon:({focused,size})=>(
                  <Icon
                  name='map-marker'
                  size={size}
                  color={focused? 'white' : COLORS.primary}
                  />
                ),
              }}
          />
          <Drawer.Screen name=' Message' component={Message}
                options={{
                  drawerIcon:({focused,size})=>(
                    <Icon
                    name='comment'
                    size={size}
                    color={focused? 'white' : COLORS.primary}
                    />
                  ),
                }}
          />
          <Drawer.Screen name='Payment' component={PaymentMethod} 
                  options={{
                    drawerIcon:({focused,size})=>(
                      <Icon
                      name='cc-visa'
                      size={size}
                      color={focused? 'white' : COLORS.primary}
                      />
                    ),
                  }}
          />
        
    </Drawer.Navigator>
  )
}



export default UserStack