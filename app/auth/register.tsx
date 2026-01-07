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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA] py-10">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="px-6 justify-center flex-1">
          <View className="items-center mb-1">
            <Text className="text-4xl font-bold text-center mb-2 text-[#F83758]">
              Create Account
            </Text>
            <Text className="text-center text-neutral-400 mb-10">
              Sign up to get started
            </Text>
          </View>

          <Text className="text-neutral-800 font-semibold mb-1">Name</Text>
          <View className="flex-row items-center border border-neutral-300 rounded-lg px-4 py-1 mb-4 bg-white">
            <Ionicons name="person-outline" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Enter your full name"
              className="ml-3 flex-1"
              value={name}
              onChangeText={setName}
            />
          </View>

          <Text className="text-neutral-800 font-semibold mb-1">Email</Text>
          <View className="flex-row items-center border border-neutral-300 rounded-lg px-4 py-1 mb-4 bg-white">
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
          <View className="flex-row items-center border border-neutral-300 rounded-lg px-4 py-1 mb-4 bg-white">
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

          <Text className="text-neutral-800 font-semibold mb-1">Confirm Password</Text>
          <View className="flex-row items-center border border-neutral-300 rounded-lg px-4 py-1 mb-6 bg-white">
            <MaterialIcons name="lock-outline" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Confirm your password"
              className="ml-3 flex-1"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirm}
            />
            <Pressable onPress={() => setShowConfirm(!showConfirm)}>
              <Ionicons
                name={showConfirm ? "eye-off" : "eye"}
                size={20}
                color="#9CA3AF"
              />
            </Pressable>
          </View>

          <Pressable className="bg-[#F83758] py-3 rounded-lg mb-6">
            <Text className="text-white font-bold text-center text-lg">
              Sign Up
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

          <View className="flex-row justify-center  ">
            <Text className="text-neutral-500">Already have an account? </Text>
            <Pressable onPress={() => router.push("/auth/login")}>
              <Text className="text-[#F83758] font-bold">Login</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
