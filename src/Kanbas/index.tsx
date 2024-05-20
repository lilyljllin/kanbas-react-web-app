import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Grades from "./Courses/Grades";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css";
export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="h-100">
      <div className="d-flex h-100">
        <div className="d-none d-md-block bg-black">
          <KanbasNavigation />
        </div>
        <div className="flex-fill p-4 h-100">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:id/*" element={<Courses />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
