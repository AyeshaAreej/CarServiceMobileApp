import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/SignUp';
import AuthStack from './AuthStack';
import RoutNavigator from './RoutNavigator';

export default function App() {
  return (
    <RoutNavigator/>
    //   <NavigationContainer>    
    //          <AuthStack/>    
    //  </NavigationContainer>  
  // <SplashScreen/>
  // <WelcomeScreen/>
  // <LoginScreen/>
  // <SignUp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
