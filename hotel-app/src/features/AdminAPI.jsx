import { auth } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebaseConfig'; // Import Firestore
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions

// User API for handling registration
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

    // Additional functions can be added here
};

export default AdminAPI; // Default export for compatibility
