import api from "./api";

export const authService = {
  login: async (email, password) => {
    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });

      if (response.data.token) {
        await AsyncStorage.setItem("userToken", response.data.token);
        await AsyncStorage.setItem(
          "userData",
          JSON.stringify(response.data.user)
        );
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
