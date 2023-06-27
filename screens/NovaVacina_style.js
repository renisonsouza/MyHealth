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
    alignItems:'center',
    
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
  tagForm4: {

    transform: [{ translateY: 90 }],
    transform: [{ translateX: 16 }],
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
    fontSize: 17,
    paddingRight: 8,
    paddingTop: 11,
  },

  //CSS Botão Imagem

  BtImg: {
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
    resizeMode: 'contain',
    height: 100,
    width: 250,

    transform: [
      { translateX:100 },
      { translateY: -18 },
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
    
    transform: [{ translateY: 120 }],
  }
})

export { estilos };

