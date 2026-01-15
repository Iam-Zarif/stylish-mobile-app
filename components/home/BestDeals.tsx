import { ChevronDown } from "lucide-react-native";
import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";

const allDeals = [
  { id: "1", name: "Smart LED TV 50\"", price: "BDT 5,000", discount: "20% OFF", topSelling: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SbGmy9x7AGkFuq3RB6pjCw0tON0ZeK5sUA&" },
  { id: "2", name: "Wireless Noise-Cancelling Headphones", price: "BDT 6,000", discount: "15% OFF", topSelling: false, image: "https://dazzle.sgp1.cdn.digitaloceanspaces.com/50563/Nothing-Headphone-1-white-price-in-Bangladesh-(2).jpg" },
  { id: "3", name: "Android Smartphone 6.7\" Display", price: "BDT 7,500", discount: "25% OFF", topSelling: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_IBXR9yntOcQAd-_ZoxpEaPnkShne1xYQQ&s" },
  { id: "4", name: "Laptop 15\" Intel i7", price: "BDT 8,000", discount: "10% OFF", topSelling: false, image: "https://www.startech.com.bd/image/cache/catalog/blog/2022/buying-guide/smartphone-buying-guide-1-870x410.jpg" },
  { id: "5", name: "Smartwatch Series 6", price: "BDT 9,000", discount: "30% OFF", topSelling: true, image: "https://pixstore.com.bd/wp-content/uploads/2024/06/wt21.jpg" },
  { id: "6", name: "Portable Bluetooth Speaker", price: "BDT 10,000", discount: "20% OFF", topSelling: false, image: "https://acmartbd.com/wp-content/uploads/2023/02/Xiaomi-MI-A2-43-inch-Smart-LED-TV.jpg" },
  { id: "7", name: "4K Action Camera", price: "BDT 11,500", discount: "15% OFF", topSelling: true, image: "" },
  { id: "8", name: "Wireless Gaming Mouse", price: "BDT 12,000", discount: "10% OFF", topSelling: false, image: "" },
  { id: "9", name: "LED Desk Lamp", price: "BDT 5,500", discount: "18% OFF", topSelling: false, image: "" },
  { id: "10", name: "Air Purifier Home 200sqft", price: "BDT 6,500", discount: "22% OFF", topSelling: true, image: "" },
];

const ITEMS_PER_PAGE = 6;

const BestDeals = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, allDeals.length));
  };

  return (
    <ScrollView className="mt-8">
      <Text className="text-xl text-center font-bold mb-3">Best Deals</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {allDeals.slice(0, visibleCount).map((item) => (
          <View
            key={item.id}
            style={{ width: "49%", marginBottom: 16 }}
            className="bg-white flex-col justify-between  rounded-xl overflow-hidden border border-neutral-100 shadow-md"
          >
            <View style={{ backgroundColor: "#E5E7EB", width: "100%", height: 144, position: "relative" }}>
              {item.image && (
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              )}
              {item.discount && (
                <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded">
                  <Text className="text-white text-xs font-bold">{item.discount}</Text>
                </View>
              )}
              {item.topSelling && (
                <View className="absolute top-2 right-2 bg-yellow-400 px-2 py-1 rounded">
                  <Text className="text-black text-xs font-bold">Top Selling</Text>
                </View>
              )}
            </View>
            <View className="p-3">
              <Text className="text-black font-semibold text-base">{item.name}</Text>
              <Text className="text-gray-600 mt-1">{item.price}</Text>
            </View>
              <Pressable className="bg-[#F83758] mt-1 py-2 rounded-b-lg items-center">
                <Text className="text-white font-semibold">Shop Now</Text>
              </Pressable>
          </View>
        ))}
      </View>
      {visibleCount < allDeals.length && (
        <Pressable
          onPress={loadMore}
          className="flex-row justify-center  items-center rounded-lg py-3"
        >
          <Text className="text-[#F83758] font-semibold mr-2">Show More</Text>
          <ChevronDown size={20} color="#F83758" />
        </Pressable>
      )}
    </ScrollView>
  );
};

export default BestDeals;
