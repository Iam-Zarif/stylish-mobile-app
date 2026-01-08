import { Slot } from "expo-router";
import "../global.css";
import { ThemeProvider, useTheme } from "../provider/ThemeContext";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaView, StyleSheet } from "react-native";

function ThemedLayout() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#000" : "#fff" },
      ]}
    >
      <Slot />
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedLayout />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
