import { View, Text, Image } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const _layout = () => {
  return (
    <>
      <Image
        source={require("../../assets/favicon.png")}
        className="w-12  mx-auto mt-4 h-12 mb-1"
        resizeMode="contain"
      />
      <Slot/>
    </>
  );
};

export default _layout;
