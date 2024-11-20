import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { View } from "react-native";
import { Trash2 } from "lucide-react-native";

export default function Todo({
  title,
  onDelete,
}: {
  title: string;
  onDelete: () => void;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row items-center gap-2">
        <Checkbox
          className="w-full"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Text
          className={`${
            checked ? "text-gray-400 line-through" : "text-gray-900"
          }`}
        >
          {title}
        </Text>
      </View>
      <Button variant="ghost">
        <Trash2 />
      </Button>
    </View>
  );
}
