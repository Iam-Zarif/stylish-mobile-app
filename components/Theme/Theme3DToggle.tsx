import React from "react";
import { Text, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../provider/ThemeContext";

const Theme3DToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const shadow = useSharedValue(0.35);
        
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 600 },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    shadowOpacity: shadow.value,
  }));

  const onPressIn = () => {
    translateY.value = withSpring(4);
    scale.value = withSpring(0.97);
    shadow.value = withSpring(0.15);
  };

  const onPressOut = () => {
    translateY.value = withSpring(0);
    scale.value = withSpring(1);
    shadow.value = withSpring(0.35);
    toggleTheme(); // toggle dark/light
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={animatedStyle}
        className={`flex-row items-center justify-between px-5 py-4 rounded-2xl ${
          isDark
            ? "bg-neutral-900 shadow-black"
            : "bg-white shadow-neutral-400"
        }`}
      >
        <Text
          className={`text-base font-semibold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Dark Mode
        </Text>

        <Ionicons
          name={isDark ? "moon" : "sunny"}
          size={22}
          color={isDark ? "#FACC15" : "#F97316"}
        />
      </Animated.View>
    </Pressable>
  );
};

export default Theme3DToggle;
