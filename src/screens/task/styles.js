import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    formContainer: {
      flexDirection: 'row', 
      padding: 20,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    textInput : {
      flex: 0.8,
      borderBottomWidth: 1, 
      borderBottomColor: '#cccccc',
    },
    taskListTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#2c2c30',
    },
    taskListContainer: {
      paddingHorizontal: 40,
      marginTop: 10,
    },
    textList: {
      padding: 50,
      marginVertical: 20,
      backgroundColor: '#9191E9',
      fontSize: 30,
    },
    doneTaskListTitle: {
      marginTop: 20,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#827a7a',
    },
});