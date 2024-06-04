// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { BsGripVertical } from 'react-icons/bs';
// import { IoNewspaperOutline } from 'react-icons/io5';
// import LessonControlButtons from "../Modules/LessonControlButton";
// import AssignmentsControls from "./AssignmentsControls";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// import assignmentsData from '../../Database/assignments.json';
// import "./styles.css";

// export default function Assignments() {
//     const { cid } = useParams();
//     const assignments = assignmentsData as any[];
//     const courseAssignments = assignments.filter(assignment => assignment.course === cid);

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
//                         {courseAssignments.map(assignment => (
//                             <li key={assignment._id} className="wd-assignment-list-item list-group-item vertical-rectangle">
//                                 <div className="wd-flex-row-container">
//                                     <div className="icon-container">
//                                         <BsGripVertical className="me-2 fs-3" />
//                                         <IoNewspaperOutline className="me-3 fs-3" />
//                                     </div>
//                                     <div className="assignment-details">
//                                         <a className="wd-assignment-link"
//                                             href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
//                                             {assignment.title}
//                                         </a>
//                                         <div>
//                                             Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am |
//                                             <strong> Due</strong> May 13 at 11:59pm | 100 pts
//                                         </div>
//                                     </div>
//                                     <div className="lesson-controls">
//                                         <LessonControlButtons />
//                                     </div>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// }

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsGripVertical } from 'react-icons/bs';
import { IoNewspaperOutline } from 'react-icons/io5';
import LessonControlButtons from "../Modules/LessonControlButton";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import assignmentsData from '../../Database/assignments.json';
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, deleteAssignment } from './reducer';
import { FaTrash } from "react-icons/fa";

export default function Assignments() {
  type Assignment = {
    _id: string;
    course: string;
    title: string;
    details: string;
    availableDate: string;
    dueDate: string;
    points: number;
  };

  const { cid } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignments.assignments);
  const courseAssignments = assignments?.filter((assignment: Assignment) => assignment.course === cid) || [];

  const handleAddAssignment = () => {
    if (cid) {
      const newAssignment = {
        _id: 'new_id',
        course: cid,
        title: 'New Assignment',
        details: 'Assignment details',
        availableDate: 'May 6 at 12:00am',
        dueDate: 'May 13 at 11:59pm',
        points: 100,
      };
      dispatch(addAssignment(newAssignment));
    }
  };

  const handleDeleteAssignment = (id: string) => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      dispatch(deleteAssignment(id));
    }
  };

  return (
    <div id="wd-assignments">
      <AssignmentsControls addAssignment={handleAddAssignment}/><br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>

          <ul className="wd-assignment-list list-group rounded-0">
            {courseAssignments.map((assignment: Assignment) => (
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
                    <FaTrash className="me-3 fs-3"
                    onClick={() =>  handleDeleteAssignment(assignment._id)}
                    />
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