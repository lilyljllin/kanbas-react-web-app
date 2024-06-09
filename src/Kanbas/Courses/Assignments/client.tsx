import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;
export const findAssignmentsForCourse = async (courseID: string) => {
    const response = await axios.get(`${COURSES_API}/${courseID}/assignments`);
    return response.data;
}
export const createAssignmentsForCourse = async (courseID: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseID}/assignments`, assignment);
    return response.data;
}
export const deleteAssignment = async (assignmentID: string) => {
    const response = await axios.delete(`${ASSIGNMENT_API}/${assignmentID}`);
    return response.data;
}
export const updateAssignment = async (assignment: any) => {
    const response = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return response.data;
}
