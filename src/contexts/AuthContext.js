import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoading: true,
    user: null,
    token: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("auth:session");
        if (stored) setAuthState({ isLoading: false, ...JSON.parse(stored) });
        else setAuthState({ isLoading: false, user: null, token: null });
      } catch (e) {
        console.warn("Auth bootstrap failed", e);
        setAuthState({ isLoading: false, user: null, token: null });
      }
    })();
  }, []);

  const actions = useMemo(
    () => ({
      signIn: async (user, token) => {
        const session = { user, token };
        await AsyncStorage.setItem("auth:session", JSON.stringify(session));
        setAuthState({ isLoading: false, ...session });
      },
      signOut: async () => {
        await AsyncStorage.removeItem("auth:session");
        setAuthState({ isLoading: false, user: null, token: null });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ ...authState, ...actions }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
