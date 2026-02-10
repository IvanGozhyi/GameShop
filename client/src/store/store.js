import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './features/games';
import authReducer from './features/auth';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        games: gamesReducer,
        //purchase: purchaseReducer,
    },
});
export default store;