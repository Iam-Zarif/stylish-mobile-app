import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [previousSearches, setPreviousSearches] = useState([
    "Red Sneakers",
    "Leather Bag",
    "Smart Watch",
    "Sunglasses",
  ]);

  const categories = [
    { id: "1", name: "Shoes", icon: <Ionicons name="shirt-outline" size={18} color="#3B82F6" /> },
    { id: "2", name: "Bags", icon: <Entypo name="shopping-bag" size={18} color="#F59E0B" /> },
    { id: "3", name: "Watches", icon: <MaterialIcons name="watch" size={18} color="#10B981" /> },
    { id: "4", name: "Sunglasses", icon: <Entypo name="eye" size={18} color="#EF4444" /> },
  ];

  const products = [
    { id: "1", name: "Red Sneakers", image: "https://i.ibb.co/0VjxFqT/sneakers1.jpg" },
    { id: "2", name: "Leather Bag", image: "https://i.ibb.co/4mVJZWh/bag1.jpg" },
    { id: "3", name: "Smart Watch", image: "https://i.ibb.co/2tTQ8zT/watch1.jpg" },
    { id: "4", name: "Sun Glasses", image: "https://i.ibb.co/WVv6p8t/sunglasses1.jpg" },
  ];

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderCategory = ({ item }: { item: typeof categories[0] }) => (
    <View className="flex-row items-center bg-gray-100 px-3 py-2 rounded-xl mr-2 mb-2">
      {item.icon}
      <Text className="ml-2 text-gray-900 text-sm font-semibold">{item.name}</Text>
    </View>
  );

  const renderProduct = ({ item }: { item: typeof products[0] }) => (
    <View className="flex-row items-center bg-gray-100 rounded-xl p-2 mb-2">
      <Image source={{ uri: item.image }} className="w-12 h-12 rounded-md mr-3" />
      <Text className="text-gray-900 text-sm font-medium">{item.name}</Text>
    </View>
  );

  const removePreviousSearch = (item: string) => {
    setPreviousSearches((prev) => prev.filter((i) => i !== item));
  };

  const clearAllSearches = () => {
    setPreviousSearches([]);
  };

  const renderPreviousSearch = (item: string) => (
    <View key={item} className="flex-row items-center justify-between px-4 py-2 bg-gray-200 rounded-full mb-2">
      <View className="flex-row items-center">
        <Ionicons name="time-outline" size={16} color="#6B7280" />
        <Text className="ml-2 text-gray-700 text-sm">{item}</Text>
      </View>
      <Pressable onPress={() => removePreviousSearch(item)}>
        <Ionicons name="close" size={16} color="#6B7280" />
      </Pressable>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View className="px-4 pt-4">
        <Text className="text-xl font-bold text-gray-900 mb-2">Search Products</Text>
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-1 mb-4">
          <Ionicons name="search" size={18} color="#9CA3AF" />
          <TextInput
            className="ml-2  flex-1 text-gray-900 text-sm"
            placeholder="Search for products..."
            value={searchText} placeholderTextColor="#242424"
            
            onChangeText={setSearchText}
          />
        </View>

        {searchText.length === 0 ? (
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-500 text-sm">Previous Searches</Text>
              {previousSearches.length > 0 && (
                <Pressable onPress={clearAllSearches}>
                  <Text className="text-sm text-red-500 font-semibold">Clear All</Text>
                </Pressable>
              )}
            </View>
            {previousSearches.map(renderPreviousSearch)}
          </View>
        ) : (
          <View>
            {filteredCategories.length > 0 && (
              <View className="mb-4">
                <Text className="text-gray-500 text-sm mb-2">Categories</Text>
                <FlatList
                  data={filteredCategories}
                  renderItem={renderCategory}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}

            {filteredProducts.length > 0 && (
              <View>
                <Text className="text-gray-500 text-sm mb-2">Products</Text>
                <FlatList
                  data={filteredProducts}
                  renderItem={renderProduct}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 100 }}
                />
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
