import { handleLogin } from "@/services/login";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const LoginScreen = () => {
  const [username, setUsername] = useState<string>("emilys");
  const [password, setPassword] = useState<string>("emilyspass");

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Giriş yap</Text>
      </View>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Şifre"
        secureTextEntry
      />
      <Button
        title="Giriş Yap"
        onPress={() => {
          handleLogin(username, password);
        }}
      />
      <View style={styles.register}>
        <Text style={[{ color: "white" }]}>Hesabın yok mu? </Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/(tabs)/register");
          }}
        >
          <Text style={styles.btnSize}>Kayıt ol </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, gap: 5 },
  title: {
    color: "white",
    fontSize: 40,
  },
  titleView: {
    marginBottom: 25,
    alignItems: "center",
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  btnSize: {
    textDecorationLine: "underline",
    color: "blue",
  },
  register: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default LoginScreen;
