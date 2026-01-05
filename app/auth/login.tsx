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

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingVertical: 40, paddingHorizontal: 24 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="items-center mb-6">
            <Image
              source={require("../../assets/favicon.png")}
              className="w-12 h-12 mb-6"
              resizeMode="contain"
            />
            <Text className="text-4xl font-bold text-center mb-2 text-[#F83758]">
              Welcome Back
            </Text>
            <Text className="text-center text-neutral-400 mb-10">
              Login to continue to your account
            </Text>
          </View>

          <Text className="text-neutral-800 font-semibold mb-1">Email</Text>
          <TextInput
            placeholder="Enter your email"
            className="border border-neutral-300 rounded-lg px-4 py-3 mb-4"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text className="text-neutral-800 font-semibold mb-1">Password</Text>
          <TextInput
            placeholder="Enter your password"
            className="border border-neutral-300 rounded-lg px-4 py-3 mb-2"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

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

            <Pressable>
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
              className="flex-1 rounded-lg py-3 flex-row justify-center items-center bg-white"
              android_ripple={{ color: "#E5E5E5" }}
            >
              <Image
                source={require("../../public/auth/google.png")}
                className="w-10 h-10"
                resizeMode="contain"
              />
            </Pressable>

            <Pressable
              className="flex-1 rounded-lg py-3 flex-row justify-center items-center bg-white"
              android_ripple={{ color: "#E5E5E5" }}
            >
              <Image
                source={require("../../public/auth/facebook.png")}
                className="w-10 h-10"
                resizeMode="contain"
              />
            </Pressable>

            <Pressable
              className="flex-1 rounded-lg py-3 flex-row justify-center items-center bg-white"
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
