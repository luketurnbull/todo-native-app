import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

export default function AddScreen() {
  return (
    <View className="flex justify-center items-center p-4 h-full">
      <Card className="w-full">
        <CardHeader>
          <Text>What do you want to do?</Text>
        </CardHeader>
        <CardContent>
          <View className="flex flex-col gap-4">
            <Input />
            <Button>
              <Text>Add</Text>
            </Button>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}
