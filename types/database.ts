import { Models } from "react-native-appwrite";

export interface ToDoListDocument extends Models.Document, ToDoListItem {
} 

export interface ToDoListItem
{
    userId: string;
    title: string;
    completed: boolean;
}