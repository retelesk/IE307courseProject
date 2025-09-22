import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../utils/Styles";
import validator from "validator";
import { Alert } from "react-native";
import authService from "../../services/authService";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const validateEmail = (email) => {
    if (!email) {
      setError("Email không đươợc để trống");
      return false;
    }
    if (!validator.isEmail(email)) {
      setError("Email không hợp lệ");
      return false;
    }
    setError("");
    return true;
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (error && text) {
      setError("");
    }
  };
  const handleLogin = async () => {
    if (!validateEmail(email)) {
      return;
    }
    if (!password) {
      setError("Mật khẩu không được để trống");
    }
    if (password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự");
    }
    setLoading(true);
    setError("");

    try {
      const response = await authService.login(email, password);

      Alert.alert("Thành công", "Đăng nhập thành công");

      navigation.reset({
        index: 0,
        routes: [{ name: "DashboardScreen" }],
      });
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);

      let errorMessage = "Đăng nhập thất bại";
      if (error.message) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      } else if (error.error) {
        errorMessage = error.error;
      }

      Alert.alert("Lỗi", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/wallet-solid-full.png")}
        />
        <Text style={styles.welcomeText}>BudgetNest</Text>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          value={email}
          onChangeText={setEmail}
          onChange={handleEmailChange}
          onBlur={() => {
            validateEmail(email);
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading}
        />
        <Text style={styles.inputTitle}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          editable={!loading}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.mainButton, loading && styles.disabledButton]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.mainButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPasswordScreen");
          }}
        >
          <Text style={styles.subButtonText}>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.inputTitle}>Chưa có tài khoản?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          <Text style={styles.subButtonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
