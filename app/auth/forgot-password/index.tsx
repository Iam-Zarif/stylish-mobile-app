import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const ForgotPassEmailScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}

      >
        <Pressable
          onPress={() => router.push("/auth/login")}
          className="flex-row items-center mb-6"
        >
          <Ionicons name="arrow-back" size={22} color="#F83758" />
          <Text className="ml-2 text-[#F83758] font-bold">Back</Text>
        </Pressable>

        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-center mb-3 text-[#F83758]">
            Forgot Password
          </Text>
          <Text className="text-center text-neutral-400">
            Enter your email to receive a verification code
          </Text>
        </View>

        <Text className="text-neutral-800 font-semibold mb-1">Email</Text>

        <View className="flex-row items-center border border-neutral-300 rounded-lg px-4 py-1 mb-6">
          <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Enter your email"
            className="flex-1 ml-3 placeholder:text-neutral-600"
            value={email} placeholderTextColor="#242424"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Pressable
          onPress={() => router.push("/auth/forgot-password/otp")}
          className="bg-[#F83758] py-3 rounded-lg"
        >
          <Text className="text-white font-bold text-center text-lg">
            Submit
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassEmailScreen;
