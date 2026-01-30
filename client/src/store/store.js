import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './features/games';


export const store = configureStore({
    reducer: {
        //auth: authReducer,
        games: gamesReducer,
        //purchase: purchaseReducer,
    },
});
export default store;