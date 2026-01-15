import { View, Text, Image } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const AuthLayout = () => {
  return (
    <View className="flex-1 px-4  justify-center pt-12 bg-[#FAFAFA] flex-col ">
      <Image
        source={require("../../assets/favicon.png")}
        className="w-12 h-12 mx-auto mb-6 bg-[#FAFAFA]"
        resizeMode="contain"
      />
      <Slot />
    </View>
  );
};

export default AuthLayout;
