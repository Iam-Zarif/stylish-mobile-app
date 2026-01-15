import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import { Mail } from "lucide-react-native";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {};

  return (
    <View className="pb-20 mt-10">
      <ImageBackground
        source={{
          uri: "https://static.vecteezy.com/system/resources/thumbnails/013/087/515/small/illustration-grid-pattern-blue-abstract-background-for-ecommerce-signsretail-shopping-advertisement-business-agency-ads-campaign-marketing-email-newsletter-landing-pages-header-webs-motion-vector.jpg",
        }}
        className="mt-6 border border-neutral-200 rounded-xl shadow-md "
        style={{ overflow: "hidden", width: "100%", minHeight: 250 }}
      >
        <View className=" px-5 py-6 rounded-xl">
          <Text className="text-xl font-bold text-center text-white mb-2">
            Join Our Newsletter
          </Text>
          <Text className="text-center text-gray-100 text-sm mb-4">
            Get exclusive deals, latest updates & member‑only offers
          </Text>

          <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-full px-3">
            <Mail size={20} color="#6B7280" />
            <TextInput
              className="flex-1 bg-gray-100 px-3  placeholder:text-gray-600"
              placeholder="Enter your email placeholder:text-neutral-600"
              placeholderTextColor="#242424"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <Pressable
            onPress={handleSubscribe}
            className="bg-[#F83758] rounded-full py-3 mt-4 items-center"
          >
            <Text className="text-neutral-200 font-semibold text-base">
              Subscribe Now
            </Text>
          </Pressable>

          <Text className="text-center text-gray-100 text-xs mt-3">
            We respect your privacy. Unsubscribe anytime.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NewsletterSubscribe;
