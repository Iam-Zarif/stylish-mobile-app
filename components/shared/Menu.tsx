import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const Menu = () => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M4 5h16" />
        <Path d="M4 12h16" />
        <Path d="M4 19h16" />
      </Svg>
    </View>
  );
};

export default Menu;
