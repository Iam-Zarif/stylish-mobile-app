import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  Animated,
} from "react-native";
import Menu from "./Menu";
import { Ionicons } from "@expo/vector-icons";
import NavItems from "./NavItems";

const { width } = Dimensions.get("window");
const DRAWER_WIDTH = width * 1; 

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const drawerAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;

  const toggleDrawer = () => {
    if (!drawerOpen) {
      setDrawerOpen(true);
      Animated.timing(drawerAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(drawerAnim, {
        toValue: -DRAWER_WIDTH,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setDrawerOpen(false));
    }
  };

  return (
    <>
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
        <View style={{ position: "absolute", top: 0, left: 0, width, height: "100%", zIndex: 999 }}>
          <Pressable
            style={{
              position: "absolute",
              top: 0,
              left: DRAWER_WIDTH,
              width: width - DRAWER_WIDTH,
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
            onPress={toggleDrawer}
          />

          <Animated.View
            style={{
              position: "absolute",
              top: 0,
              left: drawerAnim,
              width: DRAWER_WIDTH,
              height: "100%",
              backgroundColor: "#fff",
              padding: 15,
            }}
          >
            <Pressable
              onPress={toggleDrawer}
              style={{ position: "absolute", top: 20, right: 20 }}
            >
              <Ionicons name="close" size={28} color="#F83758" />
            </Pressable>

            <NavItems activeItem={activeItem} setActiveItem={setActiveItem} />
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default Navbar;
