import { ID, Permission, Role, Query, Models } from "react-native-appwrite";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { databases } from "~/lib/appwriteConfig";
import { ToDoListItem, ToDoListDocument } from "~/types/database";

export const LISTS_DATABASE_ID = "671863e6001202767e40"; // Replace with your database ID
export const LISTS_COLLECTION_ID = "6718640a00063f08dd5e"; // Replace with your collection ID

interface ListContextType {
    current: ToDoListDocument[];
    add: (list: ToDoListItem) => Promise<void>;
    remove: (id: string) => Promise<void>;
    updateDocument: (id: string, toDoListItem: ToDoListItem) => Promise<void>;
}

const ListContext = createContext<ListContextType | null>(null);
interface ListProviderProps {
    children: ReactNode;
}

export function useLists() {
    return useContext(ListContext);
}

export function ListProvider(props: ListProviderProps) {

    const [lists, setList] = useState<ToDoListDocument[]>([]);


    async function add(listItem: ToDoListItem) {
        const response = await databases.createDocument<ToDoListDocument>(
            LISTS_DATABASE_ID,
            LISTS_COLLECTION_ID,
            ID.unique(),
            listItem,
            [Permission.write(Role.any())]
        );
        setList([...lists, response]);
    }

    async function remove(id: string) {
        await databases.deleteDocument(LISTS_DATABASE_ID, LISTS_COLLECTION_ID, id);
        setList((lists) => lists.filter((lists) => lists.$id !== id));
        await init(); // Refetch ideas to ensure we have 10 items
    }

    async function updateDocument(id: string, listItem: ToDoListItem) {
        console.log(id, listItem);
        const response = await databases.updateDocument(LISTS_DATABASE_ID, LISTS_COLLECTION_ID, id, listItem, [Permission.write(Role.any())]);
        console.log(response);
        await init(); // Refetch ideas to ensure we have 10 items
    }

    async function init() {
        const response = await databases.listDocuments<ToDoListDocument>(
            LISTS_DATABASE_ID,
            LISTS_COLLECTION_ID,
            [Query.orderDesc("$createdAt"), Query.limit(10)]
        );
        setList(response.documents);
    }

    useEffect(() => {
        init();
    }, []);


    return (
        <ListContext.Provider value={{ current: lists, add, remove, updateDocument }}>
            {props.children}
        </ListContext.Provider>
    );
}