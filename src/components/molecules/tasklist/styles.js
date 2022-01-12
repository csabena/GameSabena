import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
    textList: {
      flex: 0.9,
      padding: 5,
      marginVertical: 3,
      backgroundColor: '#389bff',
      fontSize: 14,
      color: 'white',
    },
    containerDelete: {
      flex: 0.1,
      marginVertical: 3,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    delete: {
      margin: 0,
      color: '#ffffff',
      fontWeight: 'bold',
    }
  });