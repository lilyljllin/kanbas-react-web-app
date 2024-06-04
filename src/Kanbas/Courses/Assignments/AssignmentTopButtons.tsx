import { FaPlus } from "react-icons/fa6";
import { CiDatabase, CiSearch } from "react-icons/ci";
import { addAssignment } from "./reducer";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function AssignmentTopButtons() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const buttonHandler = () => navigate(`/Kanbas/Courses/${cid}/Assignments/0`);
    return (
        <div id="wd-assignment-top-buttons" className="text-nowrap">
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end"
            onClick={buttonHandler}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>

            <div className="container mt-3">
                <div className="row justify-centent-start">
                    <div className="col-auto">
                        <div className="input-group mb-3 ">
                            <div className="input-group-prepend">
                                <span className="input-group-text border-0" id="basic-addon1">
                                    <CiSearch className="m-2"/>
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}