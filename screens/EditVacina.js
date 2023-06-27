import { Modal, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import MyButton from "../components/Mybutton/MyButton";
import { RadioButton } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { estilos } from "./EditVacina_style";
import { db } from "../firebase/config";
import { launchCamera } from 'react-native-image-picker'

import { doc, updateDoc, deleteDoc } from "firebase/firestore"

const EditVacina = (props) => {

  const [vacina, setVacina] = useState("");
  const [dataVasc, setDataVasc] = useState('');
  const [dose, setDose] = useState('1ª Dose');
  const [urlImagem, setUrlImagem] = useState('');
  const [proxVac, setProxVac] = useState('');

  useEffect(() => {

    setDataVasc(props.route.params.dataVasc)
    setVacina(props.route.params.nomeVacina)
    setDose(props.route.params.dose)
    setUrlImagem(props.route.params.urlImagem)
    setProxVac(props.route.params.proxVac)

  }, [])

  const salvarAlteraçoes = async () => {

    const idDocumento = props.route.params.id
    const refDoc = doc(db, "vacina", idDocumento)

    updateDoc(refDoc, {
      dataVavina: dataVasc,
      dose: dose,
      nomeVacina: vacina,
      proximaDose: proxVac,
    })
      .then(() => {
        console.log("Documento atualizado com sucesso!!!")
        props.navigation.pop()
      })
      .catch((error) => {
        console.log("Erro ao atualizar o documento: " + error)
      })
  }

  const excluir = () => {
    const idDocumento = props.route.params.id
    const refDoc = doc(db, "vacina", idDocumento)

    deleteDoc(refDoc)
      .then(() => {
        console.log("Documento excluído.")
        props.navigation.pop()
      })
      .catch((error) => {
        console.log("Erro ao excluir " + error)
      })
  }

  const capturarImagem = () => {

    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then((result) => {
        setFoto(result.assets[0])
        setUrlImagem(result.assets[0].uri)
      })
      .catch((error) => {
        console.log("Error ao capturar imagem: " + JSON.stringify(error))
      })

  }

  const [isVisible, setVisible] = useState(false);
  return (
    <View style={estilos.main}>

      <Modal visible={isVisible} animationType='slide' transparent={true}>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,1)' }}>


          <View style={{ padding: 10, backgroundColor: 'white', width: '75%', height: 200, alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', elevation: 10, borderColor: '#B9DFDB', borderWidth: 3 }}>

            <Text style={{ fontSize: 16, fontWeight: 500, alignSelf: 'center', fontSize: 22, textAlign: 'center', fontFamily: 'AveriaLibre-Regular', color: '#FD7979', paddingVertical: 25, alignItems: 'center' }}>Tem certeza que deseja remover essa vacina?</Text>

            <TouchableOpacity style={{ marginRight: 3, paddingHorizontal: 20, backgroundColor: '#FF8383', height: 40, flexDirection: 'row', justifyContent: 'center', padding: 5 }} onPress={() => excluir()}>
              <Text style={{ color: 'white', fontSize: 18, alignSelf: 'center', fontWeight: 600 }}>SIM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 3, paddingHorizontal: 20, backgroundColor: '#3F92C5', height: 40, flexDirection: 'row', justifyContent: 'center' }} onPress={() => setVisible(false)}>
              <Text style={{ color: 'white', fontSize: 18, alignSelf: 'center', fontWeight: 600 }}>CANCELAR</Text>
            </TouchableOpacity>
          </View>

        </View>

      </Modal >

      <View style={estilos.ctrl}>
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
              onChangeText={setDataVasc}
              value={dataVasc}
            />
            <Image style={estilos.img} source={require('../assets/images/calendario.png')} />
          </View>
        </View>

        <View style={estilos.form}>
          <Text style={estilos.tagForm}>Vacina</Text>
          <TextInput
            style={estilos.input}
            placeholder=""
            onChangeText={setVacina}
            value={vacina}
          />
        </View>

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

        <Text style={estilos.tagForm}>Comprovante</Text>

        <TouchableOpacity onPress={() => capturarImagem()} style={estilos.BtCriar}  >
          <Text style={estilos.text}>
            Selecionar imagem...
          </Text>
        </TouchableOpacity>

        {
          urlImagem ?
            <Image source={{ uri: urlImagem }} style={estilos.imgV} />
            :
            null
        }

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
              onChangeText={setProxVac}
              value={proxVac}
            />
            <Image style={estilos.img} source={require('../assets/images/calendario.png')} />
          </View>
        </View>

      </View >

      {/*Botão Alterar*/}

      <View style={estilos.bt}>
        <MyButton onPress={() => salvarAlteraçoes()} texto="Salvar alterações" />
      </View>

      {/*Botão Excluir*/}
      <View>
        <TouchableOpacity onPress={() => {
          console.log("Apertou o botão excluir")
          setVisible(true)
        }}

          style={estilos.btExcluir}>

          <Image style={estilos.imgBtExcluir} source={require('../assets/images/trash.png')} />
          <Text style={estilos.textBotaoExcluir}>
            Excluir
          </Text>

        </TouchableOpacity>
      </View>

    </View>
  )
}

export default EditVacina;