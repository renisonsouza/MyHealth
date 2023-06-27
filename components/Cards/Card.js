import React from 'react';
import { View, Image, Text, StyleSheet, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Card = (props) => {

  const { item } = props

  const goToEditVacina = (id) => {
    props.navigation.navigate('Editar Vacina', { id: id, dataVasc: props.dataVacina, nomeVacina: props.nomeVacina, dose: props.dose, proxVac: props.proximaDose, urlImagem: props.urlImagem })

  }

  return (
    <TouchableOpacity onPress={() => { goToEditVacina(props.id) }}>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>{props.nomeVacina}</Text>
          <Text style={{ display: 'none' }}>{props.dose}</Text>
          <Text style={{ display: 'none' }}>{props.dataVacina}</Text>
          <Image source={{ uri: props.urlImagem }} style={{ display: 'none' }} />
          <Text style={styles.subTitle}>{"Prox.Dose " + props.proximaDose}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 15,
    marginHorizontal: 10,
  },

  title: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 29,
    color: '#419ED7',
  },

  subTitle: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    color: '#8B8B8B',
  },
});

export default Card;