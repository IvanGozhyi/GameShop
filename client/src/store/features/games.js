import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchGames = createAsyncThunk(
    'games/fetchGames',
        async () => {
            const { data } = await axios.get('http://localhost:3000/api/games');
            return data;
        }
);


const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        gamesList: [],
        status: 'idle',
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.gamesList = action.payload;
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default gamesSlice.reducer;