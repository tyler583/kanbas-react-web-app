// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "../Modules/LessonControlButton";
// import AssignmentsControls from "./AssignmentsControls";
// import "./styles.css";
// import { IoNewspaperOutline } from "react-icons/io5";
// import AssignmentControlButtons from "./AssignmentControlButtons";

// export default function Assignments() {
//     return (
//         <div id="wd-assignments">
//             <AssignmentsControls /><br />
//             <ul id="wd-assignment-list" className="list-group rounded-0">
//                 <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
//                     <div className="wd-title p-3 ps-2 bg-secondary">
//                         <BsGripVertical className="me-2 fs-3" />
//                         ASSIGNMENTS

//                         <AssignmentControlButtons />
//                     </div>

//                     <ul className="wd-assignment-list list-group rounded-0">
//                         <li className="wd-assignment-list-item list-group-item vertical-rectangle">
//                             <div className="wd-flex-row-container">
//                                 <div className="icon-container">
//                                     <BsGripVertical className="me-2 fs-3" />
//                                     <IoNewspaperOutline className="me-3 fs-3" />
//                                 </div>

//                                 <div className="assignment-details">
//                                     <a className="wd-assignment-link"
//                                         href="#/Kanbas/Courses/1234/Assignments/123">
//                                         A1 - ENV + HTML
//                                     </a>
//                                     <div>
//                                         Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am |
//                                         <strong> Due</strong> May 13 at 11:59pm | 100 pts
//                                     </div>
//                                 </div>
                                
//                                 <div className="lesson-controls">
//                                     <LessonControlButtons />
//                                 </div>
//                             </div>
//                         </li>

//                         <li className="wd-assignment-list-item list-group-item vertical-rectangle">
//                             <div className="wd-flex-row-container">
//                                 <div className="icon-container">
//                                     <BsGripVertical className="me-2 fs-3" />
//                                     <IoNewspaperOutline className="me-3 fs-3" />
//                                 </div>

//                                 <div className="assignment-details">
//                                     <a className="wd-assignment-link"
//                                         href="#/Kanbas/Courses/1234/Assignments/123">
//                                         A2 - CSS + BOOTSTRAP
//                                     </a>
//                                     <div>
//                                         Multiple Modules | <strong> Not available until </strong> May 13 at 12:00am |
//                                         <strong> Due</strong> May 20 at 11:59pm | 100 pts
//                                     </div>
//                                 </div>
                                
//                                 <div className="lesson-controls">
//                                     <LessonControlButtons />
//                                 </div>
//                             </div>
//                         </li>

//                         <li className="wd-assignment-list-item list-group-item vertical-rectangle">
//                             <div className="wd-flex-row-container">
//                                 <div className="icon-container">
//                                     <BsGripVertical className="me-2 fs-3" />
//                                     <IoNewspaperOutline className="me-3 fs-3" />
//                                 </div>

//                                 <div className="assignment-details">
//                                     <a className="wd-assignment-link"
//                                         href="#/Kanbas/Courses/1234/Assignments/123">
//                                         A3 - JAVASCRIPT + REACT
//                                     </a>
//                                     <div>
//                                         Multiple Modules | <strong> Not available until </strong> May 20 at 12:00am |
//                                         <strong> Due</strong> May 27 at 11:59pm | 100 pts
//                                     </div>
//                                 </div>
                                
//                                 <div className="lesson-controls">
//                                     <LessonControlButtons />
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// }

import React from 'react';
import { useParams } from 'react-router-dom';
import { BsGripVertical } from 'react-icons/bs';
import { IoNewspaperOutline } from 'react-icons/io5';
import LessonControlButtons from "../Modules/LessonControlButton";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import assignmentsData from '../../Database/assignments.json';
import "./styles.css";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = assignmentsData as any[];
    const courseAssignments = assignments.filter(assignment => assignment.course === cid);

    return (
        <div id="wd-assignments">
            <AssignmentsControls /><br />
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>

                    <ul className="wd-assignment-list list-group rounded-0">
                        {courseAssignments.map(assignment => (
                            <li key={assignment._id} className="wd-assignment-list-item list-group-item vertical-rectangle">
                                <div className="wd-flex-row-container">
                                    <div className="icon-container">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <IoNewspaperOutline className="me-3 fs-3" />
                                    </div>
                                    <div className="assignment-details">
                                        <a className="wd-assignment-link"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </a>
                                        <div>
                                            Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am |
                                            <strong> Due</strong> May 13 at 11:59pm | 100 pts
                                        </div>
                                    </div>
                                    <div className="lesson-controls">
                                        <LessonControlButtons />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
