import api from "../api/api.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authService = {
    login: async (email, password) => {
        try {
            const response = await api.post("/users/login", {
                email,
                password,
            });

            const {token, user} = response.data || {};

            if (token) {
                await AsyncStorage.setItem("userToken", token);
            }

            if (user) {
                await AsyncStorage.setItem("userData", JSON.stringify(user));
            } else {
                await AsyncStorage.removeItem("userData");
            }

            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Đăng xuất
    logout: async () => {
        try {
            await AsyncStorage.removeItem("userToken");
            await AsyncStorage.removeItem("userData");
        } catch (error) {
            console.error("Logout error:", error);
        }
    },

    // Lấy thông tin user
    getCurrentUser: async () => {
        try {
            const userData = await AsyncStorage.getItem("userData");
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error("Get user error:", error);
            return null;
        }
    },
};
