import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardQua = (props) => {

  const { item } = props

  const goToEditVacina = (id) => {
    props.navigation.navigate('Editar Vacina', { id: id, dataVasc: props.dataVacina, nomeVacina: props.nomeVacina, dose: props.dose, proxVac: props.proximaDose, urlImagem: props.urlImagem })

  }

  return (

    <TouchableOpacity onPress={() => { goToEditVacina(props.id) }}>

      <View style={styles.card}>

        <Text style={styles.txtTitulo}>{props.nomeVacina}</Text>
        <Text style={styles.txtDose}>{props.dose}</Text>
        <Text style={styles.txtData}>{props.dataVacina}</Text>

        {
          props.urlImagem ?
            <Image source={{ uri: props.urlImagem }} style={{ width: 120, height: 70 }} />
            :
            null
        }

        {
          props.proximaDose ?
            <Text style={styles.txtPDose}>{"Prox.Dose " + props.proximaDose}</Text>
            :
            null
        }

      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },

  txtTitulo: {
    color: '#3F92C5',
    fontSize: 20,
    marginVertical: 2,
    fontFamily: 'AveriaLibre-Regular',
  },

  txtDose: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
    backgroundColor: '#3F92C5',
    paddingHorizontal: 20,
    fontSize: 14,
  },

  txtData: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#8B8B8B',
    fontSize: 12,
  },

  img: {
    maxWidth: 120,
    maxHeight: 68,
    backgroundColor: 'red',
  },

  txtPDose: {
    fontFamily: 'AveriaLibre-Regular',
    color: 'red',
    fontSize: 10,

    transform: [
      { translateX: 10 },
      { translateY: 5 },
    ],
  },
});

export default CardQua;
