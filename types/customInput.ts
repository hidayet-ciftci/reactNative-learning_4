import { KeyboardTypeOptions } from "react-native";
export interface CustomInputProps {
  control: any;
  name: string;
  rules?: object;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}
