import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        color: '#2c2c30',
    },
    subtitle: {
        justifyContent: 'center',
        alignItems: 'center',
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