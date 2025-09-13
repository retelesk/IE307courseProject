import React from "react";
import {Button, Image, StyleSheet, Text, View} from "react-native";

const FinancialManagerApp = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./assets/wallet-solid-full.png')}/>
            <Text style={styles.welcomeText}>Finance Manager App</Text>
            <View style={styles.buttonContainer}>
                <Button color="#25215E"
                        title="Login"
                        onPress={() => {
                            alert("Login");
                        }}
                />
                <Button color="#25215E" title="Register" onPress={() => {
                    alert("Register");
                }}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        rowGap: 20,
    },
    welcomeText: {
        color: "#25215E",
        fontWeight: "bold",
        fontSize: 22,
        textTransform: "uppercase",
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    button: {
        color: '#FBAC42'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "60%",
        columnGap: 10,
    }
});

export default FinancialManagerApp;
