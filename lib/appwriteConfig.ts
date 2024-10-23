import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client()
    .setProject('671863230029b6fe6d6a')
    .setPlatform('com.example.idea-tracker');


export const account = new Account(client);
export const databases = new Databases(client);
