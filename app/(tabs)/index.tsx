import CustomInput from "@/components/customInput";
import { handleLogin } from "@/services/login";
import { router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const LoginScreen = () => {
  /*   
  const [username, setUsername] = useState<string>("emilys");
  const [password, setPassword] = useState<string>("emilyspass"); 
  UseForm ile default değerleri aktarıyoruz
  */

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "emilys", // Varsayılan değerleri buraya yazıyoruz
      password: "emilyspass",
    },
  });

  const checkLogin = async (data: { username: string; password: string }) => {
    if (await handleLogin(data.username, data.password)) {
      // checkLogin'e form'dan gelen datayı gönderdik
      console.log("giriş yapıldı");
      router.replace("/profile");
    } else {
      console.log("wrong login");
      Alert.alert("Wrong password or Username", "try again");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Giriş yap</Text>
      </View>
      <CustomInput
        name="username"
        placeholder="Kullanici adi"
        control={control}
        rules={{
          required: "kullanici adi zorunludur",
          minLength: { value: 3, message: "en az 3 karakter olmalıdır" },
        }}
      />
      <CustomInput
        name="password"
        placeholder="Şifre"
        secureTextEntry
        control={control}
        rules={{
          required: "Şifre zorunludur",
          minLength: { value: 6, message: "Şifre çok kısa" },
        }}
      />
      <Button title="Giriş Yap" onPress={handleSubmit(checkLogin)} />
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
