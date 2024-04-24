import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

const AuthContext = createContext() 

export function AuthContextProvider ({children}) {
    const [user, setUser] = useState({})

    async function signUp(username, phone, email, password) {
        try{
            const { user: newUser } = await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, 'users', newUser.uid), {
                email: newUser.email, 
                phone,
                username
            });
            await updateProfile(auth.currentUser, {
                displayName:username
            });
            return newUser
        }catch(error){
            alert(error)
        }
        
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser);
        })
        return () => {
            unsubscribe();
        }
    })

    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )

}

export function UserAuth() {
    return useContext(AuthContext)
}