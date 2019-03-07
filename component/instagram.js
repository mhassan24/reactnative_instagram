import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,Image} from 'react-native'
import insta from '../images/insta.png'

class Insta extends Component {
   render() {
      return (
         <View style = {styles.container}>

      <View style={{alignItems:"center"}}>
      <Image source={insta} style={styles.insta}></Image>
      </View>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Username"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

      <View style={{width:"80%", alignItems:"flex-end"}}>
      <TouchableOpacity>
        <Text style={{fontSize:13, marginLeft:30, fontWeight:"bold"}}>Forgot password?</Text>
      </TouchableOpacity>
      </View>

         <TouchableOpacity style = {styles.submitButton}>
         <Text style = {styles.submitButtonText}> Login </Text>
         </TouchableOpacity>

         <View style={styles.bottomView}>
         <Text style={{paddingTop:"3%"}}>Don't have an account? <Text style={{fontWeight:"bold", color:"black"}}>Sign up.</Text></Text>
          </View>

         </View>
   

   )
   }
}
export default Insta

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
   },
   insta:{
      width:220, 
      height:75,
      marginTop:30
     },  
   input: {
      margin: 15,
      height: 40,
      borderColor: 'black',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: 'black',
      padding: 10,
      margin: 15,
      height: 40, 
      alignItems:"center", 
   },
   submitButtonText:{
      color: 'white',
   },
   bottomView:{ 
      marginTop:"20%", 
      flex:0.2, borderTopWidth:1, 
      borderColor:"#C0C0C0", 
      width:"100%", 
      justifyContent:"flex-start", 
      alignItems:"center" 
   }
 
})