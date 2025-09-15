import React from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../../utils/Styles";

const ForgotPasswordScreen = ({navigation}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState(false);
    const [errorText, setErrorText] = React.useState("");
    let userData = {}
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/icons/wallet-solid-full.png')}/>
                <Text style={styles.welcomeText}>Quên mật khẩu?</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail}/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.mainButton} onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'DashboardScreen'}],
                        params: {user: userData}
                    });
                }}>
                    <Text style={styles.mainButtonText}>Đặt lại mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('LoginScreen')
                }}>
                    <Text style={styles.subButtonText}>Quay lại đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ForgotPasswordScreen;