import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (

    <View style={styles.container}>
     
     <Image
        source={require('./src/logo.jpg')}
        style={styles.logoImage}
        resizeMode="cover"
      />



      <TextInput
        style={styles.input}
        placeholder="Email o numero de telefono"
      />
        <TextInput
        style={styles.input}
        placeholder="Contraseña"
      />
      
      <TouchableOpacity style={styles.continueButtonFullWidth}>
        <Text style={styles.buttonText}>Inicia sesión</Text>
      </TouchableOpacity>
      
      <Text style={styles.division}>O</Text>

      <TouchableOpacity style={styles.continueButtonFullWidth}>
        <Text style={styles.buttonText}>Usar un codigo de inicio de sesión</Text>
      </TouchableOpacity>
      <Text style={styles.troubleText}>¿Olvidaste contraseña?</Text>
      <Text style={styles.troubleText}>¿Primera vez en Netflix? Suscribete ya.</Text>
   
      <Text style={styles.bottomText}>
        El inicio de sesión esta protegido por Google reCAPTCHA para comprobar que no eres un robot. Mas info.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  input: {
    
    height: 45,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius:5,
    backgroundColor: '#ccc',
  },
  continueButtonFullWidth: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%', // Make the button occupy the full width
    marginBottom: 16,
    borderColor:'#fff',
    borderWidth:2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  troubleText: {
    marginBottom: 16,
    color:'white',
  },
  socialButtons: {
    marginBottom: 16,
  },
  bottomText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop:15,
    width:350,
    color:'white'
  },

  logoImage:{
    marginTop:20,
    width:150,
    height:80,
    marginVertical:150,
    marginRight:200,
  },
  division:{
    color:'white',
    marginVertical: 5,
  }
});

export default LoginScreen;
