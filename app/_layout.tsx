import IconButton from "@/components/ui/IconButton";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <IconButton iconName='logo-tiktok' color='black'></IconButton>
      <IconButton iconName='logo-youtube' color='red'></IconButton>
    </Stack>
  );
}
