import "./index.css";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { courses } from "../../Database";
export default function CoursesNavigation() {
   const { cid } = useParams();
   const course = courses.find((course) => course._id === cid);
   const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
   const{ pathname } = useLocation();
   return (
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
         {links.map( (link) => (
         <a id={`wd-course-${link}-link`} href={`#/Kanbas/Courses/${course?._id}/${link}`}
            className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}> {link} </a> )
         )}
         
      </div>

   );
}
