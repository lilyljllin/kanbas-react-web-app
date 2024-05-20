import FormSearch from "./FormSearch";
import GradeButtons from "./GradeButtons";
import GradeTable from "./GradeTable";

export default function Grades() {
    return (
        <div className="d-flex flex-column">
            <div className="mb-3">
        <GradeButtons />
        </div>
        <div className="mb-3">
        <FormSearch />
        </div>
        <div className="mb-3">
        <GradeTable />
        </div>
        </div>
    );
  }