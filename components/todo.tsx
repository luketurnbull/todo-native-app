import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { Text } from "./ui/text";
import { View } from "react-native";
export default function Todo({ title }: { title: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <View className="flex flex-row items-center gap-2">
      <Checkbox
        className="w-full"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Text>{title}</Text>
    </View>
  );
}
