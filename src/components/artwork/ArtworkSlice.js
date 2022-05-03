import { createSlice } from "@reduxjs/toolkit";

export const artworkSlice = createSlice({
    name: 'artwork',
    initialState: {
        src: 'img',
        lightboxOpen: false
    },
    reducers: {
        toggleModal: (state, action) => {
           return {
               ...state, 
                src: action.payload.src,
                lightboxOpen: action.payload.lightboxOpen,
            }
        },
    },
});

export const { toggleModal } = artworkSlice.actions;
export const { selectSrc } = (state) => state.artwork.src;


export default artworkSlice.reducer;