import * as React from 'react';
import { Alert, View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

import { Text } from '~/components/ui/text';
import { Form, FormDescription, FormField, FormInput, FormItem, FormLabel, FormMessage, FormTextarea, useFormField } from './components/form';
import { useForm } from 'react-hook-form';
import { Input } from '~/components/ui/input';

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function Screen() {

  const formSchema = z.object({
    title: z.string()
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ''
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    Alert.alert('Submitted!', JSON.stringify(values, null, 2), [
      {
        text: 'OK'
      },
    ]);
  }

  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
        <CardHeader className='items-center'>
          <Text className='text-xl font-semibold'>Daily Tasks</Text>
        </CardHeader>
        <CardContent>

          <Form {...form}>
            <FormDescription className='m-5'>
              <Text className='text-sm text-muted-foreground'>
                Fill out the form below to create a new task.
              </Text>
            </FormDescription>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormInput
                  label='Your Task'
                  placeholder='enter your task here'
                  autoCapitalize='none'
                  autoComplete='off'
                  {...field}
                />
              )}
            />
            <View className='flex-row gap-3 m-5 justify-center'>
              <Button onPress={form.handleSubmit(onSubmit)}>
                <Text>Submit</Text>
              </Button>
            </View>
          </Form>

        </CardContent>
        <CardFooter className='flex-col justify-center'>
          <Text className='text-sm italic text-muted-foreground'>"Random quote here"</Text>
        </CardFooter>
      </Card>
    </View>
  );
}

