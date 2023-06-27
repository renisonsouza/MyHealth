import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

  main: {
    backgroundColor: "#ADD4D0",
    height: "100%",
    paddingTop: 40,
  },

  radio: {
    flexDirection: 'row',
  },
  
  //Controle CSS do Formulário Login
  ctrl: {
    paddingHorizontal: 10,
    marginLeft: 26,

  },
  form: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
  },
  formD: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    flexWrap: 'wrap',
  },

  formDose: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 10,
    flexWrap: 'wrap',
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
    width: '63%',
    fontSize: 16,
    height: 25,
    marginVertical: 5,
    paddingVertical: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
    color: '#419ED7',
  },

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
    justifyContent: 'center',
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
    fontSize: 17,
    paddingRight: 8,
    paddingTop: 11,
  },

  tagForm2: {
    justifyContent: 'center',
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
    fontSize: 14,
    paddingRight: 10,
    paddingTop: 11,
  },

  tagForm3: {
    justifyContent: 'center',
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
    fontSize: 14,
    paddingRight: 10,
  },

  //CSS Botão Imagem

  BtCriar: {
    transform: [
      { translateX: 34 },
      { translateY: -22 },
    ],
    fontSize: 20,
    backgroundColor: '#419ED7',
    alignSelf: 'center',
    fontFamily: 'AveriaLibre-Regular',
    elevation: 8,
  },

  imgV: {
    // resizeMode: 'contain',
    height: 100,
    width: 190,
    transform: [
      { translateX:128 },
      { translateY: -10 },
    ],
  },

  text: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    color: '#fff',
    fontVariant: 'Bold',
  },

  bt: {
    paddingTop: 10,
    paddingBottom: 80,
  },



  //Controle Botão Excluir

  btExcluir: {
    fontSize: 20,
    backgroundColor: '#FD7979',
    alignSelf: 'center',
    fontFamily: 'AveriaLibre-Regular',
    marginHorizontal: 80,
    marginVertical: 30,
    elevation: 8,
    flexDirection: 'row',
  },

  textBotaoExcluir: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
    marginVertical: 8,
    marginHorizontal: 8,
    fontVariant: 'Bold',
  },
  imgBtExcluir: {
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 8,

  },


})

export { estilos };

