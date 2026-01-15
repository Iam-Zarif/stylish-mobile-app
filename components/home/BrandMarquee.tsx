import React, { useRef, useEffect } from "react";
import { View, ScrollView, Image, Text } from "react-native";

const brands = [
  { id: "1", image: "https://i.ibb.co.com/nst21wyY/logo6.png" },
  { id: "2", image: "https://i.ibb.co.com/DDndTFGx/logo5.png" },
  { id: "3", image: "https://cdn.dribbble.com/userupload/4606170/file/still-fc891139220c3d9edd42f650fe08a62c.png?format=webp&resize=400x300&vertical=center" },
  { id: "4", image: "https://static.vecteezy.com/system/resources/previews/021/514/861/non_2x/hp-brand-logo-laptop-symbol-white-design-usa-computer-illustration-with-blue-background-free-vector.jpg" },
  { id: "5", image: "https://media.designrush.com/tinymce_images/763813/conversions/NBC-logo-content.jpg" },
  { id: "6", image: "https://i.ibb.co.com/zhWN431v/logo.webp" },
];

const BrandMarquee = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    let scrollValue = 0;
    let scrolled = 0;
    const interval = setInterval(() => {
      scrolled += 1;
      scrollValue = scrolled % (brands.length * 90); 
      scrollViewRef.current?.scrollTo({ x: scrollValue, animated: false });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="mt-8">
      <Text className="text-xl font-bold text-gray-800 mb-4 text-center">
        Our Brands
      </Text>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
        scrollEnabled={false}
      >
        {brands.concat(brands).map((brand, index) => (
          <View key={index} className="mr-14">
            <Image
              source={{ uri: brand.image }}
              style={{ width: 70, height: 70, borderRadius: 12 }}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BrandMarquee;
