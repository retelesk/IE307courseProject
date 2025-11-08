import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useAuth} from "../../contexts/AuthContext";
import {authService} from "../../services/auth/authServices";
import React from "react";

export default function UserScreen() {
    const {user, signOut} = useAuth();
    const [loading, setLoading] = React.useState(false);


    const handleLogout = async () => {
        setLoading(true);
        try {
            await authService.logout();
            await signOut();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return <View style={styles.viewWrapper}>
        <View style={styles.userInfoBox}>
            <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>FullName: {user ? user.fullname : ""}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>Email: {user ? user.email : ""}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>Phone: {user ? user.phone : ""}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>Address: {user ? user.address : ""}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>Role: {user ? user.role : ""}</Text>
            </View>

        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </View>;
}

const styles = StyleSheet.create({
    viewWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfoBox: {
        width: '80%',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    userInfo: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 5,
    },
    userInfoText: {
        fontSize: 16,
    },
    button: {
        backgroundColor: '#25215E',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});