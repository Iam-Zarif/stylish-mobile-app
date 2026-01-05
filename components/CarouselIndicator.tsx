import React from "react";
import { View, Pressable } from "react-native";

interface CarouselIndicatorProps {
  total: number;
  activeIndex: number;
  onPress: (index: number) => void;
}

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({ total, activeIndex, onPress }) => {
  return (
    <View className="flex-row items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <Pressable key={index} onPress={() => onPress(index)}>
          <View
            className={`h-2 rounded-full ${index === activeIndex ? 'bg-neutral-800 w-10' : 'bg-neutral-300 w-2'}`}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default CarouselIndicator;
