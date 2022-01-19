import { Button, Dimensions, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import Numbers from '../../atoms/numbers';
import { styles } from './styles';
import { theme } from '../../utils/contants/theme';

const GameOverScreen = (props) => {
    const { rounds, choice, onRestart } = props;
    const [isPortrait, setIsPortrait] = useState(true);

    const onPortrait = () => {
        const dim = Dimensions.get('window');
        return dim.height >= dim.width;
    }

    const statePortrait = () => {
        setIsPortrait(onPortrait());
    }

    useEffect(() => {
        Dimensions.addEventListener('change', statePortrait);
        return () => {
            Dimensions.removeEventListener('change', statePortrait);
        }
    })
    
    return (
        <View style={styles.container}>
            <Text>GAME OVER</Text>
            <Text style={styles.text}>Intentos: {rounds}</Text>
            <Numbers number={choice} />
            <View style={styles.buttonContainer}>
                <Button title="Nuevo Juego" onPress={() => onRestart && onRestart()} color={theme.primaryColor}/>
            </View>
        </View>
    )
}

export default GameOverScreen;