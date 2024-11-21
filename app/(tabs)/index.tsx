import { View } from "react-native";
import Todo from "~/components/todo";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { extendedClient } from "~/myDbModule";

export default function AllTodosScreen() {
  const todos = extendedClient.todo.useFindMany();

  return (
    <View className="p-5 h-full flex justify-center">
      <Card>
        <CardHeader>
          <CardTitle>All Todos</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex flex-col">
            {todos.map((todo) => (
              <Todo
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                key={todo.id}
              />
            ))}
          </View>
        </CardContent>
      </Card>
    </View>
  );
}
