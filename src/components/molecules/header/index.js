import { Text, View } from "react-native";

import React from "react";
import { styles } from './styles';

/*
      3 FORMAS DE PASAR PROPIEDADES
*/

/* 
const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
};
*/
/*
const Header = (props) => {
    const { title } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ title }</Text>
        </View>
    )
};
*/
const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

export default Header;