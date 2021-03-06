import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()

const useFirebase = () => {
    const [user , setUser]=useState({});
    const [isLoading , setIsLoading] =useState(true)

    const auth = getAuth()
    const googleProvider= new GoogleAuthProvider();

    const signInWithGoogle=()=> {
        return  signInWithPopup(auth, googleProvider)
      
       }
       useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth , (user)=> {
           console.log(user);
             if(user){
                  
                 setUser(user)
             } else{
                 setUser({})
             }
             setIsLoading(false)
        })
         return ()=> unsubscribe()
   },[]);

   const updateName= (name)=> {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      const newUser={...user, displayName: name} 
     setUser(newUser)
      
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

       const logOut=()=> {
        // console.log("logout");
       signOut(auth).then(() => {
           setUser({})
         }).catch((error) => {
           // An error happened.
         });
    }

       return {
        user,
        setUser,
        signInWithGoogle,
        logOut,
        isLoading,
       setIsLoading
       
     }

}


export default useFirebase;