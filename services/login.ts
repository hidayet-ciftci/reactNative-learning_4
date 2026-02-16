import { API_LOGIN } from "@/constants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";
interface user {
  username: string;
  password: string;
  expiresInMins: number;
}
export const handleLogin = async (username: string, password: string) => {
  const user: user = {
    username: username,
    password: password,
    expiresInMins: 30,
  };
  try {
    const response = await axios.post(API_LOGIN, user, { timeout: 10000 });
    const data = response.data;
    if (data.accessToken) {
      await AsyncStorage.setItem("user_Token", data.accessToken);
      return true;
    } else throw new Error("token hatası");
  } catch (error: any) {
    console.error("Bir hata oluştu:", error);
    Alert.alert("Hata", "Bağlantı hatası!");
    return false;
  }
};
