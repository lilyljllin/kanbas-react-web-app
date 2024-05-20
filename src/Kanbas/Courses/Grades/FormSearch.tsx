import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
export default function FormSearch() {
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
                                <option value="student1">student 1</option>
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
                                <option value="student1">A1</option>
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