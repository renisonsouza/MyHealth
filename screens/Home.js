import { StyleSheet, Image, View, FlatList, TextInput } from "react-native";
import CardQua from "../components/Cards/CardQua";
import MyButton from "../components/Mybutton/MyButton";
import { useState, useEffect } from 'react';
import { db } from "../firebase/config";
import { collection, query, onSnapshot } from 'firebase/firestore';

const Home = (props) => {
  const [searchText, setSearchText] = useState('');
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

  const goToNoVaci = () => {
    props.navigation.navigate('Nova Vacina')
  }

  return (

    <View style={estilos.main}>

      <View style={estilos.containeer}>
        <Image
          source={require('../assets/images/lupa.png')}
          style={estilos.searchIcon}
        />
        <TextInput
          style={estilos.searchInput}
          placeholder="PESQUISAR VACINA..."
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>

      <View style={estilos.meio}>

        <FlatList style={{ paddingHorizontal: 25 }} numColumns={2} extraData={listaVacina} data={listaVacina.filter((listaVacina) => listaVacina.nomeVacina.includes(searchText))} renderItem={({ item }) => {
          return <CardQua
            navigation={props.navigation}
            id={item.id}
            dataVacina={item.dataVacina}
            nomeVacina={item.nomeVacina}
            dose={item.dose}
            urlImagem={item.urlImagem}
            proximaDose={item.proximaDose}
          />
        }} />

      </View>
      <MyButton onPress={goToNoVaci} texto="Nova Vacina" />

    </View>
  )
}

const estilos = StyleSheet.create({

  main: {
    backgroundColor: "#ADD4D0",
    height: "100%",
  },
  // Controle barra de pesquisa
  containeer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingVertical: 8,
    marginVertical: 20,
    width: '95%',
    height: 30,
    justifyContent: 'center',
  },

  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  searchInput: {

    height: 50,
    fontSize: 12,
    width: '90%',
  },

  //Controle container vacinas

  meio: {
    width: '95%',
    alignSelf: 'center',
    flex: 3,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})

export default Home;
