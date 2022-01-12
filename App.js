/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
   Button,
   FlatList,
   SafeAreaView,
   StyleSheet,
   Text,
   TextInput,
   View,
} from 'react-native';
import React, { useState } from 'react';

import Task from './src/screens/task/index';

const App = () => {

return (
<SafeAreaView style={styles.container}>
  <Task />
</SafeAreaView>
)

   };    

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

export default App;
