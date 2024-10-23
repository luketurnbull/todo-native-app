// import { ID } from "react-native-appwrite";
// import React, { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
// import { account } from "~/lib/appwriteConfig";


// const UserContext = createContext(null);

// export function useUser() {
//     return useContext(UserContext);
// }

// export function UserProvider(props: ReactNode) {
//     const [user, setUser] = useState(null);

//     async function login(email: string, password: string) {
//         const loggedIn = await account.createEmailPasswordSession(email, password);
//         setUser(loggedIn);
//     }

//     async function logout() {
//         await account.deleteSession("current");
//         setUser(null);
//         toast('Logged out');
//     }

//     async function register(email, password) {
//         await account.create(ID.unique(), email, password);
//         await login(email, password);
//         toast('Account created');
//     }

//     async function init() {
//         try {
//             const loggedIn = await account.get();
//             setUser(loggedIn);
//         } catch (err) {
//             setUser(null);
//         }
//     }

//     useEffect(() => {
//         init();
//     }, []);

//     return (
//         <UserContext.Provider value={{ current: user, login, logout, register }}>
//             {props.children}
//         </UserContext.Provider>
//     );
// }
