import React, { useState, useRef } from "react";
import { View, Image, Pressable, Dimensions, Animated, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Menu from "./Menu";
import NavItems from "./NavItems";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

interface NavbarProps {
  onDrawerChange?: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDrawerChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const drawerAnim = useRef(new Animated.Value(-width)).current;

  const toggleDrawer = () => {
    if (!drawerOpen) {
      setDrawerOpen(true);
      onDrawerChange?.(true);
      Animated.timing(drawerAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(drawerAnim, {
        toValue: -width,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setDrawerOpen(false);
        onDrawerChange?.(false);
      });
    }
  };

  return (
    <SafeAreaView edges={["top"]} className="bg-white z-50">
      <View className="flex-row shadow-sm shadow-neutral-300 rounded-full items-center justify-between py-1 px-3">
        <Pressable onPress={toggleDrawer}>
          <Menu />
        </Pressable>

        <View className="flex-row items-center gap-2">
          <Image
            source={require("../../assets/favicon.png")}
            className="w-10 h-10"
            resizeMode="contain"
          />
          <Text className="text-[#4392F9] font-bold font-libre">Stylish</Text>
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
            onPress={toggleDrawer}
          />

          <Animated.View
            style={{ left: drawerAnim }}
            className="absolute top-0 h-screen w-screen bg-white p-4 shadow-xl"
          >
            <Pressable onPress={toggleDrawer} className="absolute top-5 right-5">
              <Ionicons name="close" size={28} color="#F83758" />
            </Pressable>

            <NavItems activeItem={activeItem} setActiveItem={setActiveItem} />
          </Animated.View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Navbar;
