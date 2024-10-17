
import { auth } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';

// User API for handling registration
export const userAPI = {
  register: async (userData) => {
    const { email, password } = userData;
    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Return the created user object
    } catch (error) {
      throw new Error(error.message); // Throw an error if registration fails
    }
  },

 //User API for handling login

  login: async (userData) => { 
     const { email, password } = userData;
     try { 
      // Sign in with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Return the signed-in user object
      } catch (error) {
        throw new Error(error.message); // Throw an error if login fails
        }
        },
};