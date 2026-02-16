import { handleSubmit } from "@/services/register";
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export interface user {
  firstName: string;
  lastName: string;
  age: string;
  username: string;
  password: string;
}
const LoginScreen = () => {
  const [user, setUser] = useState<user>({
    firstName: "",
    lastName: "",
    age: "",
    username: "",
    password: "",
  });

  const handleRegister = async () => {
    if (await handleSubmit(user)) {
      setUser({
        firstName: "",
        lastName: "",
        age: "",
        username: "",
        password: "",
      });
      router.push({
        pathname: "/(tabs)",
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>kayıt ol</Text>
      </View>
      <TextInput
        style={styles.input}
        value={user.firstName}
        onChangeText={(text) => {
          setUser({ ...user, firstName: text });
        }}
        placeholder="Firstname"
      />
      <TextInput
        style={styles.input}
        value={user.lastName}
        onChangeText={(text) => {
          setUser({ ...user, lastName: text });
        }}
        placeholder="Lastname"
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={user.age}
        onChangeText={(text) => {
          const numericValue = text.replace(/[^0-9]/g, "");
          setUser({
            ...user,
            age: numericValue,
          });
        }}
        placeholder="age"
      />
      <TextInput
        style={styles.input}
        value={user.username}
        onChangeText={(text) => {
          setUser({ ...user, username: text });
        }}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={user.password}
        onChangeText={(text) => {
          setUser({ ...user, password: text });
        }}
        placeholder="Şifre"
        secureTextEntry
      />
      <Button title="Kayıt ol" onPress={handleRegister} />
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
