import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, Button, } from "react-native";
import { useState } from "react";
import MyButton from "../components/Mybutton/MyButton";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth_mod } from '../firebase/config';

const RecConta = (props) => {

  const recSenha = () => {
    sendPasswordResetEmail(auth_mod, email)
      .then(() => {
        Alert.alert("E-mail de recuperação enviado com suceso!")
        console.log("E-mail de recuperação enviado com suceso!")
        props.navigation.navigate('Login')
      })
      .catch((error) => {
        Alert.alert("Falha ao enviar e-mail de redefinição: " + JSON.stringify(error))
        console.log("Falha ao enviar e-mail de redefinição: " + JSON.stringify(error))
      })
  }

  const [email, setEmail] = useState("");

  return (
    <View style={estilos.main}>

      {/*Formulario Email*/}

      <View style={estilos.form}>

        <Text style={estilos.tagForm}>E-mail</Text>
        <TextInput
          style={estilos.input}
          placeholder=""
          onChangeText={setEmail}
          value={email}
        />

      </View>

      {/*Botão Recuperar conta*/}

      <View style={estilos.bt}>
        <MyButton onPress={recSenha} texto="Recuperar Senha" />
      </View>



    </View>
  )
}

const estilos = StyleSheet.create({


  main: {
    backgroundColor: "#ADD4D0",
    height: "100%",
    paddingTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Controle CSS do Formulário Login

  form: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },

  input: {
    flexDirection: 'row',
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
    width: '75%',
    height: 38,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 1,
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#fff',
    color: '#419ED7',

  },
  tagForm: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
    textAlignVertical: 'center',
    paddingRight: 10,
    fontSize: 20,
    paddingBottom: 15,
  },

  bt: {
    flex: 5,
  }

})

//Exportação - para outros arquivos terem acesso

export default RecConta;
