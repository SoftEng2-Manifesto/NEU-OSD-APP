import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const Login = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hovered, setHovered] = useState(false);

  // Validate email
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Validate password
  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  // Handle login
  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    let valid = true;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (valid) {
      onLoginSuccess();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO NEU OSD!</Text>
      <Image style={styles.logo} source={require('@/assets/images/neu-logo.png')} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError && <Text style={styles.errorText}>{emailError}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* forgot password link with hover effect */}
      <TouchableOpacity
        style={[styles.forgotPasswordLink, hovered && styles.forgotPasswordHovered]} // Apply hover style
        onPress={() => Alert.alert('Forgot Password functionality not implemented')}
        onPressIn={() => setHovered(true)} 
        onPressOut={() => setHovered(false)}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: 'center',
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 15,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    width: "100%",
    textAlign: "left",
  },
  button: {
    backgroundColor: '#000053',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordLink: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#0066cc',
    fontSize: 14,
    fontWeight: 'bold',
  },
  forgotPasswordHovered: {
    backgroundColor: '#e6f1ff',
    borderRadius: 5,
    padding: 5,
  },
});

export default Login;