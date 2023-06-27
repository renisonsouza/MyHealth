import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Alert, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';
import { HelperText } from 'react-native-paper';
import MyButton from "../components/Mybutton/MyButton";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../firebase/config';

const Login = (props) => {

  const handleLogin = () => {
    signInWithEmailAndPassword(auth_mod, email, senha)
      .then((usuarioLogado) => {
        console.log("Sucesso! Usuário logado: " + JSON.stringify(usuarioLogado))
        props.navigation.push('MyDrawer');
      })
      .catch((erro) => {
        Alert.alert("Falha no login do usuário: " + JSON.stringify(erro))
      })
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const hasErrors = () => {
    return !email.includes('@');
  };

  const goToCriarConta = () => {
    props.navigation.navigate('Nova Conta')
  }

  const goToRecConta = () => {
    props.navigation.navigate('Recuperar Conta')
  }

  return (

    <ImageBackground source={require('../assets/images/fundo.jpg')} resizeMode='cover' style={estilos.image}>

      <View style={estilos.main}>

        {/*Logo*/}

        <View style={estilos.logo}>

          <Image source={require('../assets/images/icone.png')} />

          <Text style={estilos.txtLogo}>MyHealth</Text>
        </View>

        {/*Titulo*/}
        <View>
          <Text style={estilos.titulo}>Controle as suas vacinas e fique seguro</Text>
        </View>

        {/*Formulário*/}
        <View style={estilos.formulario}>
          <Text style={estilos.txt}>E-mail</Text>
          <TextInput
            label=""
            value={email}
            onChangeText={setEmail}
            style={estilos.input}

          />

          <Text style={estilos.txt}>Senha</Text>
          <TextInput
            label=""
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            style={estilos.input}
          />
        </View>

        {/*Helper Email*/}
        <HelperText style={estilos.erroHelper} type="error" visible={hasErrors()}>
          Email e/ou senha inválidos.
        </HelperText>

        {/*Botão Entrar*/}
        <View>
          <MyButton onPress={handleLogin} texto="Entrar" />
        </View>

        {/*Botão Criar Conta*/}
        <View>
          <TouchableOpacity style={estilos.btCriar} onPress={goToCriarConta}>
            <Text style={estilos.textBotaoCriarConta}>
              Criar minha conta
            </Text>
          </TouchableOpacity>
        </View>

        {/*Botão Esqeuci a senha*/}
        <View>
          <TouchableOpacity style={estilos.btEsqueci} onPress={goToRecConta}  >
            <Text style={estilos.textBotãoEsqueci}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const estilos = StyleSheet.create({

  main: {
    backgroundColor: "#ADD4D0",
    height: "100%",
    opacity: 0.89,
    paddingTop: 80,
  },

  // *************Controle Logo****************

  // Controle Logo

  logo: {
    alignSelf: 'center',
    fontFamily: 'AveriaLibre-Regular',
    flexDirection: "row",
    justifyContent: "center",
  },

  txtLogo: {
    fontSize: 45,
    fontFamily: 'AveriaLibre-Regular',
    color: '#419ED7',
    textDecorationLine: 'underline',

  },


  // *************Controle Titulo****************

  // Controle Titulo

  titulo: {
    fontSize: 30,
    fontFamily: 'AveriaLibre-Regular',
    flexDirection: "row",
    color: '#419ED7',
    textAlign: "center",
    paddingVertical: 60,
    paddingHorizontal: 30,
  },

  // *************Controle Formulario****************

  // Controle Formulario

  formulario: {
    width: '95%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },

  // Controle Text 
  txt: {
    color: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    paddingRight: 10,
  },

  // Controle Text Input
  input: {
    width: '80%',
    height: 35,
    marginBottom: 10,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 1,
    color: '#419ED7',

  },

  // Controle Helper Text
  erroHelper: {
    paddingLeft: 78,
    justifyContent: 'flex-start',
  },

  // *************Controle Botões****************

  //Controle Botão Criar Conta

  btCriar: {
    fontSize: 20,
    backgroundColor: '#419ED7',
    alignSelf: 'center',
    fontFamily: 'AveriaLibre-Regular',
    marginHorizontal: 80,
    marginVertical: 30,
    elevation: 8,
  },

  textBotaoCriarConta: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
    marginVertical: 8,
    marginHorizontal: 30,
    fontVariant: 'Bold',
  },

  //Controle Botão Esqueci a senha

  btEsqueci: {
    backgroundColor: '#B0CCDE',
    alignSelf: 'center',
    fontFamily: 'AveriaLibre-Regular',
    marginHorizontal: 45,
    marginVertical: 25,
    elevation: 8,
    borderBottomColor: '#B5C7D1',
  },

  textBotãoEsqueci: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    alignSelf: 'center',
    color: '#fff',
    marginVertical: 8,
    marginHorizontal: 30,
    fontVariant: 'Bold',
  },

});

export default Login;