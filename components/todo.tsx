import { Checkbox } from "./ui/checkbox";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { View } from "react-native";
import { Trash2 } from "lucide-react-native";
import { extendedClient } from "~/myDbModule";

export default function Todo({
  id,
  title,
  completed,
}: {
  id: number;
  title: string;
  completed: boolean;
}) {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row items-center gap-2">
        <Checkbox
          className="w-full"
          checked={completed}
          onCheckedChange={() => {
            extendedClient.todo.update({
              where: { id },
              data: { completed: !completed },
            });
          }}
        />
        <Text
          className={`${
            completed ? "text-gray-400 line-through" : "text-gray-900"
          }`}
        >
          {title}
        </Text>
      </View>
      <Button
        variant="ghost"
        onPress={() => {
          extendedClient.todo.delete({
            where: { id },
          });
        }}
      >
        <Trash2 />
      </Button>
    </View>
  );
}
