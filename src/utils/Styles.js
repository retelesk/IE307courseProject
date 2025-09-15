import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        rowGap: 20,
        paddingTop: "30%"
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
        marginBottom: 20,
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    welcomeText: {
        color: "#25215E",
        fontWeight: "bold",
        fontSize: 22,
        textTransform: "uppercase",
    },
    inputContainer: {
        width: "80%",
        rowGap: 10,
        marginBottom: 20,
    },
    inputTitle: {
        color: "#25215E",
        fontWeight: "bold",
        fontSize: 16,
    },
    input: {
        height: 40,
        borderColor: "#25215E",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: "80%",
        rowGap: 10,
        alignItems: "center"
    },
    mainButton: {
        backgroundColor: "#25215E",
        paddingVertical: 10,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
    },
    mainButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 18,
    },
    subButtonText: {
        color: "#25215E",
        fontSize: 16,
    },
    spacer: {
        flex: 1,
    },
    footerContainer: {
        width: "80%",
        rowGap: 5,
        alignItems: "center",
        marginBottom: 50,
        marginTop: 'auto'
    }

})