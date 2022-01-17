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

import DoneTaskList from '../../components/molecules/donetasklist/index';
import TaskList from '../../components/molecules/tasklist/index';
import { styles } from './styles';

const Task = () => {
   const [task, setTask] = useState('');
   const [taskList, setTaskList] = useState([]);
   const [doneTask, setDoneTask] = useState('');
   const [doneList, setDoneList] = useState([]);
 
   const onChange = (text) => {
     setTask(text);
   }
 
   const addTask = () => {
     setTaskList([...taskList, {id: Math.random() , task}]);
     setTask('');
   }
 
   const deteleTask = (id) => {
     setDoneList([...doneList, taskList.find(task => task.id == id)]);
     //setDoneList(taskList.filter(task => task.id == id));
     setTaskList(taskList.filter(task => task.id !== id));
   }
   

 
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.formContainer}>
         <TextInput 
           autoFocus
           style={styles.textInput} 
           placeholder='Ingrese tarea'
           onChangeText={(text) => onChange(text)}
           value={task}
         />
         <Button
           onPress={() => addTask()}
           title='Agregar'
           color='#389bff'
           disabled={task.trim().length === 0}
           />
       </View>
         <View style={styles.taskListContainer}>
           <Text style={styles.taskListTitle}>Lista de tareas</Text>
           {taskList.length > 0 ? (
             <FlatList
               keyExtractor={(item) => item.id.toString()}
               refreshing={true}
               data={taskList}
               renderItem={({item}) => <TaskList task={item} deleteTask={deteleTask} /> }
             />
           ) : (
             <Text>Lista vacía</Text>
           )}
         </View>
         <View style={styles.taskListContainer}>
           <Text style={styles.doneTaskListTitle}>Tareas realizadas</Text>
           {doneList.length > 0 ? (
             <FlatList
               refreshing={true}
               data={doneList}
               renderItem={({item}) => <DoneTaskList task={item} /> }
             />
           ) : (
             <Text>Lista vacía</Text>
           )}
         </View>
     </SafeAreaView>
   );
 };
 
 export default Task;