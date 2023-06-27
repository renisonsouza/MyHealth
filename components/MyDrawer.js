import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from 'react-native';
import Home from "../screens/Home";
import CustomComponent from '../components/CustomComponent';
import ProxVacina from "../screens/Prox.Vacina";

const Drawer = createDrawerNavigator()
const MyDrawer = (props) => {

    return (

        <Drawer.Navigator drawerContent={(props) => <CustomComponent {...props} />} initialRouteName="Minhas Vacinas" screenOptions={{ drawerLabelStyle: { color: '#419ED7' }, headerTitleStyle: { fontFamily: 'AveriaLibre-Regular', fontSize: 28, color: '#419ED7' }, headerTintColor: '#ADD4D0', headerStyle: { backgroundColor: '#C1E7E3' } }}>

            <Drawer.Screen name="Minhas Vacinas" component={Home} options={{
                drawerIcon: () => (<Image style={{ width: 30, height: 30, marginRight: -25 }} source={require('../assets/images/icone.png')} />
                )
            }} />
            <Drawer.Screen name="Proximas Vacinas" component={ProxVacina} options={{
                drawerIcon: () => (<Image style={{ width: 30, height: 30, marginRight: -25 }} source={require('../assets/images/calendario2.png')} />
                )
            }} />
        </Drawer.Navigator>
    )
}

export default MyDrawer 