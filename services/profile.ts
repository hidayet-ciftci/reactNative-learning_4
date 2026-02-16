import { profile } from "@/app/profile";
import { API_PROFILE } from "@/constants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
export const fetchUserProfile = async () => {
  try {
    const token = await AsyncStorage.getItem("user_Token");
    if (!token) {
      return null;
    }
    const response = await fetch(API_PROFILE, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    const data = await response.json();
    if (!response.ok) return null;
    if (data.id) {
      return data as profile;
    } else throw new Error("empty data");
  } catch (error) {
    console.error("Profil Yükleme Hatası:", error);
    Alert.alert("Hata", "Veri çekilemedi.");
    return null;
  }
};
