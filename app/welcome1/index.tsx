import React, { useRef, useState } from "react";
import { View, Text, StatusBar, Image, Pressable, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CarouselIndicator from "../../components/CarouselIndicator";

const { width } = Dimensions.get("window");

const Index = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const slides = [
    {
      image: require("../../public/welcome/img (1).png"),
      title: "Choose Products",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      image: require("../../public/welcome/img (2).png"),
      title: "Fast Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: require("../../public/welcome/img (3).png"),
      title: "Enjoy Shopping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      const nextIndex = activeIndex + 1;
      setActiveIndex(nextIndex);
      scrollRef.current?.scrollTo({ x: width * nextIndex, animated: true });
    } else {
      router.push("/auth/login");
    }
  };

  const handleIndicatorPress = (index: number) => {
    setActiveIndex(index);
    scrollRef.current?.scrollTo({ x: width * index, animated: true });
  };

  return (
    <SafeAreaView className="flex-1 pb-4 flex-col justify-between bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View className="flex-row items-center px-5 py-2 justify-between">
        <View className="flex-row items-center">
          <Text className="font-bold">{activeIndex + 1}</Text>
          <Text className="font-bold">/</Text>
          <Text className="text-neutral-400 font-bold">{slides.length}</Text>
        </View>

        <Image
          source={require("../../assets/favicon.png")}
          className="w-12 h-12"
          resizeMode="contain"
        />

        <Pressable
          onPress={() => router.push("/auth/login")}
          style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
        >
          <Text className="text-blue-500 font-bold">Skip</Text>
        </Pressable>
      </View>

      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setActiveIndex(index);
        }}
      >
        {slides.map((slide, index) => (
          <View key={index} style={{ width }}>
            <Image
              source={slide.image}
              className="mt-10 mx-auto"
              resizeMode="contain"
            />
            <Text className="text-center font-extrabold text-2xl">
              {slide.title}
            </Text>
            <Text className="text-center leading-[1.6rem] text-neutral-400 px-4">
              {slide.description}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View className="flex-row px-5 justify-between items-center mt-2">
        <CarouselIndicator
          total={slides.length}
          activeIndex={activeIndex}
          onPress={handleIndicatorPress} 
        />

        <Pressable
          onPress={handleNext}
          style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
        >
          <Text className="text-[#F83758] font-bold">Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Index;
