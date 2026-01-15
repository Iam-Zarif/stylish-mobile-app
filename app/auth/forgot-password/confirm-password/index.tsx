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

const ForgotPassConfirmPass = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 ">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable
          onPress={() => router.back()}
          className="flex-row items-center mb-6"
        >
          <Ionicons name="arrow-back" size={22} color="#F83758" />
          <Text className="ml-2 text-[#F83758] font-bold">Back</Text>
        </Pressable>

        <View className="items-center mb-10">
          <Text className="text-3xl font-bold text-[#F83758] mb-3">
            Reset Password
          </Text>
          <Text className="text-center text-neutral-400">
            Set your new password below
          </Text>
        </View>

        <Text className="text-neutral-800 font-semibold mb-1">
          New Password
        </Text>
        <View className="flex-row items-center border border-neutral-300 rounded-lg px-4 mb-4">
          <Ionicons name="lock-closed-outline" size={20} color="#A3A3A3" />
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="Enter new password" placeholderTextColor="#242424"
            className="flex-1 px-3 py-3 placeholder:text-neutral-600"
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#A3A3A3"
            />
          </Pressable>
        </View>

        <Text className="text-neutral-800 font-semibold mb-1">
          Confirm Password
        </Text>
        <View className="flex-row items-center border border-neutral-300 rounded-lg px-4 mb-6">
          <Ionicons name="lock-closed-outline" size={20} color="#A3A3A3" />
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            placeholder="Confirm new password placeholder:text-neutral-600"
            className="flex-1 px-3 py-3" placeholderTextColor="#242424"
          /> 
          <Pressable
            onPress={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          >
            <Ionicons
              name={
                showConfirmPassword ? "eye-off-outline" : "eye-outline"
              }
              size={20}
              color="#A3A3A3"
            />
          </Pressable>
        </View>

        <Pressable className="bg-[#F83758] py-3 rounded-lg">
          <Text className="text-white font-bold text-center text-lg">
            Confirm Password
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassConfirmPass;
