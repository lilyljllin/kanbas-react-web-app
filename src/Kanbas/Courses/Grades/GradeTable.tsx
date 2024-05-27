import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { enrollments } from "../../Database";
import { users } from "../../Database";
import { grades } from "../../Database";
import { assignments } from "../../Database";

export default function GradeTable() {
    const { cid } = useParams();
    const courseAssignment = assignments.filter((assignment) => assignment.course === cid);
    const enrolledStudents = enrollments.filter((enrollment) => enrollment.course === cid);
    const userID = enrolledStudents.map((enrollment) => enrollment.user);
    const students = users.filter((user) => userID.includes(user._id));
    const studentGrades = grades.filter((grade) => userID.includes(grade.student));
    return (
        <div id="wd-grade-table" className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col" className="align-middle">Student Name</th>
                        {courseAssignment.map((assignment) => (
                        <th scope="col" key={assignment._id}>
                            <ul className="list-unstyled text-center align-middle m-0">
                                <li >{assignment.title}</li>
                                <li className="fw-light"><small>Out of 100</small></li>
                            </ul>
                        </th>))}
                        
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) =>(
                    <tr key={student._id}>
                    <td className="text-danger align-middle" scope="row">{`${student.firstName} ${student.lastName}`}</td>
                    {courseAssignment.map((assignment) => {
                      const thisGrade = studentGrades.find((grade) => grade.student === student._id && grade.assignment === assignment._id);
                      return (
                        <td key={assignment._id} className="text-center align-middle">
                          {thisGrade ? `${thisGrade.grade}%` : 'N/A'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                    
                </tbody>
            </table>
        </div>
    );
}