import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../utils/Styles";
import validator from "validator";
import { authService } from "../../services/auth/authServices.js";
import { useAuth } from "../../contexts/AuthContext.js";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [generalError, setGeneralError] = React.useState("");
  const { signIn } = useAuth();

  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email không được để trống");
      return false;
    }
    if (!validator.isEmail(email)) {
      setEmailError("Email không hợp lệ");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("Mật khẩu không được để trống");
      return false;
    }
    if (password.length < 8) {
      setPasswordError("Mật khẩu phải có ít nhất 8 ký tự");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (emailError && text) {
      setEmailError("");
    }
    if (generalError) {
      setGeneralError("");
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (passwordError && text) {
      setPasswordError("");
    }
    if (generalError) {
      setGeneralError("");
    }
  };

  const handleLogin = async () => {
    setGeneralError("");

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    setLoading(true);

    try {
      const { data } = await authService.login(email, password);
      await signIn(data.user, data.token);
    } catch (error) {
      let errorMessage = "Đăng nhập thất bại";
      if (error.message) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      } else if (error.error) {
        errorMessage = error.error;
      }
      setGeneralError(errorMessage);
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
      {generalError ? (
        <Text style={styles.errorText}>{generalError}</Text>
      ) : null}
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={[styles.input, emailError ? styles.inputError : null]}
          value={email}
          onChangeText={handleEmailChange}
          onBlur={() => {
            validateEmail(email);
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <Text style={styles.inputTitle}>Mật khẩu</Text>
        <TextInput
          style={[styles.input, passwordError ? styles.inputError : null]}
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
          editable={!loading}
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.mainButton, loading && styles.disabledButton]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.mainButtonText}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Text>
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
