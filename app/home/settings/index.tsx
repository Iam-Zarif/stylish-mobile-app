import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Pressable,
  Switch,
} from "react-native";
import { useTheme } from "../../../provider/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = () => {
  const { isDark, toggleTheme } = useTheme();

  const settingsSections = [
    {
      title: "Account",
      items: [
        { label: "Profile", icon: "person-circle-outline", onPress: () => {} },
        { label: "Payment Methods", icon: "card-outline", onPress: () => {} },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          label: "Notifications",
          icon: "notifications-outline",
          onPress: () => {},
        },
        { label: "Language", icon: "language-outline", onPress: () => {} },
        {
          label: "Dark Mode",
          icon: isDark ? "moon" : "sunny",
          isSwitch: true,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          label: "Help Center",
          icon: "help-circle-outline",
          onPress: () => {},
        },
        {
          label: "Privacy Policy",
          icon: "document-text-outline",
          onPress: () => {},
        },
      ],
    },
    {
      title: "Danger Zone",
      items: [{ label: "Logout", icon: "log-out-outline", onPress: () => {} }],
    },
  ];

  return (
    <View
      className={`flex-1 ${isDark ? "bg-black" : "bg-white"} pb-12`}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={isDark ? "#000000" : "#FFFFFF"}
      />

      <ScrollView
        className="px-4 pt-4"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Settings
        </Text>

        {settingsSections.map((section, index) => (
          <View key={index} className="mb-4">
            <Text
              className={`text-sm font-semibold mb-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {section.title.toUpperCase()}
            </Text>

            {section.items.map((item, idx) => {
              const isSwitch = !!item.isSwitch;
              return (
                <View
                  key={idx}
                  className={`flex-row items-center justify-between px-3 rounded-xl mb-2 ${
                    isDark ? "bg-neutral-900" : "bg-gray-100"
                  }`}
                  style={{
                    paddingVertical: isSwitch ? 4 : 16, 
                  }}
                >
                  <View className="flex-row items-center gap-2 space-x-3">
                    <Ionicons
                      name={item.icon as any}
                      size={22}
                      color={
                        isSwitch
                          ? isDark
                            ? "#FACC15"
                            : "#F97316"
                          : isDark
                            ? "white"
                            : "gray-800"
                      }
                    />
                    <Text
                      className={`text-base font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Text>
                  </View>

                  {isSwitch ? (
                    <Switch
                      trackColor={{ false: "#767577", true: "#FACC15" }}
                      thumbColor="#FFF"
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleTheme}
                      value={isDark}
                    />
                  ) : (
                    <Pressable onPress={item.onPress}>
                      <Ionicons
                        name="chevron-forward"
                        size={20}
                        color={isDark ? "white" : "gray-500"}
                      />
                    </Pressable>
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
