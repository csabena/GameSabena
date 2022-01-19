import { TextInput, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Input = ({onChangeText, ...props}) => {    // {...props} -> hereda todas las propiedades
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} {...props} onChangeText={(value) => onChangeText(value)}/>
        </View>
    )
}

export default Input;