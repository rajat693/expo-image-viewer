import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Text } from "./components/ui/text";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="text-red-600" size="xl">
          Open up App.tsx to start working on your app!
        </Text>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
