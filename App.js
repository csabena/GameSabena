/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
   KeyboardAvoidingView,
   SafeAreaView,
   StyleSheet,
   View
} from 'react-native';
import React, { useState } from 'react';

import GameOverScreen from './src/screens/gameover';
import GameScreen from './src/screens/gameScreen/index';
import GameStart from './src/screens/gameStart/index';
import Header from './src/components/molecules/header';

const App = () => {
  const [userNumber, setUserNumber] = useState('');
  const [guessRounds, setGuessRounds] = useState(0);

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  } 
  const handlerGameOver = rounds => {
    setGuessRounds(rounds)
  }

  const handlerRestart = () => {
    setGuessRounds(0);
    setUserNumber('');
  }

  let content = userNumber && guessRounds <= 0 ? 
    <GameScreen userOption={userNumber} onGameOver={handlerGameOver}/> : guessRounds > 0 ?
    <GameOverScreen rounds={guessRounds} choice={userNumber} onRestart={handlerRestart} /> :
    <GameStart onStartGame={handlerStartGame} />

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.container}>
      <Header title="Adivina el número" />
        {content}
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};   

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

  });

export default App;