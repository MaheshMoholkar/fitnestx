import { Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  icon,
  containerStyles,
  textStyles,
  isLoading,
}: {
  title: string;
  handlePress: () => void;
  icon?: any,
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
      disabled={isLoading}
    >
      <View className="flex flex-row justify-center items-center">
        {icon &&
          <Image
            source={icon}
            className="w-6 h-6 mr-3 opacity-60"
            resizeMode="contain"
          />
        }
        <Text className={`font-semibold text-lg ${textStyles}`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
