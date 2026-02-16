import { user } from "@/app/(tabs)/register";
import { API_REGISTER } from "@/constants/config";

export const handleSubmit = async (user: user) => {
  try {
    const response = await fetch(API_REGISTER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user, age: Number(user.age) }),
    });
    if (!response.ok) throw new Error("connection error");
    const data = await response.json();
    console.log(data); // to show response
    if (data.id) return true;
    else return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
