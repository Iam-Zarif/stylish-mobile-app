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
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingHorizontal: 24,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="items-center mb-6">
            <Text className="text-4xl font-bold text-center mb-2 text-[#F83758]">
              Welcome Back
            </Text>
            <Text className="text-center text-neutral-400 mb-10">
              Login to continue to your account
            </Text>
          </View>

          <Text className="text-neutral-800 font-semibold mb-1">Email</Text>
          <View className="flex-row items-center border border-neutral-300 rounded-xl px-4 py-1 mb-4 bg-white">
            <Ionicons name="mail" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Enter your email"
              className="ml-3 flex-1"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text className="text-neutral-800 font-semibold mb-1">Password</Text>
          <View className="flex-row items-center border border-neutral-300 rounded-xl px-4 py-1 mb-2 bg-white">
            <MaterialIcons name="lock-outline" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Enter your password"
              className="ml-3 flex-1"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color="#9CA3AF"
              />
            </Pressable>
          </View>

          <View className="flex-row justify-between items-center mb-6">
            <Pressable
              onPress={() => setRememberMe(!rememberMe)}
              className="flex-row items-center"
            >
              <View
                className={`w-5 h-5 border rounded-sm mr-2 ${
                  rememberMe
                    ? "bg-[#F83758] border-[#F83758]"
                    : "border-neutral-300"
                }`}
              />
              <Text>Remember Me</Text>
            </Pressable>

            <Pressable onPress={() => router.push("/auth/forgot-password")}>
              <Text className="text-[#F83758] font-bold">Forgot Password?</Text>
            </Pressable>
          </View>

          <Pressable className="bg-[#F83758] py-3 rounded-lg mb-6">
            <Text className="text-white font-bold text-center text-lg">
              Login
            </Text>
          </Pressable>

          <Text className="text-center text-neutral-400 mb-4">
            Or continue with
          </Text>

          <View className="flex-row justify-center mb-8 gap-3">
            <Pressable
              className="flex-1 py-3 flex-row justify-center items-center rounded-full "
              android_ripple={{ color: "#E5E5E5" }}
            >
              <Image
                source={require("../../public/auth/google.png")}
                className="w-10 h-10"
                resizeMode="contain"
              />
            </Pressable>
            <Pressable
              className="flex-1 py-3 flex-row justify-center items-center rounded-full "
              android_ripple={{ color: "#E5E5E5" }}
            >
              <Image
                source={require("../../public/auth/facebook.png")}
                className="w-10 h-10"
                resizeMode="contain"
              />
            </Pressable>
            <Pressable
              className="flex-1 py-3 flex-row justify-center items-center rounded-full "
              android_ripple={{ color: "#E5E5E5" }}
            >
              <Image
                source={require("../../public/auth/phone.png")}
                className="w-10 h-10"
                resizeMode="contain"
              />
            </Pressable>
          </View>

          <View className="flex-row justify-center mt-4">
            <Text className="text-neutral-500">Don't have an account? </Text>
            <Pressable onPress={() => router.push("/auth/register")}>
              <Text className="text-[#F83758] font-bold">Sign Up</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
