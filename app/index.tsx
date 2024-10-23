import * as React from 'react';
import { View } from 'react-native';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

import { Text } from '~/components/ui/text';
import AddToListForm from './components/add-to-list-form';

export default function Screen() {


  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
        <CardHeader className='items-center'>
          <Text className='text-xl font-semibold'>Daily Tasks</Text>
        </CardHeader>
        <CardContent>
          <AddToListForm />
        </CardContent>
        <CardFooter className='flex-col justify-center'>
          <Text className='text-sm italic text-muted-foreground'>"Random quote here"</Text>
        </CardFooter>
      </Card>
    </View>
  );
}

