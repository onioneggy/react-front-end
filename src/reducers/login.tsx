import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    username: string, 
    password: string
}

const userDataReducer = createSlice({
    name: 'userData',
    initialState: {
        userData: {} as User},
    reducers: {
        setAccDetails: (state, action: PayloadAction<User>) => {
            state.userData.username = action.payload.username
            state.userData.password = action.payload.password
            }

        }
    }
)

export const { setAccDetails } = userDataReducer.actions
export default userDataReducer.reducer