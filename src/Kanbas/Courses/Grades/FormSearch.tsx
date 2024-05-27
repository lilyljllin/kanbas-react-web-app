import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { enrollments } from "../../Database";
import { users } from "../../Database";
import { grades } from "../../Database";
import { assignments } from "../../Database";
export default function FormSearch() {
    const { cid } = useParams();
    const courseAssignment = assignments.filter((assignment) => assignment.course === cid);
    const enrolledStudents = enrollments.filter((enrollment) => enrollment.course === cid);
    const userID = enrolledStudents.map((enrollment) => enrollment.user);
    const students = users.filter((user) => userID.includes(user._id));
    const studentGrades = grades.filter((grade) => userID.includes(grade.student));
    return(
        <div>
            <form>
                <div className="row">
                    <div className="col md-6">
                        
                        <label htmlFor="wd-search-student" className="form-label fw-bold">Student Names</label>
                            
                        <div className="input-group mb-3 ">
                            <div className="input-group-prepend">
                                <span className="input-group-text border-0" id="basic-addon1">
                                    <CiSearch className="m-2"/>
                                </span>
                            </div>
                            <select className="form-select">
                                <option selected>Search Students</option>
                                {students.map(student => (
                                <option value="student1">{`${student.firstName} ${student.lastName}`}</option>
                                ))}
                                </select>
                        </div>
                        </div>

                        <div className="col md-6">
                        <label htmlFor="wd-search-assignment" className="form-label fw-bold">Assignment Names</label>
                            
                        <div className="input-group mb-3 ">
                            <div className="input-group-prepend">
                                <span className="input-group-text border-0" id="basic-addon1">
                                    <CiSearch className="m-2"/>
                                </span>
                            </div>
                            <select className="form-select">
                                <option selected>Search Assignments</option>
                                {courseAssignment.map(assignment =>(
                                <option value="student1">{assignment.title}</option>
                                ))}
                                </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-4">
                <button id="wd-apply-filter-btn" className="btn btn-lg btn-secondary me-1">
                <FiFilter className="position-relative me-2" style={{ bottom: "1px"}} />
                Apply Filters
            </button>
            </div>
                </div>
            </form>
        </div>
    );
}