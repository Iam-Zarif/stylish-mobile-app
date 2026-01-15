import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../provider/ThemeContext";

const BottomNav = ({ hidden }: { hidden?: boolean }) => {
  const { isDark } = useTheme();
  const router = useRouter();
  const segments = useSegments();
  const currentRoute = segments[segments.length - 1] || "home";

  const themeColor = "#F83758"; 
  const navItems = [
    { name: "Home", icon: <Ionicons name="home-outline" size={22} />, filledIcon: <Ionicons name="home" size={22} />, route: "/home" },
    { name: "Wishlist", icon: <Entypo name="heart-outlined" size={22} />, filledIcon: <Entypo name="heart" size={22} />, route: "/home/wishlist" },
    { name: "Cart", icon: <Ionicons name="cart-outline" size={24} />, filledIcon: <Ionicons name="cart" size={24} />, route: "/home/cart" },
    { name: "Search", icon: <Feather name="search" size={22} />, filledIcon: <Feather name="search" size={22} />, route: "/home/search" },
    { name: "Setting", icon: <Ionicons name="settings-outline" size={22} />, filledIcon: <Ionicons name="settings" size={22} />, route: "/home/settings" },
  ];

  if (hidden) return null;

  return (
    <SafeAreaView edges={["bottom"]} className={`absolute py-1.5 h-[4rem] bottom-0 rounded-full w-full  ${isDark ? "bg-neutral-500  border-neutral-700" : "bg-white border border-neutral-200"}`}>
      <View className={`flex-row  justify-around items-center px-4 rounded-t-2xl `}>
        {navItems.map((item, index) => {
          const isCart = item.name === "Cart";
          const isActive =
            currentRoute === item.route.replace("/home/", "") ||
            (currentRoute === "home" && item.name === "Home");

          if (isCart) {
            return (
              <Pressable
                key={index}
                onPress={() => router.push(item.route)}
                className={`w-12 h-12 rounded-full justify-center items-center shadow-xl ${isActive ? "bg-[#F83758]" : isDark ? "bg-neutral-800" : "bg-white"}`}
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                {React.cloneElement(isActive && item.filledIcon ? item.filledIcon : item.icon, {
                  color: isActive ? "#fff" : isDark ? "#FFF" : "#000",
                })}
              </Pressable>
            );
          }

          const iconToRender = isActive && item.filledIcon ? item.filledIcon : item.icon;

          return (
            <Pressable
              key={index}
              onPress={() => router.push(item.route)}
              className="flex-1 justify-center items-center"
            >
              {React.cloneElement(iconToRender, {
                color: isActive ? (isDark ? themeColor : "#F83758") : isDark ? "#FFF" : "#999",
              })}
              <Text
                className="text-xs font-semibold"
                style={{
                  color: isActive ? (isDark ? themeColor : "#F83758") : isDark ? "#FFF" : "#999",
                }}
              >
                {item.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default BottomNav;
