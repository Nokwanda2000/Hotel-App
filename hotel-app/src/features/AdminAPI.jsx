import { auth } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebaseConfig'; // Import Firestore
import { doc, setDoc } from 'firebase/firestore';

// User API for handling registration and login
export const AdminAPI = {
    register: async (adminData) => {
        const { email, password, fullName, country, address } = adminData;

        try {
            // Create user with Firebase Authentication
            const adminCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = adminCredential.user; // Get the user object

            // Save additional admin information in Firestore
            await setDoc(doc(db, 'admins', user.uid), {
                fullName,
                email,
                country,
                address,
                createdAt: new Date().toISOString(), // Add a timestamp
            });

            return user; // Return the created user object
        } catch (error) {
            let errorMessage;

            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'This email is already in use. Please use a different email.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'The email address is not valid.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'The password is too weak. Please use a stronger password.';
                    break;
                default:
                    errorMessage = 'An error occurred. Please try again.';
            }

            throw new Error(errorMessage); // Throw an error with a custom message
        }
    },

    login: async (credentials) => {
        const { email, password } = credentials;

        try {
            // Sign in the user with Firebase Authentication
            const adminCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = adminCredential.user; // Get the user object

            return user; // Return the logged-in user object
        } catch (error) {
            let errorMessage;

            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'No user found with this email. Please register first.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password. Please try again.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'The email address is not valid.';
                    break;
                default:
                    errorMessage = 'An error occurred. Please try again.';
            }

            throw new Error(errorMessage); // Throw an error with a custom message
        }
    },
};

export default AdminAPI;
