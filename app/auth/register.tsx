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

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
      <ScrollView keyboardShouldPersistTaps="handled"  showsVerticalScrollIndicator={false}>
    <SafeAreaView className="flex-1 bg-[#FAFAFA] pb-20">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
     

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
              className="ml-3 flex-1 placeholder:text-neutral-600"
              value={name} placeholderTextColor="#242424"
              onChangeText={setName}
            />
          </View>

          <Text className="text-neutral-800 font-semibold mb-1">Email</Text>
          <View className="flex-row items-center border border-neutral-300 rounded-lg px-4 py-1 mb-4 bg-white">
            <Ionicons name="mail" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Enter your email"
              className="ml-3 flex-1 placeholder:text-neutral-600"
              value={email} placeholderTextColor="#242424"
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
              className="ml-3 flex-1 placeholder:text-neutral-600"
              value={password} placeholderTextColor="#242424"
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

          <Text className="text-neutral-800 font-semibold mb-1">
            Confirm Password
          </Text>
          <View className="flex-row items-center border border-neutral-300 rounded-lg px-4 py-1 mb-6 bg-white">
            <MaterialIcons name="lock-outline" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Confirm your password"
              className="ml-3 flex-1 placeholder:text-neutral-600"
              value={confirmPassword} placeholderTextColor="#242424"
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

          <View className="flex-row justify-between mb-8 px-12">
            <Pressable
              className="w-12 h-12 border border-[#F83758] bg-[#F83758]/5 flex-row justify-center items-center rounded-full"
              android_ripple={{ color: "#E5E5E5" }}
            >
              <Image
                source={require("../../public/auth/google.png")}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </Pressable>

            <Pressable
              className="w-12 h-12 border border-[#F83758] bg-[#F83758]/5 flex-row justify-center items-center rounded-full"
              android_ripple={{ color: "#E5E5E5" }}
            >
              <Image
                source={require("../../public/auth/facebook.png")}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </Pressable>

            <Pressable
              className="w-12 h-12 border border-[#F83758] bg-[#F83758]/5 flex-row justify-center items-center rounded-full"
              android_ripple={{ color: "#E5E5E5" }}
            >
              <Image
                source={require("../../public/auth/phone.png")}
                className="w-6 h-6"
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
      </KeyboardAvoidingView>
    </SafeAreaView>
        </ScrollView>
  );
};

export default Register;
