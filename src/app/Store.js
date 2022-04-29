import { configureStore } from '@reduxjs/toolkit';
import artworkReducer from '../components/artwork/ArtworkSlice';


export default configureStore({
    reducer: {
        artwork: artworkReducer,
    },
});