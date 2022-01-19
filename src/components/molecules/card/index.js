import { Button, Text, TextInput, View } from "react-native";

import Input from "../../../atoms/input";
import React from "react";
import { styles } from './styles';
import { theme } from "../../../utils/contants/theme";

const Card = ({title = 'valor por defecto', color, type, handleOnChange, value, autoFocus, autoComplete, keyboardType, handleOnClean, handleOnConfirm }) => {

    return (
        <View style={[styles.container, {backgroundColor: type === '1' ? theme.secondaryColor : theme.secondaryVariantColor} ]}>
            <Text style={styles.text}>{title}</Text>
            <Input autoFocus={autoFocus} autoComplete={autoComplete} keyboardType={keyboardType} onChangeText={handleOnChange} value={value} />
            <View style={styles.buttonContainer}>
                <Button title='Limpiar' color={color} onPress={() => handleOnClean()}/>
                <Button title='Confirmar' color={color} onPress={() => handleOnConfirm()} />
            </View>
        </View>
    )
};

export default Card;