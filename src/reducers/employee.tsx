import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../models"


const setEmployeeReducer = createSlice({
    name: 'employees',
    initialState: {employees: [] as Employee[]}, 
    reducers: {
        setEmployees: (state, action: PayloadAction<Employee[]>) => {
            state.employees = [...action.payload]
        },
        insertEmployee: (state, action: PayloadAction<Employee>) =>{
            state.employees = [...state.employees, action.payload]
        },
        deleteEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees = state.employees.filter(item => item.id !== action.payload.id)
        },
        updateEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees = state.employees.map(emp => emp.id !== action.payload.id ? emp : action.payload)
        }
    }

})


export const { setEmployees, insertEmployee, deleteEmployee, updateEmployee } = setEmployeeReducer.actions
export default setEmployeeReducer.reducer
