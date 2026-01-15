import { Slot } from "expo-router";
import BottomNav from "../../components/shared/BottomNav";
import Navbar from "../../components/shared/Navbar";
import React, { useRef, useState } from "react";
import { Animated, ScrollView, View, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

const HomeLayout = () => {
  const scrollY = useRef(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const navbarAnim = useRef(new Animated.Value(0)).current;
  const bottomNavAnim = useRef(new Animated.Value(0)).current;

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentY = e.nativeEvent.contentOffset.y;
    if (currentY > scrollY.current + 5) {
      if (!hide) {
        setHide(true);
        Animated.timing(navbarAnim, { toValue: -120, duration: 300, useNativeDriver: true }).start();
        Animated.timing(bottomNavAnim, { toValue: 80, duration: 300, useNativeDriver: true }).start();
      }
    } else if (currentY < scrollY.current - 5) {
      if (hide) {
        setHide(false);
        Animated.timing(navbarAnim, { toValue: 0, duration: 300, useNativeDriver: true }).start();
        Animated.timing(bottomNavAnim, { toValue: 0, duration: 300, useNativeDriver: true }).start();
      }
    }
    scrollY.current = currentY;
  };

  return (
    <View className="flex-1">
      <Navbar onDrawerChange={setDrawerOpen}  />

      <ScrollView scrollEventThrottle={16} onScroll={onScroll}>
        <Slot />
      </ScrollView>

      <Animated.View style={{ transform: [{ translateY: bottomNavAnim }], zIndex: 1000 }}>
        <BottomNav hidden={drawerOpen} />
      </Animated.View>
    </View>
  );
};

export default HomeLayout;
