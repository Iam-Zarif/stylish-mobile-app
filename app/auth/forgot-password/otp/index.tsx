import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
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

const ForgotPassOtpPage = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(180);

  const inputs = otp.map(() => useRef<TextInput>(null));

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      inputs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center px-6"
      >
        <Pressable
          onPress={() => router.push("/auth/forgot-password")}
          className="flex-row items-center mb-6"
        >
          <Ionicons name="arrow-back" size={22} color="#F83758" />
          <Text className="ml-2 text-[#F83758] font-bold">Back</Text>
        </Pressable>

        <View className="items-center mb-10">
          <Text className="text-3xl font-bold text-[#F83758] mb-3">
            Enter OTP
          </Text>
          <Text className="text-center text-neutral-400">
            Enter OTP sent to mos******gmail.com
          </Text>
        </View>

        <View className="flex-row justify-center gap-3 mb-8">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputs[index]}
              value={digit}
              onChangeText={(v) => handleChange(v, index)}
              onKeyPress={({ nativeEvent }) =>
                handleKeyPress(nativeEvent.key, index)
              }
              keyboardType="number-pad"
              maxLength={1}
              className="w-14 h-14 border border-neutral-300 rounded-lg text-center text-2xl font-bold"
            />
          ))}
        </View>

        <Pressable
          onPress={() =>
            router.push("/auth/forgot-password/confirm-password")
          }
          className="bg-[#F83758] py-3 rounded-lg mb-6"
        >
          <Text className="text-white font-bold text-center text-lg">
            Verify
          </Text>
        </Pressable>

        <View className="items-center gap-3">
          <Text
            className={`font-semibold ${
              timeLeft === 0 ? "text-red-500" : "text-neutral-500"
            }`}
          >
            {minutes}:{seconds}
          </Text>

          <Pressable disabled={timeLeft !== 0}>
            <Text
              className={`font-bold ${
                timeLeft === 0 ? "text-[#F83758]" : "text-neutral-300"
              }`}
            >
              Resend
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassOtpPage;
