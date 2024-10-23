import * as React from 'react';
import { View } from 'react-native';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '~/components/ui/card';

import { Text } from '~/components/ui/text';
import AddToListForm from './components/add-to-list-form';
import TaskList from './components/task-list';

export default function Screen() {


  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
        <CardContent>
          <TaskList />
          <AddToListForm />
        </CardContent>
      </Card>
    </View>
  );
}

