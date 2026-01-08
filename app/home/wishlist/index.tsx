import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const WishlistScreen = () => {
  const [wishlistItems, setWishlistItems] = useState([  
    { id: "1", name: "Red Sneakers", price: "$120", image: "https://i.ibb.co.com/YFNRbDWC/mobile.jpg", selected: false },
    { id: "2", name: "Leather Bag", price: "$250", image: "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp", selected: false },
    { id: "3", name: "Smart Watch", price: "$199", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPipmiOkIHVxOBWEbYlFxZHjJR6bnV2hllYA&s", selected: false },
    { id: "4", name: "Sunglasses", price: "$89", image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000", selected: false },
    { id: "5", name: "Running Shoes", price: "$140", image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000", selected: false },
    { id: "6", name: "Casual Backpack", price: "$180", image: "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp", selected: false },
    { id: "7", name: "Digital Watch", price: "$160", image: "https://i.ibb.co.com/W4SgMLkD/mac.png", selected: false },
    { id: "8", name: "Aviator Glasses", price: "$99", image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000", selected: false },
    { id: "9", name: "White Sneakers", price: "$130", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjb7qiPTxbhmkePtf40yKn2rgZk1XX6_EcDg&s", selected: false },
    { id: "10", name: "Office Handbag", price: "$220", image: "https://png.pngtree.com/thumb_back/fh260/background/20231005/pngtree-3d-render-of-black-gaming-keyboard-with-backlit-rgb-compatability-image_13545585.png", selected: false },
    { id: "11", name: "Luxury Watch", price: "$320", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPipmiOkIHVxOBWEbYlFxZHjJR6bnV2hllYA&s", selected: false },
    { id: "12", name: "Polarized Sunglasses", price: "$110", image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000", selected: false },
    { id: "13", name: "Sports Shoes", price: "$150", image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000", selected: false },
    { id: "14", name: "Travel Bag", price: "$270", image: "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp", selected: false },
    { id: "15", name: "Fitness Watch", price: "$210", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPipmiOkIHVxOBWEbYlFxZHjJR6bnV2hllYA&s", selected: false },
    { id: "16", name: "Classic Sunglasses", price: "$95", image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000", selected: false },
    { id: "17", name: "High-Top Sneakers", price: "$165", image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000", selected: false },
    { id: "18", name: "Mini Shoulder Bag", price: "$190", image: "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp", selected: false },
    { id: "19", name: "Chronograph Watch", price: "$280", image: "https://i.ibb.co.com/FLv0kW6x/headphone-removebg-preview.png", selected: false },
    { id: "20", name: "Retro Sunglasses", price: "$105", image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000", selected: false },
  ]);

  const toggleSelect = (id: string) => {
    setWishlistItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const addToCart = () => {
    setWishlistItems((prev) => prev.filter((item) => !item.selected));
  };

  const placeOrder = () => {
    setWishlistItems((prev) => prev.filter((item) => !item.selected));
  };

  const selectedCount = wishlistItems.filter((i) => i.selected).length;

  const renderItem = ({ item }: { item: (typeof wishlistItems)[0] }) => (
    <Pressable
      onPress={() => toggleSelect(item.id)}
      className="flex-row items-center bg-gray-50 rounded-xl p-2 mb-3 border border-gray-200"
    >
      <Image source={{ uri: item.image }} className="w-16 h-16 rounded-lg" />
      <View className="flex-1 ml-3">
        <Text className="text-gray-900 font-medium text-sm">{item.name}</Text>
        <Text className="text-[#F83758] font-semibold text-sm mt-1">
          {item.price}
        </Text>
      </View>
      <Ionicons
        name={item.selected ? "checkmark-circle" : "ellipse-outline"}
        size={22}
        color={item.selected ? "#4392F9" : "#9CA3AF"}
      />
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1 pb-20 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View className="px-4 pt-4 flex-1">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-xl font-bold text-gray-900">Wishlist</Text>
          {selectedCount > 0 && (
            <View className="flex-row gap-3 space-x-2">
              <Pressable
                onPress={addToCart}
                className="bg-[#4392F9] px-3 py-2 rounded-lg flex-row items-center"
              >
                <Ionicons name="cart-outline" size={16} color="#fff" />
                <Text className="text-white text-sm font-semibold ml-1">
                  {selectedCount}
                </Text>
              </Pressable>
              <Pressable
                onPress={placeOrder}
                className="bg-[#F83758] px-3 py-2 rounded-lg flex-row items-center"
              >
                <Ionicons name="flash-outline" size={16} color="#fff" />
                <Text className="text-white text-sm font-semibold ml-1">
                  Order
                </Text>
              </Pressable>
            </View>
          )}
        </View>

        {wishlistItems.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-400 text-base">
              Your wishlist is empty
            </Text>
          </View>
        ) : (
          <FlatList
            data={wishlistItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default WishlistScreen;
