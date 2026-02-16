import { API_LOGIN } from "@/constants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Alert } from "react-native";
export const handleLogin = async (username: string, password: string) => {
  try {
    const response = await fetch(API_LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30,
      }),
    });
    if (!response.ok) {
      Alert.alert("Hata", "şifre veya kullanıcı adı yanlış");
      return;
    }
    const data = await response.json();
    if (data.accessToken) {
      await AsyncStorage.setItem("user_Token", data.accessToken);
      console.log("giriş yapıldı");
    } else throw new Error("token hatası");
    router.push("/profile");
  } catch (error) {
    console.error("Bir hata oluştu:", error);
    Alert.alert("Hata", "Bağlantı hatası!");
  }
};
