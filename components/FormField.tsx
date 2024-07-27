import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import  icons  from "../constants/Icons";
import { Image } from "react-native";

const FormField = ({
  title,
  value,
  placeholder,
  icon,
  handleChangeText,
  otherStyles,
}: {
  title: string;
  value: string;
  icon: any
  placeholder: string;
  handleChangeText: (e: string) => void;
  otherStyles: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <View className="rounded-2xl items-center w-full h-14 px-4 bg-zinc-50 flex-row">
        <Image
          source={icon}
          className="w-6 h-6 mr-3 opacity-60"
          resizeMode="contain"
        />
        <TextInput
          className="flex-1 font-semibold text-base w-full"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 opacity-60"
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormField;
