import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';
import RecConta from './RecConta';
import CriarConta from './CriarConta';
import NovaVacina from './NovaVacina';
import MyDrawer from '../components/MyDrawer';
import EditVacina from './EditVacina';
import ProxVacina from './Prox.Vacina';

const Stack = createStackNavigator()
const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerTintColor: '#ADD4D0', headerTintStyle: { color: '#fff' }, headerTitleStyle: { fontFamily: 'AveriaLibre-Regular', fontSize: 30, color: '#419ED7' }, headerStyle: { backgroundColor: '#C1E7E3' } }}>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
                <Stack.Screen name="Minhas Vacinas" component={Home} />
                <Stack.Screen name="Recuperar Conta" component={RecConta} options={{headerTitle: 'MyHealth' }} />
                <Stack.Screen name="Nova Conta" component={CriarConta} />
                <Stack.Screen name="Nova Vacina" component={NovaVacina} />
                <Stack.Screen name="Editar Vacina" component={EditVacina} />
                <Stack.Screen name="Proxima Vacina" component={ProxVacina} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;