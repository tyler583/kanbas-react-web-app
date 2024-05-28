import React from "react";
import { FaSearch } from "react-icons/fa";
import GradesControlButtons from "./GradesControlButtons";
import "./styles.css";
import { CiFilter } from "react-icons/ci";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Grades() {
    const { cid } = useParams(); 

    const database = db as any;

    const enrolledStudents = database.enrollments
        .filter((enrollment: any) => enrollment.course === cid)
        .map((enrollment: any) => {
            const user = database.users.find((user: any) => user._id === enrollment.user);
            return { ...user, enrollmentId: enrollment._id };
        });

    const courseGrades = database.grades.filter((grade: any) =>
        enrolledStudents.some((student: any) => student._id === grade.student)
    );

    const courseAssignments = database.assignments.filter((assignment: any) => assignment.course === cid);

    return (
        <div id="wd-grades">
            <br></br>
            <GradesControlButtons />

            <div className="container" id="wd-assignments-editor" style={{ height: '80vh', overflowY: 'auto' }}>
                <div className="row mb-3">
                    <div className="col">
                        <div className="d-flex">
                            <div className="col me-2">
                                <label htmlFor="wd-search-students" className="form-label">
                                    <strong>
                                        <h5>Student Names</h5>
                                    </strong>
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0">
                                        <FaSearch />
                                    </span>
                                    <input
                                        id="wd-search-students"
                                        className="form-control border-start-0"
                                        type="text"
                                        placeholder="Search Students"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <label htmlFor="wd-search-assignments" className="form-label">
                                    <strong>
                                        <h5>Assignment Names</h5>
                                    </strong>
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0">
                                        <FaSearch />
                                    </span>
                                    <input
                                        id="wd-search-assignments"
                                        className="form-control border-start-0"
                                        type="text"
                                        placeholder="Search Assignments"
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>

                    

                    <div className="row mb-3">
                        <button id="wd-import" className="me-1 btn btn-lg btn-secondary" style={{ maxWidth: "200px" }}>
                            <CiFilter className="me-2 fs-2" />
                            Apply Filters
                        </button>
                    </div>

                    <div className="row mb-3">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Student Name</th>
                                        {courseAssignments.map((assignment: any) => (
                                            <th key={assignment._id}>
                                                {assignment.title} <br />Out of 100
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {enrolledStudents.map((student: any) => (
                                        <tr key={student._id}>
                                            <td>{student.firstName} {student.lastName}</td>
                                            {courseAssignments.map((assignment: any) => {
                                                const grade = courseGrades.find((g: any) => g.student === student._id && g.assignment === assignment._id);
                                                return (
                                                    <td key={assignment._id}>
                                                        {grade ? grade.grade : '- / 100'}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
