import { ChevronDown } from "lucide-react-native";
import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";

const allProducts = [
  {
    id: "1",
    name: 'Smart LED TV 42"',
    price: "BDT 5,000",
    image:
      "https://acmartbd.com/wp-content/uploads/2023/02/Xiaomi-MI-A2-43-inch-Smart-LED-TV.jpg",
  },
  {
    id: "2",
    name: "Wireless Bluetooth Speaker",
    price: "BDT 6,000",
    image: "https://pixstore.com.bd/wp-content/uploads/2024/06/wt21.jpg",
  },
  {
    id: "3",
    name: 'Smartphone 6.5" Display',
    price: "BDT 7,500",
    image:
      "https://www.startech.com.bd/image/cache/catalog/blog/2022/buying-guide/smartphone-buying-guide-1-870x410.jpg",
  },
  {
    id: "4",
    name: 'Laptop 14" Intel i5',
    price: "BDT 8,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SbGmy9x7AGkFuq3RB6pjCw0tON0ZeK5sUA&s",
  },
  {
    id: "5",
    name: "Noise Cancelling Headphones",
    price: "BDT 9,000",
    image:
      "https://dazzle.sgp1.cdn.digitaloceanspaces.com/50563/Nothing-Headphone-1-white-price-in-Bangladesh-(2).jpg",
  },
  {
    id: "6",
    name: "Digital Camera 24MP",
    price: "BDT 10,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_IBXR9yntOcQAd-_ZoxpEaPnkShne1xYQQ&s",
  },
  {
    id: "7",
    name: "Smartwatch Series 5",
    price: "BDT 11,500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrypqkM6xtfRVXc8ScnhmJa03jtrGHmZVlA&s",
  },
  {
    id: "8",
    name: "Portable Power Bank 10000mAh",
    price: "BDT 12,000",
    image: "https://pixstore.com.bd/wp-content/uploads/2024/06/wt21.jpg",
  },
  { id: "9", name: "Wireless Earbuds Pro", price: "BDT 5,500", image: "" },
  { id: "10", name: "Home Security Camera", price: "BDT 6,500", image: "" },
  { id: "11", name: "Gaming Keyboard RGB", price: "BDT 7,800", image: "" },
  { id: "12", name: "Ergonomic Mouse", price: "BDT 8,200", image: "" },
  { id: "13", name: "LED Desk Lamp", price: "BDT 9,500", image: "" },
  { id: "14", name: "Air Purifier", price: "BDT 10,200", image: "" },
  { id: "15", name: "Smart Thermostat", price: "BDT 11,800", image: "" },
  { id: "16", name: "Robot Vacuum Cleaner", price: "BDT 12,500", image: "" },
  { id: "17", name: "Electric Kettle", price: "BDT 5,800", image: "" },
  { id: "18", name: "Coffee Maker", price: "BDT 6,800", image: "" },
  { id: "19", name: "Blender 500W", price: "BDT 7,900", image: "" },
  { id: "20", name: "Microwave Oven 20L", price: "BDT 8,500", image: "" },
  { id: "21", name: "Refrigerator 200L", price: "BDT 9,800", image: "" },
  { id: "22", name: "Electric Iron", price: "BDT 10,800", image: "" },
  { id: "23", name: "Hair Dryer 1800W", price: "BDT 11,900", image: "" },
  { id: "24", name: "Induction Cooktop", price: "BDT 12,200", image: "" },
  { id: "25", name: "Smart Doorbell", price: "BDT 13,000", image: "" },
];

const ITEMS_PER_PAGE = 8;

const LatestProduct = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, allProducts.length)
    );
  };

  return (
    <ScrollView className="mt-5">
      <Text className="text-xl text-center font-bold mb-3">
        Latest Products
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {allProducts.slice(0, visibleCount).map((item) => (
          <View
            key={item.id}
            style={{ width: "49%", marginBottom: 16 }}
            className="bg-white rounded-xl overflow-hidden border border-neutral-100  shadow-md"
          >
            <View
              style={{ backgroundColor: "#E5E7EB", width: "100%", height: 144 }}
            >
              {item.image && (
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              )}
            </View>
            <View className="p-3 flex-1 justify-between h-36">
              <View>
                <Text className="text-black font-semibold text-base">
                  {item.name}
                </Text>
                <Text className="text-gray-600 mt-1">{item.price}</Text>
              </View>
              <Pressable className="border border-[#F83758] py-2 rounded-lg items-center mt-2">
                <Text className="text-[#F83758] font-semibold">Shop Now</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>

      {visibleCount < allProducts.length && (
        <Pressable
          onPress={loadMore}
          className="flex-row justify-center items-center rounded-lg py-3"
        >
          <Text className="text-[#F83758] font-semibold mr-2">Show More</Text>
          <ChevronDown size={20} color="#F83758" className="animate-bounce"/>
        </Pressable>
      )}
    </ScrollView>
  );
};

export default LatestProduct;
