import AssignmentTopButtons from "./AssignmentTopButtons";
import { BsGripVertical } from "react-icons/bs";
import { TbNotebook } from "react-icons/tb";
import EndIcons from "./EndIcons";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-assignments" className="d-flex flex-column">
      <div className="mb-3">
        <AssignmentTopButtons />
      </div>

      <ul id="wd-assignment" className="list-group rounded-0">
        <li className="wd-assignments-title  list-group-item p-0 mb-5 fs-5 border-gray" >
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <GoTriangleDown className="position-relative me-2" style={{ bottom: "1px" }} />
            <b>ASSIGNMENTS</b>
            <IoEllipsisVertical className="fs-4 float-end text-muted" />
            <FaPlus className="fs-4 float-end mx-3 text-muted" />
            <span className="border rounded-5 border-dark fs-6 float-end p-1">40% of Total</span>
          </div>

          <ul className="wd-assignment list-group rounded-0">
            {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <Link key={assignment._id} to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                className="text-decoration-none">
                <li className="wd-assignment-list-item list-group-item p-3 ps-1" style={{ borderLeft: '4px solid green' }}>
                  <div className=" d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <TbNotebook className="me-2 fs-3 text-success" />
                    <div>
                      <span className="wd-assignment-link" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                        {assignment.title}
                      </span>
                      <ul className="list-inline">
                        <li className="list-inline-item fs-6 text-danger">Multiple Modules</li>
                        <li className="list-inline-item fs-6">|</li>
                        <li className="list-inline-item fs-6 fw-bold">Not available until</li>
                        <li className="list-inline-item fs-6">{`${assignment.availableFrom.replace(/-/g, "/")} at 12:00am`}</li>
                        <li className="list-inline-item fs-6">|</li>
                        <br />
                        <li className="list-inline-item fs-6 fw-bold">Due</li>
                        <li className="list-inline-item fs-6">{`${assignment.dueDate.replace(/-/g, "/")} at 11:59pm`}</li>
                        <li className="list-inline-item fs-6">|</li>
                        <li className="list-inline-item fs-6">{`${assignment.points}pts`}</li>
                      </ul>
                    </div>
                    <EndIcons assignmentTitle = {assignment.title} aID={assignment._id}/>
                  </div>
                </li> </Link>))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
