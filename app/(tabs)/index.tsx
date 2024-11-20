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
            <Todo title="Buy milk" onDelete={() => {}} />
            <Todo title="Buy bread" onDelete={() => {}} />
            <Todo title="Buy eggs" onDelete={() => {}} />
            <Todo title="Buy butter" onDelete={() => {}} />
          </View>
        </CardContent>
      </Card>
    </View>
  );
}
