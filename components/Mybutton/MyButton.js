//Importar componentes
import { Text, TouchableOpacity} from "react-native";
import { estilos } from "./MyButton_style";

//Definiçãocomponentes

const MyButton = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress} style= {estilos.touch}>
            <Text style= {estilos.text}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

//Exportação

export default MyButton