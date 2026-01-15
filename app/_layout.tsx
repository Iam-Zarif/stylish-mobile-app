import { Slot } from "expo-router";
import "../global.css";
import { ThemeProvider, useTheme } from "../provider/ThemeContext";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { StyleSheet, View } from "react-native";

function ThemedLayout() {
  const { isDark } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#000" : "#f2f4f5" },
      ]}
    >
      <Slot />
  
    </View>
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
