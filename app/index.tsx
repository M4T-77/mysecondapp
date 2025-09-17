import ProfileDetails from "@/components/ProfileDetails";
import { View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="flex-col bg-lightblue items-center justify-center">
      <ProfileDetails />
    </View>
  );
}
