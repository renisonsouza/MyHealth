import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, TouchableOpacity, Button, } from "react-native";
import React, { useState, useEffect } from 'react';

const CustomComponent = (props) => {

    return (
        <DrawerContentScrollView style={estilos.form}>
            <Text style={estilos.tx}>Olá </Text>
            <DrawerItemList {...props} />
            <DrawerItem icon={() => <Image source={require('../assets/images/sair.png')} style={{ width: 26, height: 26, marginRight: -25 }} />} style={estilos.form} label="Sair" labelStyle={{ color: '#419ED7', fontSize: 14, fontFamily: 'AveriaLibre-Regular', }} 
            
            onPress={() => {
                props.navigation.push('Login')
            }} />
        </DrawerContentScrollView>
    )
}

const estilos = StyleSheet.create({
    form: {
        backgroundColor: "#ADD4D0",
    },

    tx: {
        padding: 30,
        alignSelf: 'center',
        fontSize: 30,
        fontFamily: 'AveriaLibre-Regular',
        color: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#419ED7',
        marginBottom:30,
    },
});

export default CustomComponent;