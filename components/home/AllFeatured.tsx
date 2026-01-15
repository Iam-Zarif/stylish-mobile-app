import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { ArrowUpDown, SlidersHorizontal } from "lucide-react-native";
import React from "react";



const categories = [
  { name: "Beauty", image: "https://img.freepik.com/free-photo/foundation-bottles-advertising-arrangement_23-2149511225.jpg" },
  { name: "Electronics", image: "https://thumbs.dreamstime.com/b/modern-retail-store-interior-display-various-gadgets-laptops-computers-sale-products-counter-purchase-shopping-384836815.jpg" },
  { name: "Fashion", image: "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176698.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Home", image: "https://media.istockphoto.com/id/510693044/photo/house-cleaning-product-on-wood-table.jpg?s=612x612&w=0&k=20&c=EZfeRCDgSMPnqG684zQBOqyNfDGx9JWTXS1Q2Lhrjy4=" },
  { name: "Sports", image: "https://www.tuv.com/content-media-files/master-content/services/products/0169-tuv-rheinland-recreation-and-sports-equipment/tuv-rheinland-recreation-and-sports-equipment.jpg" },
  { name: "Toys", image: "https://abctoysbd.com/cdn/shop/files/jjrc-post-web.jpg?v=1763466302&width=1200" },
  { name: "Books", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUIC0_tF_F3KDztfDxYqsjmmZsNrhWBqToUA&s" }
];


const AllFeatured = () => {
  return (
    <View>
      <View className="mt-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-semibold"> All Featured </Text>
          <View className="flex-row items-center gap-2">
            <Pressable className="flex-row items-center border border-neutral-200 bg-white px-3 py-1.5 rounded-lg">
              <ArrowUpDown size={16} color="#333" />
              <Text className="ml-1 text-sm text-black">Sort</Text>
            </Pressable>
            <Pressable className="flex-row items-center border border-neutral-200 bg-white px-3 py-1.5 rounded-lg">
              <SlidersHorizontal size={16} color="#333" />
              <Text className="ml-1 text-sm text-black">Filter</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-3 pl-4"
        contentContainerStyle={{ paddingLeft: 2, paddingRight: 14, gap: 20 }}
      >
        {categories.map((category, index) => (
          <View key={index} className="flex-col items-center gap-1">
            <Image
              source={{ uri: category.image }}
              className="w-16 h-16 rounded-full"
            />
            <Text className="text-neutral-500 text-sm">{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default AllFeatured

