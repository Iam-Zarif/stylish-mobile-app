import React, { useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Star } from "lucide-react-native";

const { width } = Dimensions.get("window");

const testimonials = [
  {
    id: "1",
    name: "Sarah K.",
    rating: 5,
    review: "Amazing selection and fast delivery! Highly recommended.",
    image:
      "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "2",
    name: "Arif R.",
    rating: 4,
    review: "Great deals and products. App experience is smooth.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpWYRFqXu8QAP38VEcLXEwX_ZU-knbN17Avw&s",
  },
  {
    id: "3",
    name: "Nisha D.",
    rating: 5,
    review: "Love the offers — saved a lot this season!",
    image: "https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=",
  },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View className="mt-10">
      <Text className="text-2xl font-bold mb-6 text-center text-gray-900">
        What Our Customers Say
      </Text>

      <Carousel
        loop
        width={width}
        height={200}
        autoPlay
        autoPlayInterval={4000}
        scrollAnimationDuration={800}
        data={testimonials}
        onSnapToItem={setActiveIndex}
        renderItem={({ item }) => (
          <View style={{ width }} className="items-center h-full justify-center">
            <View className="flex-row bg-white rounded-2xl h-full border border-neutral-200 shadow-lg overflow-hidden w-full shadow-gray-500 mx-4">
              <Image
                source={{ uri: item.image }}
                style={{ width: "40%", height: "100%" }}
                resizeMode="cover"
              />
              <View className="w-3/5 p-4 justify-center">
                <Text className="text-lg font-bold text-gray-900 mb-1">
                  {item.name}
                </Text>
                <View className="flex-row mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      color={i < item.rating ? "#FBBF24" : "#E5E7EB"}
                    />
                  ))}
                </View>
                <Text className="text-gray-600 text-sm">
                  {item.review}
                </Text>
              </View>
            </View>
          </View>
        )}
      />

      <View className="flex-row justify-center items-center mt-4">
        {testimonials.map((_, index) => (
          <View
            key={index}
            className={`mx-1 rounded-full ${
              activeIndex === index
                ? "w-3 h-3 bg-[#F83758]"
                : "w-2 h-2 bg-gray-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default TestimonialsCarousel;
