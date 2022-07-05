import React,{useState} from 'react';
import {Dimensions,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../components/colors';
import services from '../components/services';
import { useNavigation } from '@react-navigation/native';


const {width}= Dimensions.get('screen');
const cardWidth=width/1.1;

const Home=({navigation})=>{
   const categories = ['AC Services', 'Battery Services', 'Brake Services'];
   

  
// Card

const Card=({service,index,})=>{
  const navigation = useNavigation();

  function handleClick(){
    console.log("Card clicked")
    navigation.navigate('Providers')
  }
return(
  <TouchableOpacity onPress={handleClick}>
    <View style={{...style.card}}>
      <View style={{...style.cardOverLay, opacity:0}}/>
      <View style={style.cardDetails}>
          <View style={{flexDirection:"row", justifyContent:'flex-start', }}>
         
           <Icon name={service.icon} size={30} color={COLORS.dark}/>
               <Text style={{fontWeight:"bold",fontSize:20,marginLeft:10}}>{service.name}</Text>
          
         
          </View>
         </View>        
    </View>
    
    
    </TouchableOpacity>

)
};



    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.primary, justifyContent:"center", alignItems:'center'}}>
        <View style={style.header}>
            <View style={{paddingBottom:15}}>
             <Text style={{fontSize:30, fontWeight:'bold',color:COLORS.white}}>
              Choose a Service </Text> 
              
            </View>
           
 </View>
        <ScrollView showsVerticalScrollIndicator={true}>
        <View>
         <Animated.FlatList
          data={services}
          vertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent:'center',
            alignItems:'center',
            
          }}
          renderItem={({item}) => <Card service={item}  />}
        />
        </View>


         
        </ScrollView>
     </SafeAreaView>
   
 )
}

const style = StyleSheet.create({
    header: {
      // marginTop: 3,
    
      paddingTop:24,
    },
  
    card: {
      height: 100,
      width: cardWidth,
      elevation: 15,
      borderRadius: 15,
      marginBottom:20,
      backgroundColor: COLORS.white,
      
    },
   
  
    cardDetails: {
      height: 100,
      borderRadius: 15,
      backgroundColor: COLORS.white,
      position: 'absolute',
      bottom: 0,
      padding: 20,
      width: '100%',
    },
    cardOverLay: {
      height: 250,
      backgroundColor: COLORS.white,
      position: 'absolute',
      zIndex: 100,
      width: cardWidth,
      borderRadius: 15,
    },
  
  
   
  });

export default Home;