import { Text, View, Image, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import { RadioButton } from 'react-native-paper';
import { estilos } from "./NovaVacina_style";
import { TextInputMask } from 'react-native-masked-text';
import MyButton from "../components/Mybutton/MyButton";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from '../firebase/config';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'


const NovaVacina = (props) => {

  const [dataVac, setDataVac] = useState('');
  const [nomeVacina, setNomeVacina] = useState('');
  const [dose, setDose] = useState('');
  const [foto, setFoto] = useState('');
  const [proxDose, setProxDose] = useState('');
  const [urlFoto, setUrlFoto] = useState('')

  const cadastrarVacina = async () => {

    const colecao = collection(db, "vacina")

    //Pega os bytes do arquivo 
    const file = await fetch(urlFoto)

    // diz quem sao os bytes do arquivo
    const blob = await file.blob()

    //Retorna funçao ref que passa o caminho local do diretorio do arquivo 
    const imageRef = ref(storage, "images/vacina.jpg")

    //funcao do sotage pega a referencia do caminho, bytes e tipo de arquivo 
    uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
      .then((result) => {
        console.log("Arquivo salvo com sucesso.")
        getDownloadURL(imageRef)
          .then((url) => {

            const documento = {
              dataVacina: dataVac,
              nomeVacina: nomeVacina,
              dose: dose,
              urlImagem: url,
              proximaDose: proxDose
            }

            addDoc(colecao, documento)
              .then((refDoc) => {
                console.log("Documento inserido com sucesso: " + JSON.stringify(refDoc))
                props.navigation.navigate('MyDrawer')
              })
              .catch((error) => {
                console.log("Error: " + JSON.stringify(error))
              })
          })
      })
      .catch((error) => {
        console.log("Erro ao enviar arquivo: " + JSON.stringify(error))
      })
  }


  const capturar = () => {

    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then((result) => {
        setFoto(result.assets[0])
        setUrlFoto(result.assets[0].uri)
      })
      .catch((error) => {
        console.log("Error ao capturar imagem: " + JSON.stringify(error))
      })

  }

  return (

    // View Principal
    <View style={estilos.main}>
      {/* View de Controle  */}
      <View style={estilos.ctrl}>

        {/* View Formulario de Data  */}
        <View style={estilos.form}>
          <Text style={estilos.tagForm}>Data vacinação</Text>
          <View style={estilos.calendar}>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              style={estilos.input2}
              placeholder=""
              data-inputmask="'alias': 'datetime', 'inputFormat': 'dd/mm/yyyy'"
              onChangeText={setDataVac}
              value={dataVac}
            />
            <Image style={estilos.img} source={require('../assets/images/calendario.png')} />
          </View>
        </View>

        {/* View nome da vacina */}
        <View style={estilos.form}>
          <Text style={estilos.tagForm}>Vacina</Text>
          <TextInput
            style={estilos.input}
            placeholder=""
            onChangeText={setNomeVacina}
            value={nomeVacina}
          />
        </View>

        {/* View Dose a vacina */}
        <View style={estilos.formD}>
          <Text style={estilos.tagForm}>Dose</Text>

          <RadioButton
            value="1 Dose"
            status={dose === '1 Dose' ? 'checked' : 'unchecked'}
            onPress={() => setDose('1 Dose')}

            uncheckedColor={"#fff"}
            color={"#419ED7"}

          /><Text style={estilos.tagForm2}>1ª Dose</Text>

          <RadioButton
            value="2 Dose"
            status={dose === '2 Dose' ? 'checked' : 'unchecked'}
            onPress={() => setDose('2 Dose')}
            alignContent={'space-between'}
            uncheckedColor={"#fff"}
            color={"#419ED7"}
          /><Text style={estilos.tagForm2}>2ª Dose</Text>

          <RadioButton
            value="3 Dose"

            status={dose === '3 Dose' ? 'checked' : 'unchecked'}
            onPress={() => setDose('3 Dose')}

            uncheckedColor={"#fff"}
            color={"#419ED7"}

          /><Text style={estilos.tagForm2}>3ª Dose</Text>

          <RadioButton
            value="Dose Unica"
            status={dose === 'Dose Unica' ? 'checked' : 'unchecked'}
            onPress={() => setDose('Dose Unica')}

            uncheckedColor={"#fff"}
            color={"#419ED7"}
          /><Text style={estilos.tagForm2}>Dose Unica</Text>

        </View>

        {/* View Comprovante */}

        <Text style={estilos.tagForm4}>Comprovante</Text>
        <TouchableOpacity onPress={() => { capturar() }} style={estilos.BtImg}  >
          <Text style={estilos.text}>
            Selecionar imagem...
          </Text>
        </TouchableOpacity>

        {
          urlFoto ?
            <Image source={{ uri: urlFoto }} style={{ height: 100, width: 200, transform: [{ translateX: 130 }, { translateY: -10 }], }} />
            :
            null
        }

        {/* View Proxima Dose */}
        <View style={estilos.form}>
          <Text style={estilos.tagForm}>Próxima Vacinaçao</Text>
          <View style={estilos.calendar}>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              style={estilos.input2}
              placeholder=""
              onChangeText={setProxDose}
              value={proxDose}
            />
            <Image style={estilos.img} source={require('../assets/images/calendario.png')} />
          </View>
        </View>
      </View >

      {/*Botão Cadastrar*/}

      <View style={estilos.bt}>
        <MyButton onPress={cadastrarVacina} texto="Cadastrar" />
      </View>
    </View>
  )
}

export default NovaVacina;