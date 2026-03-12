import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './features/games';
import authReducer from './features/auth';
//import purchaseReducer from './features/purchase';
import cartReducer from './features/cart';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        games: gamesReducer,
        //purchase: purchaseReducer,
        cart: cartReducer,
    },
});
export default store;