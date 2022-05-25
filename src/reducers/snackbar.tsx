import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const snackbarReducer = createSlice({
    name: 'snackbar',
    initialState: {isOpen: false},
    reducers: {
        setSnackBar: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
            console.log(state.isOpen)

        }
    }
})


export const { setSnackBar }  = snackbarReducer.actions
export default snackbarReducer.reducer