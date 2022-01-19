import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 0.25,
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 1,
        marginHorizontal: 30,
        marginVertical: 20,
        backgroundColor: '#fafafa',
    },
    text: {
        fontSize: 16,
        color: '#2c2c30',
    },
    buttonContainer: {
        width: '100%',
        flexGrow: 0.05,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});