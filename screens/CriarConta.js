import { StyleSheet, Text, View, Alert, Image, TextInput, } from "react-native";
import { useState } from "react";
import MyButton from "../components/Mybutton/MyButton";
import { RadioButton } from 'react-native-paper';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { TextInputMask } from 'react-native-masked-text';
import { auth_mod } from '../firebase/config';
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/config";

const CriarConta = (props) => {

  const cadastrarUsuario = () => {

    addDoc(collection(db, "Usuarios"), {
      nome: nome,
      sexo: sexo,
      dataNascimento: dataNascimento,
      email: email,
      senha: senha,
      repetirSenha: repetirSenha

    })
      .then((userCredential) => {
        createUserWithEmailAndPassword(auth_mod, email, senha)
        Alert.alert("Usuário criado com sucesso: " + JSON.stringify(userCredential));
        props.navigation.navigate('Login');
      })
      .catch((error) => {
        Alert.alert("Erro ao criar usuário: " + JSON.stringify(error))
      })
  }

  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('masculino');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');


  return (
    <View style={estilos.main}>

      <View style={estilos.ctrl}>
        <View style={estilos.form}>
          <Text style={estilos.tagForm}>Nome Completo</Text>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
            style={estilos.input}
            placeholder=""
            onChangeText={setNome}
            value={nome}
          />
        </View>

        <View style={estilos.form}>
          <Text style={estilos.tagForm}>Sexo</Text>
          <RadioButton
            value="masculino"

            status={sexo === 'masculino' ? 'checked' : 'unchecked'}
            onPress={() => setSexo('masculino')}

            uncheckedColor={"#fff"}
            color={"#419ED7"}

          /><Text style={estilos.tagForm}>Masculino</Text>

          <RadioButton
            value="feminino"
            status={sexo === 'feminino' ? 'checked' : 'unchecked'}
            onPress={() => setSexo('feminino')}

            uncheckedColor={"#fff"}
            color={"#419ED7"}
          /><Text style={estilos.tagForm}>Feminino</Text>
        </View >

        <View style={estilos.form}>

          <Text style={estilos.tagForm}>Data Nascimento </Text>
          <View style={estilos.calendar}>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              style={estilos.input2}
              placeholder=""

              onChangeText={setDataNascimento}
              value={dataNascimento}

            />
            <Image style={estilos.img} source={require('../assets/images/calendario.png')} />
          </View>
        </View>

        <View style={estilos.form}>
          <Text style={estilos.tagForm}>E-mail</Text>
          <TextInput
            style={estilos.input}
            placeholder=""
            onChangeText={setEmail}
            value={email}
          />

        </View>

        <View style={estilos.form}>
          <Text style={estilos.tagForm}>Senha</Text>
          <TextInput
            style={estilos.input}
            placeholder=""
            onChangeText={setSenha}
            value={senha}
            secureTextEntry={true}
          />

        </View>

        <View style={estilos.form}>
          <Text style={estilos.tagForm}>Repetir Senha</Text>
          <TextInput
            style={estilos.input}
            placeholder=""
            onChangeText={setRepetirSenha}
            value={repetirSenha}
            secureTextEntry={true}
          />
        </View>
      </View>

      {/*Botão CriarConta*/}

      <View style={estilos.bt}>
        <MyButton onPress={() => {
          cadastrarUsuario();
        }} texto="Cadastrar" />
      </View>

    </View>
  )
}

const estilos = StyleSheet.create({

  main: {
    backgroundColor: "#ADD4D0",
    height: "100%",
    paddingTop: 150,
  },

  //Controle CSS do Formulário Login
  ctrl: {
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },

  input: {

    fontFamily: 'AveriaLibre-Regular',
    width: '65%',
    fontSize: 18,
    height: 25,
    marginVertical: 5,
    paddingVertical: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
    color: '#419ED7',
  },

  input2: {

    fontFamily: 'AveriaLibre-Regular',
    width: '67%',
    fontSize: 16,
    height: 25,
    marginVertical: 5,
    paddingVertical: 5,

    borderColor: '#fff',
    backgroundColor: '#fff',
    color: '#419ED7',
  },

  //Controle CSS input data
  calendar: {
    marginVertical: 8,
    paddingBottom: 30,
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '65%',
    height: 26,
  },

  img: {
    marginLeft: 45,
    marginTop: 2,
  },

  tagForm: {
    alignContent: 'center',
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
    fontSize: 16,
    paddingRight: 10,
    paddingTop: 11,
  },

  //Controle CSS botao
  bt: {
    paddingTop: 150,
  }
})

export default CriarConta;