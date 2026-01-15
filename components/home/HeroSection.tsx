import React, { useState, useCallback } from "react";
import { View, Text, Image, Pressable, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const heroData = [
  {
    image: "https://i.ibb.co/4ZJCfNx0/1.jpg",
    discount: "50–40% OFF",
    nowIn: "Now in",
    product: "All colors",
    action: "Shop Now",
  },
  {
    image: "https://i.ibb.co/Ld0XbcVZ/2.jpg",
    discount: "30–20% OFF",
    nowIn: "Now in",
    product: "Cool ACs",
    action: "Shop Now",
  },
  {
    image: "https://i.ibb.co/v6qTygpK/3.jpg",
    discount: "20–10% OFF",
    nowIn: "Now in",
    product: "Premium ACs",
    action: "Shop Now",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSnapToItem = useCallback(
    (index: number) => setActiveIndex(index),
    []
  );

  return (
    <View className="mt-5">
      <Carousel
        loop
        width={width}
        height={200}
        autoPlay
        autoPlayInterval={4500}
        scrollAnimationDuration={1200}
        data={heroData}
        onSnapToItem={handleSnapToItem} 
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.95,
          parallaxScrollingOffset: 15,
        }}
        renderItem={({ item }) => (
          <View
            style={{ width: width, height: 200 }}
            className="rounded-xl overflow-hidden"
          >
            <Image
              source={{ uri: item.image }}
              resizeMode="cover"
              style={{ width: "100%", height: "100%", position: "absolute" }}
            />
            <View className="absolute inset-0 bg-black/20" />
            <View className="flex-1 justify-center px-5 items-start">
              <Text className="text-white text-3xl font-extrabold">
                {item.discount}
              </Text>
              <Text className="text-white mt-1 text-sm opacity-90">
                {item.nowIn}
              </Text>
              <Text className="text-white text-base font-medium">
                {item.product}
              </Text>
              <Pressable className="bg-white px-5 py-2.5 rounded-lg mt-4">
                <Text className="text-black font-semibold">{item.action}</Text>
              </Pressable>
            </View>
          </View>
        )}
      />

      <View className="flex-row justify-center mt-3">
        {heroData.map((_, index) => (
          <View
            key={index}
            className={`mx-1 rounded-full ${
              activeIndex === index
                ? "w-2.5 h-2.5 bg-[#F83758]"
                : "w-2 h-2 bg-neutral-400"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default HeroSection;
