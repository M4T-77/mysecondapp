import ExtraDetails from "@/components/ExtraDetails";
import ProfileDetails from "@/components/ProfileDetails";
import IconButton from "@/components/ui/IconButton";
import { View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="flex-col items-center justify-center gap-10 h-screen bg-gray-100">
      <View className="absolute top-14 left-4">
        <IconButton iconName={"arrow-back"} />
      </View>
      <View className="absolute top-14 right-4">
        <IconButton iconName={"menu"}/>
      </View>
      <ProfileDetails />
      <ExtraDetails />
    </View>
  );
}
