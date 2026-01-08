import React, { useState, useRef } from "react";
import { View, Image, Pressable, Dimensions, Animated, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Menu from "./Menu";
import NavItems from "./NavItems";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../provider/ThemeContext";

const { width } = Dimensions.get("window");

interface NavbarProps {
  onDrawerChange?: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDrawerChange }) => {
  const { isDark } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const drawerAnim = useRef(new Animated.Value(-width)).current;

  const openDrawer = () => {
    setDrawerOpen(true);
    onDrawerChange?.(true);
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnim, {
      toValue: -width,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setDrawerOpen(false);
      onDrawerChange?.(false);
    });
  };

  return (
    <SafeAreaView
      edges={["top"]}
      className={`border rounded-full z-50 ${
        isDark ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
      }`}
    >
      <View
        className={`flex-row shadow-sm rounded-full items-center justify-between py-1.5 px-3 ${
          isDark ? "shadow-black" : "shadow-neutral-300"
        }`}
      >
        <Pressable onPress={openDrawer}>
          <Menu />
        </Pressable>

        <View className="flex-row items-center gap-2">
          <Image
            source={require("../../assets/favicon.png")}
            className="w-10 h-10"
            resizeMode="contain"
          />
          <Text
            className={`font-bold font-libre ${
              isDark ? "text-white" : "text-[#4392F9]"
            }`}
          >
            Stylish
          </Text>
        </View>

        <Image
          source={{ uri: "https://i.ibb.co/67fpNVMH/profile.jpg" }}
          className="w-10 h-10 rounded-full"
          resizeMode="cover"
        />
      </View>

      {drawerOpen && (
        <View className="absolute top-0 left-0 w-screen h-screen z-[1000]">
          <Pressable
            className="absolute top-0 left-0 w-screen h-screen bg-black/25"
            onPress={closeDrawer}
          />

          <Animated.View
            style={{ left: drawerAnim }}
            className={`absolute top-0 h-screen w-screen p-4 shadow-xl ${
              isDark ? "bg-neutral-900" : "bg-white"
            }`}
          >
            <Pressable onPress={closeDrawer} className="absolute top-5 right-5">
              <Ionicons
                name="close"
                size={28}
                color={isDark ? "#FACC15" : "#F83758"}
              />
            </Pressable>

            <NavItems
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              onSelect={closeDrawer}
            />
          </Animated.View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Navbar;
