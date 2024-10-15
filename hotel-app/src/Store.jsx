import { configureStore } from "@reduxjs/toolkit";
import registerReducer from './features/RegisterSlice'; // Ensure you import the default export

export const store = configureStore({
    reducer: {
        register: registerReducer, // Use a more descriptive key
    },
});
