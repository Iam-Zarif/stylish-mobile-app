import React from "react";
import { View, Image, StatusBar, Text, Pressable, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar
        barStyle="light-content"    
        backgroundColor="#000000"  
      />

      <View className="flex-1 relative">
        <Image
          source={require("../public/welcome/start.png")}
          className="w-full h-full"
          resizeMode="cover"
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ position: "absolute", bottom: 0, width: "100%", height: "45%" }}
        />

        <View className="absolute bottom-6 w-full px-8">
          <Text className="text-white text-5xl font-bold text-center">
            You want Authentic, here you go!
          </Text>
          <Text className="text-white mt-3 text-center">
            Find it here, buy it now!
          </Text>

          <Pressable
            className="mt-4 rounded-lg py-3 bg-[#F83758]"
            android_ripple={{ color: "#FF6F81" }}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            onPress={() => router.push("/welcome1")}
          >
            <Text className="text-white text-xl font-bold text-center">
              Get Started
            </Text>
          </Pressable>
        </View>

     
      </View>
    </SafeAreaView>
  );
};

export default App;
