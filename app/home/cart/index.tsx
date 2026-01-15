import React from "react";
import { View, Text, ScrollView, Image, Pressable, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "./useCart";

const CartScreen = () => {
  const { cartItems, subtotal, updateQty, removeItem } = useCart();

  return (
    <View className="flex-1 bg-gray-50 relative">
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />

      <ScrollView contentContainerStyle={{ paddingBottom: 140 }} className="px-4 pt-4">
     {cartItems.length > 0 && (
        <View
          className="bg-neutral-800 mb-2 rounded-xl p-4"
        
        >
          <View className="flex-row justify-between mb-2">
            <Text className="text-sm text-neutral-100">
              Total ({cartItems.length} items)
            </Text>
            <Text className="font-bold text-neutral-50">${subtotal.toFixed(2)}</Text>
          </View>

          <Pressable className="bg-[#F83758] py-3 rounded-lg items-center">
            <Text className="text-white font-semibold">Proceed to Checkout</Text>
          </Pressable>
        </View>
      )}
        {cartItems.map((item) => (
          <View
            key={item.id}
            className="flex-row bg-white rounded-xl p-3 mb-2 border border-gray-200"
          >
            <Image source={{ uri: item.image }} className="w-20 h-20 rounded-lg" />
            <View className="flex-1 ml-3 justify-between">
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="text-gray-900 text-lg font-semibold">{item.name}</Text>
                  <Text className="text-green-600 text-xs mt-1">{item.stock}</Text>
                </View>
                <Pressable onPress={() => removeItem(item.id)}>
                  <Ionicons name="close-circle" size={20} color="#F83758" />
                </Pressable>
              </View>

              <View className="flex-row items-center justify-between mt-2">
                <Text className="text-[#F83758] text-lg font-bold">${item.price}</Text>
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
                    className="w-7 h-7 rounded-md bg-neutral-400 items-center justify-center"
                  >
                    <Ionicons name="add" size={14} color="#fff" />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

 
    </View>
  );
};

export default CartScreen;
