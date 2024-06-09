import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
const initialState = { assignments: [] };
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                ...assignment,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== assignmentID);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) => a._id === assignment._id ? assignment : a) as any;
        },
    },
});
export const {addAssignment, deleteAssignment, updateAssignment, setAssignments} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;