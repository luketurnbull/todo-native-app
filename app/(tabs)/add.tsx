import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { TextInput, View } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { useRef, useState } from "react";
import { extendedClient } from "~/myDbModule";

export default function AddScreen() {
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setValue] = useState("");

  const handleAdd = () => {
    if (inputValue.length === 0) {
      return;
    }

    if (inputRef.current) {
      inputRef.current.clear();
    }

    console.log(inputValue);

    extendedClient.todo.create({
      data: {
        title: inputValue,
      },
    });

    setValue("");
  };

  return (
    <View className="flex justify-center items-center p-4 h-full">
      <Card className="w-full">
        <CardHeader>
          <Text>What do you want to do?</Text>
        </CardHeader>
        <CardContent>
          <View className="flex flex-col gap-4">
            <Input ref={inputRef} value={inputValue} onChangeText={setValue} />
            <Button onPress={handleAdd}>
              <Text>Add</Text>
            </Button>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}
