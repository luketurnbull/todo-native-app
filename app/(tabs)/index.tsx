import { View } from "react-native";
import Todo from "~/components/todo";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function AllTodosScreen() {
  return (
    <View className="p-5 h-full flex justify-center">
      <Card>
        <CardHeader>
          <CardTitle>All Todos</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex flex-col gap-2">
            <Todo title="Buy milk" />
            <Todo title="Buy bread" />
            <Todo title="Buy eggs" />
            <Todo title="Buy butter" />
          </View>
        </CardContent>
      </Card>
    </View>
  );
}
