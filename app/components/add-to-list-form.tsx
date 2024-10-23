import * as React from 'react';
import { Alert, View } from 'react-native';
import { Button } from '~/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLists } from '../context/ListContext';
import { ToDoListItem } from "~/types/database";

import { Text } from '~/components/ui/text';
import { Form, FormDescription, FormField, FormInput } from '../components/ui/form';
import { useForm } from 'react-hook-form';


export default function AddToListForm() {

    const lists = useLists();

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
        lists?.add(
            {
                userId: '1',
                title: values.title,
                completed: false,
            } as ToDoListItem
        );
    }

    return (

        <Form {...form}>
            <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                    <FormInput
                        label='Your next task'
                        placeholder='Wash the dishes'
                        autoCapitalize='none'
                        autoComplete='off'
                        {...field}
                    />
                )}
            />
            <View className='flex-row gap-3 m-5 justify-center'>
                <Button onPress={form.handleSubmit(onSubmit)}>
                    <Text>Add</Text>
                </Button>
            </View>
        </Form>
    );
}

