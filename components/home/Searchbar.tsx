import { View, TextInput } from "react-native";
import React from "react";
import { Search, Mic } from "lucide-react-native";

const Searchbar = () => {
  const [query, setQuery] = React.useState("");

  return (
    <View className="flex-row items-center border border-gray-200 rounded-xl">
      <View className="px-3">
        <Search size={20} color="#9CA3AF" />
      </View>

      <TextInput
        className="flex-1  py-2.5 text-black"
        onChangeText={setQuery}
        value={query}
        placeholder="Search products"
       placeholderTextColor="#242424"
      />

      <View className="px-3">
        <Mic size={20} color="#9CA3AF" />
      </View>
    </View>
  );
};

export default Searchbar;
