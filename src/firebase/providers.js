import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

 
const GoogleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup( FirebaseAuth, GoogleProvider )
        // const credentials = GoogleAuthProvider.credentialFromResult( result )
        // console.log({credentials});
        // const user = result.user
        const {displayName, email, photoURL, uid} = result.user

        return {
            ok:true,
            displayName, email, photoURL, uid
        
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,errorMessage
        }
    }

}