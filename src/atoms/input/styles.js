import { StyleSheet } from "react-native";
import { theme } from "../../utils/contants/theme";

export const styles = StyleSheet.create({
    container: {
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0.10,
        backgroundColor: theme.white,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: theme.white,
    }
});