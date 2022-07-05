import React from 'react';
import {Dimensions,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../components/colors';
import providers from '../components/providers';

const {width}= Dimensions.get('screen');
const cardWidth=width/1.05;

const Providers=({navigation})=>{
 
  
// Card

const Card=({provider,index,navigation})=>{
return(
   
    <View style={{...style.card}}>
      
         

          <View style={{flexDirection:'row'}}>
                  <Image source={provider.image} style={style.cardImage} />
              
                  <Text style={{fontSize:13,fontWeight:'bold',marginLeft:10, marginTop:20,marginBottom:5}}>{provider.name}
                   {'\n'}{'\n'} {provider.details} 
                   {'\n'}{'\n'} Reviews:
                   <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.gray}/>
                 {'\n' }{'\n' } Estimated Cost: {provider.price}
                    </Text>
          
          </View>

         
           
      

    
          {/* <View style={{flexDirection:"row"}}>
                  
                    <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:15,paddingTop:10}}>Name : {hotel.name}</Text>
                     
                    <Text style={{fontWeight:"bold",fontSize:20,paddingTop:20,paddingLeft:80}}>Pending</Text>
          
          </View>    */}

           {/* <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                  
           <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:15}}>Total : Rs.{hotel.price}</Text>
                   
          </View>       */}
        
    </View>
    
    
    

)
};



    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.primary,justifyContent:"center", alignItems:'center'}}>
        <ScrollView showsVerticalScrollIndicator={true}>
       <View style={style.header} >
            <View style={{paddingBottom:25}}>
             <Text style={{fontSize:30, fontWeight:'bold',marginLeft:'15%',color:COLORS.white}}>
              Available Providers </Text> 
              <Text style={{fontSize:15, fontWeight:'bold',marginLeft:'25%',color:COLORS.white}}>
              For AC Replacement Service </Text> 
             </View>
</View>
    
         <View>
         <Animated.FlatList
          data={providers}
          vertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent:'center',
            alignItems:'center',
            
          }}
          renderItem={({item}) => <Card provider={item}  />}
        />
        </View>


         
        </ScrollView>
     </SafeAreaView>
   
 )
}

const style = StyleSheet.create({
  header: {
  paddingTop:24,
  },

    card: {
      height: 165,
      width: cardWidth,
      elevation: 10,
      borderTopEndRadius:15,
      borderRadius: 15,
      marginBottom:30,
      backgroundColor: COLORS.white,
      
    },
    cardImage: {
      height: '100%',
      width: '50%',
      borderRadius:15,
    
    },
    
    cardDetails: {
      height: 80,
      borderRadius: 15,
      backgroundColor: COLORS.white,
      position: 'absolute',
      bottom: 0,
      padding: 20,
      width: '100%',
    },

  
   
  });

export default Providers;