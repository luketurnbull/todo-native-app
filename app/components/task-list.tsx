import * as React from 'react';
import { Alert, GestureResponderEvent, View } from 'react-native';
import { Button } from '~/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLists } from '../context/ListContext';
import { ToDoListItem } from "~/types/database";

import { Text } from '~/components/ui/text';
import { Form, FormDescription, FormField, FormInput, FormCheckbox } from '../components/ui/form';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card';


export default function TaskList() {

    const lists = useLists();

    const listItems = lists?.current;

    const completed = listItems?.filter((item) => item.completed);
    const incomplete = listItems?.filter((item) => !item.completed);

    const formSchema = z.object(
        listItems?.reduce((acc, item) => {
            acc[item.$id] = z.boolean();
            return acc;
        }, {} as Record<string, z.ZodBoolean>) || {}
    );
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: listItems?.reduce((acc, item) => {
            acc[item.$id] = item.completed;
            return acc;
        }, {} as Record<string, boolean>) || {}
    });

    //onchange toggle completed status
    function OnChange(id: string, value: boolean) {
        console.log(id, value);
        const item = listItems?.find((item) => item.$id === id);
        if (!item) {
            return
        }
        const updatedItem: ToDoListItem = {
            userId: item.userId,
            title: item.title,
            completed: value
        };
        lists?.updateDocument(id, updatedItem
        );

    }

    return (

        <Card className='w-full max-w-sm p-6 rounded-2xl'>
            <CardHeader className='items-center'>
                <Text className='text-xl font-semibold'>ToDo</Text>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    {incomplete?.map((item) => (
                        <FormField
                            control={form.control}
                            name={item.$id}
                            render={({ field }) => (
                                <FormCheckbox
                                    label={item.title}
                                    {...field}
                                    onPress={() => OnChange(field.name, !field.value)}
                                />
                            )}
                        />
                    ))}
                </Form>
                <View className='flex-row justify-center gap-3'>
                    <Text className='text-sm text-muted-foreground'>
                        Completed: {completed?.length}
                    </Text>
                </View>
                <Form {...form}>
                    {completed?.map((item) => (
                        <FormField
                            control={form.control}
                            name={item.$id}
                            render={({ field }) => (
                                <FormCheckbox
                                    label={item.title}
                                    {...field}
                                    onPress={() => OnChange(field.name, !field.value)}
                                />
                            )}
                        />
                    ))}
                </Form>
            </CardContent>
        </Card>

    );
}

