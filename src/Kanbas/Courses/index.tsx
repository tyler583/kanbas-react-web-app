import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { RxHamburgerMenu } from "react-icons/rx";
import Grades from "./GradesScreen/Grades";

export default function Courses() {
    return (
        <div id="wd-courses">

            <div className="wd-flex-row-container">
                <div className="icon-container">
                <RxHamburgerMenu className="fs-2"/>
                </div>
                <div className="ms-2">
                <h2>Course 1234</h2>
                </div>
            </div>

            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/"
                            element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:id" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
