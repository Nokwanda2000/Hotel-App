import { configureStore } from "@reduxjs/toolkit";
import registerReducer from './features/RegisterSlice';
import loginReducer from './features/LoginSlice';
import adminregReducer from './features/AdminRegisterSlice'
export const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        admin: adminregReducer,
        
    },
});
