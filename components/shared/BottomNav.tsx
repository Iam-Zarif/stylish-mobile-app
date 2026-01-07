import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const BottomNav = ({ hidden }: { hidden?: boolean }) => {
  const router = useRouter();
  const segments = useSegments();

  const currentRoute = segments[segments.length - 1] || "home";

  const navItems = [
    { name: "Home", icon: <Ionicons name="home-outline" size={22} />, route: "/home" },
    { name: "Wishlist", icon: <Entypo name="heart" size={22} />, route: "/home/wishlist" },
    { name: "Cart", icon: <Ionicons name="cart-outline" size={24} />, route: "/home/cart" },
    { name: "Search", icon: <Feather name="search" size={22} />, route: "/home/search" },
    { name: "Setting", icon: <Ionicons name="settings-outline" size={22} />, route: "/home/setting" },
  ];

  if (hidden) return null;

  return (
    <SafeAreaView edges={["bottom"]} className="absolute bottom-0 w-full bg-transparent">
      <View className="flex-row h-18 bg-white justify-around shadow-sm shadow-neutral-200 items-center px-4 rounded-t-2xl">
        {navItems.map((item, index) => {
          const isCart = item.name === "Cart";
          const isActive = currentRoute === item.route.replace("/home/", "") || (currentRoute === "home" && item.name === "Home");

          if (isCart) {
            return (
              <Pressable
                key={index}
                onPress={() => router.push(item.route)}
                className={`w-12 h-12 rounded-full justify-center mb-4 items-center shadow-xl ${
                  isActive ? "bg-[#F83758]" : "bg-white"
                }`}
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                {React.cloneElement(item.icon, {
                  color: isActive ? "#fff" : "#000",
                })}
              </Pressable>
            );
          }

          return (
            <Pressable
              key={index}
              onPress={() => router.push(item.route)}
              className="flex-1 justify-center items-center"
            >
              {React.cloneElement(item.icon, {
                color: isActive ? "#F83758" : "#999",
              })}
              <Text className={`text-xs font-semibold ${isActive ? "text-[#F83758]" : "text-gray-400"}`}>
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
