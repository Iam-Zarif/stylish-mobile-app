import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const menuItems = [
  { name: "Home", icon: <Ionicons name="home-outline" size={24} color="#4392F9" /> },
  { name: "Products", icon: <MaterialIcons name="inventory" size={24} color="#F59E0B" /> },
  { name: "Cart", icon: <Ionicons name="cart-outline" size={24} color="#10B981" /> },
  { name: "Wishlist", icon: <Entypo name="heart" size={24} color="#EF4444" /> },
  { name: "Profile Settings", icon: <Ionicons name="settings-outline" size={24} color="#3B82F6" /> },
  { name: "Orders", icon: <FontAwesome5 name="clipboard-list" size={24} color="#8B5CF6" /> },
  { name: "Contact", icon: <Ionicons name="call-outline" size={24} color="#F97316" /> },
];

const routeMap: Record<string, string> = {
  Home: "/home",
  Products: "/home/products",
  Cart: "/home/cart",
  Wishlist: "/home/wishlist",
  "Profile Settings": "/home/settings",
  Orders: "/home/orders",
  Contact: "/home/contact",
};

interface NavItemsProps {
  activeItem: string;
  setActiveItem: (name: string) => void;
  onSelect: () => void;
}

const NavItems: React.FC<NavItemsProps> = ({
  activeItem,
  setActiveItem,
  onSelect,
}) => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <View className="mb-4 flex-row items-center gap-3 mt-12">
        <Image
          source={{ uri: "https://i.ibb.co/67fpNVMH/profile.jpg" }}
          className="w-14 h-14 rounded-full"
        />
        <View>
          <Text className="text-lg font-bold">Mostofa Fatin</Text>
          <Text className="text-neutral-400 text-sm">
            mostofafatin.developer@gmail.com
          </Text>
        </View>
        
      </View>

      <View className="border-t border-neutral-200 mt-2 mb-6" />

      <View className="flex-1">
        {menuItems.map((item, index) => {
          const isActive = activeItem === item.name;

          return (
            <Pressable
              key={index}
              onPress={() => {
                setActiveItem(item.name);

                if (item.name !== "Log Out") {
                  const route = routeMap[item.name];
                  if (route) router.push(route);
                }

                onSelect(); 
              }}
              className="flex-row items-center gap-3 py-4 px-2 rounded-lg"
              style={{ backgroundColor: isActive ? "#EEF2FF" : "transparent" }}
            >
              <View style={{ width: 35, alignItems: "center" }}>
                {item.icon}
              </View>
              <Text
                className={`text-sm font-semibold ${
                  item.name === "Log Out" ? "text-red-500" : ""
                }`}
              >
                {item.name}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View className="border-t border-neutral-200 my-4" />

      <View className="flex-row justify-center items-center gap-2">
        <Image
          source={require("../../assets/favicon.png")}
          className="w-10 h-10"
          resizeMode="contain"
        />
        <Text className="text-sm font-bold text-[#4392F9] font-libre">
          Stylish
        </Text>
      </View>
    </View>
  );
};

export default NavItems;
