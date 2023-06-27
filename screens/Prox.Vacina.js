import { StyleSheet, FlatList, View } from "react-native";
import Card from "../components/Cards/Card";
import MyButton from "../components/Mybutton/MyButton";
import { useState, useEffect } from 'react';
import { db } from "../firebase/config";
import { collection, query, onSnapshot } from 'firebase/firestore';

const ProxVacina = (props) => {

  const goToNoVaci = () => {
    props.navigation.navigate('Nova Vacina')
  }

  const [listaVacina, setListaVacina] = useState([])

  useEffect(() => {

    const q = query(collection(db, "vacina"))

    onSnapshot(q, (snapshot) => {
      const vacinas = []

      snapshot.forEach((doc) => {
        vacinas.push({
          id: doc.id,
          dataVacina: doc.data().dataVacina,
          nomeVacina: doc.data().nomeVacina,
          dose: doc.data().dose,
          urlImagem: doc.data().urlImagem,
          proximaDose: doc.data().proximaDose
        })
        console.log("Documento: " + JSON.stringify(doc.data()))
      })

      setListaVacina(vacinas)
    })
  }, [])

  return (

    <View style={estilos.main}>

      <FlatList
        style={{ paddingHorizontal: 25 }}
        extraData={listaVacina}
        data={listaVacina}
        renderItem={({ item }) => {

          return <Card
            navigation={props.navigation}
            id={item.id}
            dataVacina={item.dataVacina}
            nomeVacina={item.nomeVacina}
            dose={item.dose}
            urlImagem={item.urlImagem}
            proximaDose={item.proximaDose}
          />

        }} />

      <MyButton onPress={goToNoVaci} texto="Nova Vacina" />

    </View>
  )
}

const estilos = StyleSheet.create({
  main: {
    backgroundColor: "#ADD4D0",
    height: "100%",
  }
})

export default ProxVacina;
