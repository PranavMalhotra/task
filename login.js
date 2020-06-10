import React from 'react'; 
import { View, Text, Image, Button, ScrollView,Alert, TextInput, ImageBackground } from 'react-native';

export default function App() {
  return (

    <ScrollView>
     <View>
        { /*<Image source={{uri: "https://i.pinimg.com/originals/bb/f6/56/bbf65624a252d470c12c3fc2b0ab0ba0.jpg" , width: 100, height: 100, }}/> */ }
      
        <Text style={{textAlign: 'center'}}> <h1>LOGIN </h1></Text>
      </View>
      <View
        style={{
          borderBottomColor: 'blue',
          borderBottomWidth: 2,
          marginBottom: 5,
          marginTop: 10,
          margin: 5,
        }}  
      />
      <View  
        style={{
          borderBottomColor: 'green',
          borderBottomWidth: 2,
          marginBottom: 5,
          marginTop: 10,
          margin: 150,
        }}
      />
      <View
        style={{
          borderBottomColor: 'orange',
          borderBottomWidth: 2,
          marginBottom: 5,
          marginTop: 10,
          margin: 250,
        }}  
      />
      <View
        style={{
          borderBottomColor: 'yellow',
          borderBottomWidth: 2,
          marginBottom: 5,
          marginTop: 10,
          margin:400,
        }}  
      />
      <View
        style={{
          borderBottomColor: 'red',
          borderBottomWidth: 2,
          marginBottom: 5,
          marginTop: 10,
          margin: 500,
        }}  
      />
      <View>
        <Text><h3>Enter your Login Details</h3></Text>
      </View>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'orange',
          borderWidth: 2,
          backgroundColor: "white"
        }}
        placeholder ="Enter your Email Id:"
      />
      
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'orange',
          borderWidth: 2,
          backgroundColor: "white"
        }}
        placeholder ="Enter your Password:"
      />  
      <Button
          title="Login"
          color="blue"
          onPress={() => {alert('Logging in')}}
      />
    </ScrollView>    
  );
}