import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromStorage(),
    },
    reducers: {
        addToCart(state, action) {
            const { id, name, price } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ id, name, price, quantity: 1 });
            }

            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeFromCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        clearCart(state) {
            state.items = [];
            localStorage.removeItem('cartItems');
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;