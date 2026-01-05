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

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end", paddingVertical: 40, paddingHorizontal: 24 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="items-center mb-6">
            <Image
              source={require("../../assets/favicon.png")}
              className="w-12 h-12 mb-6"
              resizeMode="contain"
            />
            <Text className="text-4xl font-bold text-center mb-2 text-[#F83758]">
              Create Account
            </Text>
            <Text className="text-center text-neutral-400 mb-10">
              Sign up to get started
            </Text>
          </View>

          <Text className="text-neutral-800 font-semibold mb-1">Name</Text>
          <TextInput
            placeholder="Enter your full name"
            className="border border-neutral-300 rounded-lg px-4 py-3 mb-4"
            value={name}
            onChangeText={setName}
          />

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
            className="border border-neutral-300 rounded-lg px-4 py-3 mb-4"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text className="text-neutral-800 font-semibold mb-1">Confirm Password</Text>
          <TextInput
            placeholder="Confirm your password"
            className="border border-neutral-300 rounded-lg px-4 py-3 mb-6"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <Pressable className="bg-[#F83758] py-3 rounded-lg mb-6">
            <Text className="text-white font-bold text-center text-lg">
              Sign Up
            </Text>
          </Pressable>

          <Text className="text-center text-neutral-400 mb-4">
            Or continue with
          </Text>

          <View className="flex-row justify-center mb-8 gap-3">
            <Pressable className="flex-1 rounded-lg py-3 flex-row justify-center items-center bg-white"
              android_ripple={{ color: "#E5E5E5" }}
            >
              <Image
                source={require("../../public/auth/google.png")}
                className="w-10 h-10"
                resizeMode="contain"
              />
            </Pressable>

            <Pressable className="flex-1 rounded-lg py-3 flex-row justify-center items-center bg-white"
              android_ripple={{ color: "#E5E5E5" }}
            >
              <Image
                source={require("../../public/auth/facebook.png")}
                className="w-10 h-10"
                resizeMode="contain"
              />
            </Pressable>

            <Pressable className="flex-1 rounded-lg py-3 flex-row justify-center items-center bg-white"
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
            <Text className="text-neutral-500">Already have an account? </Text>
            <Pressable onPress={() => router.push("/auth/login")}>
              <Text className="text-[#F83758] font-bold">Login</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
