import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = { assignments: assignments };
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {...assignment,
                _id: new Date().getTime().toString(),
            };
            state.assignments = [...state.assignments, newAssignment];
        },
        deleteAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter((a) => a._id !== assignmentID);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a) => a._id === assignment._id ? assignment : a);
        },
    },
});
export const {addAssignment, deleteAssignment, updateAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;