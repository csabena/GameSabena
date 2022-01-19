import { Button, Text, View } from 'react-native';
import React, { useState } from "react";

import Card from '../../components/molecules/card';
import Numbers from '../../atoms/numbers';
import Title from '../../atoms/title';
import { components } from "../../utils/contants/components";
import {styles} from './styles';
import { theme } from "../../utils/contants/theme";

const GameStart = ({onStartGame}) => {
  
    const [number, setNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [startGame, setStartGame] = useState(false);
    
    const handleOnChange = (inputNumber) => {
        console.warn(inputNumber);
        setNumber(inputNumber.replace(/[^0-9]/g, ''));
        //setNumber(inputNumber);
    };
  
    const handleOnClean = () => {
      setNumber('');
    };
  
    const handleOnConfirm = () => {
      const choseNumber = parseInt(number);
      if( isNaN(choseNumber) || choseNumber < 0 || choseNumber > 99) return
      setConfirmed(true);
      setSelectedNumber(choseNumber);
      setNumber('');
      console.warn(choseNumber);
    };
  
    const handleStartGame = () => {
        onStartGame(selectedNumber);
      setStartGame(true);
    };
  
    const confirmedOutput = confirmed ? (
      <View style={styles.confirmedContainer}>
        <Text style={styles.confirmedText}>Número elegido:</Text>
        <Numbers number={selectedNumber} />
        <Button title='Empezar juego' onPress={() => handleStartGame()} color='green'/>
      </View>
    ) : null;
  
    return (
        <View style={styles.container}> 
            <Title title="Comienza el juego" />
            <Card 
                title="Elija el número" 
                type={components.card.DARK} 
                color={theme.primaryColor} 
                handleOnChange={handleOnChange} 
                value={number} 
                autoFocus={true} 
                autoComplete='off' 
                keyboardType='numeric' 
                handleOnClean={handleOnClean}
                handleOnConfirm={handleOnConfirm}
            />
            {confirmedOutput}
        </View>
    )
}

export default GameStart;