import { LuFileInput } from "react-icons/lu";
import { LuFileOutput } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
export default function GradeButtons() {
    return(
        <div id="wd-grades-buttons" className="text-nowrap">
            <button id="wd-setting-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <IoMdSettings className="position-relative fs-2" style={{ bottom: "1px" }} />
            </button>
            <div className="dropdown d-inline me-1 float-end">
                <button id="wd-export-btn" className="btn btn-lg btn-secondary dropdown-toggle"
                    type="button" data-bs-toggle="dropdown">
                    <LuFileOutput className="position-relative me-2" style={{ bottom: "1px" }} />
                    Export
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-export-all-btn" className="dropdown-item" href="#">
                            Export All
                        </a>
                    </li>
                </ul>
            </div>
            <button id="wd-import-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <LuFileInput className="position-relative me-2" style={{ bottom: "1px" }} />
                Import
            </button>
        </div>
    );
}