import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text, View } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-600">
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </GluestackUIProvider>
  );
}
