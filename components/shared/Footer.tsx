import React from "react";
import { View, Text, Pressable, Image, Linking } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "../../provider/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Footer = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { name: "facebook", icon: "facebook", url: "https://facebook.com" },
    { name: "twitter", icon: "twitter", url: "https://twitter.com" },
    { name: "instagram", icon: "instagram", url: "https://instagram.com" },
  ];

  const navigateToLink = (url: string) => {
    Linking.openURL(url).catch(err => console.log(err));
  };

  return (
    <SafeAreaView
      edges={["bottom"]}
      className={`${isDark ? "bg-black border-neutral-700" : "bg-white border-neutral-200"} border-t px-5 pt-6`}
    >
      {/* Logo & Name */}
      <View className="flex-row justify-between items-center mb-6">
        <View className="flex-row items-center">
          <Image
            source={require("../../assets/favicon.png")}
            className="w-12 h-12 mr-2"
            resizeMode="contain"
          />
          <Text className={`text-lg font-bold ${isDark ? "text-white" : "text-[#4392F9]"}`}>
            Stylish
          </Text>
        </View>

        {/* Social Icons */}
        <View className="flex-row items-center space-x-4">
          {socialLinks.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => navigateToLink(item.url)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <Entypo
                name={item.icon as any}
                size={22}
                color={isDark ? "#fff" : "#1b1c1c"}
              />
            </Pressable>
          ))}
        </View>
      </View>


      <View className="flex-row justify-between mt-4 mb-6">
        {[
          { title: "Company", links: ["About Us", "Careers", "Blog"] },
          { title: "Support", links: ["Contact", "FAQ", "Shipping"] },
          { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
        ].map((section, idx) => (
          <View key={idx} className="flex-1 mr-4">
            <Text className={`font-semibold mb-2 ${isDark ? "text-white" : "text-neutral-800"}`}>
              {section.title}
            </Text>
            {section.links.map((link, index) => (
              <Text
                key={index}
                className={`text-sm mb-1 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
              >
                {link}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Copyright */}
      <View className="border-t border-neutral-300 py-3">
        <Text className={`text-xs text-center ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
          © {new Date().getFullYear()} Stylish. All rights reserved.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Footer;
