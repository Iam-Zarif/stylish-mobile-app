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

const CartScreen = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Red Sneakers",
      price: 120,
      qty: 1,
      stock: "In Stock",
      image:
        "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp",
    },
    {
      id: "2",
      name: "Leather Bag",
      price: 250,
      qty: 1,
      stock: "Only 3 left",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjb7qiPTxbhmkePtf40yKn2rgZk1XX6_EcDg&s",
    },
    {
      id: "3",
      name: "Smart Watch",
      price: 199,
      qty: 2,
      stock: "In Stock",
      image:
        "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000",
    },
    {
      id: "4",
      name: "Sunglasses",
      price: 89,
      qty: 1,
      stock: "In Stock",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPipmiOkIHVxOBWEbYlFxZHjJR6bnV2hllYA&s",
    },
    {
      id: "5",
      name: "Running Shoes",
      price: 140,
      qty: 1,
      stock: "Only 2 left",
      image:
        "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp",
    },
    {
      id: "6",
      name: "Casual Backpack",
      price: 180,
      qty: 1,
      stock: "In Stock",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjb7qiPTxbhmkePtf40yKn2rgZk1XX6_EcDg&s",
    },
    {
      id: "7",
      name: "Digital Watch",
      price: 160,
      qty: 1,
      stock: "In Stock",
      image:
        "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000",
    },
    {
      id: "8",
      name: "Aviator Glasses",
      price: 99,
      qty: 1,
      stock: "Only 5 left",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPipmiOkIHVxOBWEbYlFxZHjJR6bnV2hllYA&s",
    },
    {
      id: "9",
      name: "White Sneakers",
      price: 130,
      qty: 1,
      stock: "In Stock",
      image:
        "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp",
    },
    {
      id: "10",
      name: "Office Handbag",
      price: 220,
      qty: 1,
      stock: "Only 1 left",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjb7qiPTxbhmkePtf40yKn2rgZk1XX6_EcDg&s",
    },
    {
      id: "11",
      name: "Luxury Watch",
      price: 320,
      qty: 1,
      stock: "In Stock",
      image:
        "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000",
    },
    {
      id: "12",
      name: "Retro Sunglasses",
      price: 105,
      qty: 1,
      stock: "In Stock",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPipmiOkIHVxOBWEbYlFxZHjJR6bnV2hllYA&s",
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const updateQty = (id: string, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }: { item: (typeof cartItems)[0] }) => (
    <View className="flex-row bg-white rounded-xl p-3 mb-2 border border-gray-200">
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-lg" />
      <View className="flex-1 ml-3 justify-between">
        <View className="flex-row justify-between items-start">
          <View>
            <Text className="text-gray-900 font-semibold">{item.name}</Text>
            <Text className="text-xs text-green-600 mt-0.5">{item.stock}</Text>
          </View>
          <Pressable onPress={() => removeItem(item.id)}>
            <Ionicons name="close-circle" size={20} color="#F83758" />
          </Pressable>
        </View>
        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-[#F83758] font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <Pressable
              onPress={() => updateQty(item.id, "dec")}
              className="w-7 h-7 rounded-md bg-gray-200 items-center justify-center"
            >
              <Ionicons name="remove" size={14} />
            </Pressable>
            <Text className="mx-3 font-semibold">{item.qty}</Text>
            <Pressable
              onPress={() => updateQty(item.id, "inc")}
              className="w-7 h-7 rounded-md bg-[#4392F9] items-center justify-center"
            >
              <Ionicons name="add" size={14} color="#fff" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 pt-2 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <View className="flex-1 px-4">
        <Text className="text-xl font-bold text-gray-900 mb-2">Cart</Text>

        <Pressable
          onPress={() => setShowAddress(!showAddress)}
          className="flex-row justify-between items-center bg-white px-4 py-3 rounded-xl border border-gray-200 mb-3"
        >
          <Text className="font-semibold text-gray-900">Delivery Address</Text>
          <Ionicons
            name={showAddress ? "chevron-up" : "chevron-down"}
            size={18}
          />
        </Pressable>

        {showAddress && (
          <View className="bg-white rounded-xl p-4 border border-gray-200 mb-3">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="font-semibold text-gray-900">John Doe</Text>
                <Text className="text-sm text-gray-600 mt-1">
                  221B Baker Street, London
                </Text>
                <Text className="text-sm text-gray-600 mt-1">
                  +44 987 654 3210
                </Text>
              </View>
              <Pressable>
                <Text className="text-[#4392F9] text-sm font-semibold">
                  Change
                </Text>
              </Pressable>
            </View>
          </View>
        )}

        {cartItems.length === 0 ? (
          <View className="flex-1 justify-center items-center mt-20">
            <Text className="text-gray-400 text-base">Your cart is empty</Text>
          </View>
        ) : (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 12 }}
          />
        )}

        {cartItems.length > 0 && (
          <View className="bg-neutral-800 rounded-xl p-4 border border-gray-200 mb-[4em]">
            <View className="flex-row justify-between mb-2">
              <Text className="text-sm text-neutral-100">
                Total ({cartItems.length} items)
              </Text>
              <Text className="font-bold text-neutral-50">
                ${subtotal.toFixed(2)}
              </Text>
            </View>
            <Pressable className="bg-[#F83758] py-3 rounded-lg items-center">
              <Text className="text-white font-semibold">
                Proceed to Checkout
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
