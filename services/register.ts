import { user } from "@/app/(tabs)/register";
import { API_REGISTER, FAKE_TOKEN } from "@/constants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const handleSubmit = async (user: user) => {
  try {
    const response = await axios.post(API_REGISTER, {
      ...user,
      age: Number(user.age),
    });
    const data = response.data;
    console.log(data); // to show response
    if (data.id) {
      await AsyncStorage.setItem("user_Token", FAKE_TOKEN);
      return true;
    } else return false;
  } catch (error: any) {
    console.error(error);
    return false;
  }
};
