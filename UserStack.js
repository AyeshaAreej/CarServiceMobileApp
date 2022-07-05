import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home';
// import Profile from './screens/Profile';
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
      drawerActiveBackgroundColor:'purple',
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
                color={focused? 'white' : 'purple'}
                />
              ),
            }}
            
          />
          {/* <Drawer.Screen name=' Profile' component={Profile}
              options={{
                drawerIcon:({focused,size})=>(
                  <Icon
                  name='user'
                  size={size}
                  color={focused? 'white' : 'purple'}
                  />
                ),
              }}
          />
          <Drawer.Screen name='My Orders' component={MyOrders} 
              options={{
                drawerIcon:({focused,size})=>(
                  <Icon
                  name='shopping-cart'
                  size={size}
                  color={focused? 'white' : 'purple'}
                  />
                ),
              }}
          />  */}
          {/* <Drawer.Screen name='Notifications' component={Notifications} 
                  options={{
                    drawerIcon:({focused,size})=>(
                      <Icon
                      name='bell'
                      size={size}
                      color={focused? 'white' : 'purple'}
                      />
                    ),
                  }}
                  /> */}
          <Drawer.Screen name='   Location' component={Location} 
              options={{
                drawerIcon:({focused,size})=>(
                  <Icon
                  name='map-marker'
                  size={size}
                  color={focused? 'white' : 'purple'}
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
                    color={focused? 'white' : 'purple'}
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
                      color={focused? 'white' : 'purple'}
                      />
                    ),
                  }}
          />
        
    </Drawer.Navigator>
  )
}



export default UserStack