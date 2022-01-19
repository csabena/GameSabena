import {Alert, Button, Text, View} from 'react-native';
import React, { useEffect, useRef, useState } from "react";

import Numbers from "../../atoms/numbers";
import {generateRandomNumber} from '../../utils/functions';
import {styles} from './styles';
import { theme } from '../../utils/contants/theme';

const GameScreen = (props) => {

    const { userOption, onGameOver } = props;

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(0, 100, userOption));

    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess == userOption) onGameOver(rounds)},
        [currentGuess, userOption, onGameOver]
    );

    const handlerNextGuess = (direction) => {
        if(
            (direction === 'lower' && currentGuess < userOption) ||
            (direction === 'greater' && currentGuess > userOption)
        ) {
            Alert.alert('No mientas', 'Sabés que no es verdad...!', [
                { text: 'Disculpá', style: 'Cancelar' }
            ])
        }

        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(current => current + 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>La suposición del oponente</Text>
            <Numbers number={currentGuess} />
            <View style={styles.buttonContainer}>
                <Button title='Menor' onPress={() => handlerNextGuess('lower')}/>
                <Button title='Mayor' onPress={() => handlerNextGuess('greater')}/>

            </View>


        </View>

    )
}

export default GameScreen;