
export default function AssignmentEditor() {
    return (
        <div className="container" id="wd-assignments-editor" style={{ height: '80vh', overflowY: 'auto' }}>
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">
                    <h4>Assignment Name</h4>
                </label>
                <input type="text" id="wd-name" value="A1 - ENV + HTML" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">
                    <h4>Assignment Description</h4>
                </label>
                <textarea id="wd-description" cols={45} rows={9} className="form-control">
                    The assignment is available online. Submit a
                    link to the landing page of your Web
                    application running on Netlify. The landing
                    page should include the following: Your full
                    name and section Links to each of the lab
                    assignments Link to the Kanbas application
                    Links to all relevant source code repositories
                    The Kanbas application should include a link
                    to navigate back to the landing page.
                </textarea>
            </div>

            <div className="row mb-3">
                <div className="col-auto">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className='col'>
                    <input type="number" id="wd-points" value={100} className="form-control" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-auto">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className='col'>
                    <select id="wd-group" className="form-select">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECT">PROJECTS</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-auto">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                </div>
                <div className="col">
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="Percentage">Percentage</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-auto align-self-start">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
                <div className="col">
                    <select id="wd-submission-type" className="form-select">
                        <option value="Online">Online</option>
                    </select>

                    <div>
                        <br></br>
                    </div>


                    <label className="form-label">Online Entry Options</label>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-website-url" />
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                        <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                    </div>
                </div>
            </div>

            <div className="row mb-3">

                <div className="col-auto align-self-start">
                    <label htmlFor="wd-submission-type" className="form-label">Assign</label>
                </div>

                <div className="col">


                    <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                    <input type="text" id="wd-assign-to" value="Everyone    X" className="form-control" />

                    <br></br>

                    <label htmlFor="wd-due-date" className="form-label">Due</label>
                    <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />

                    <br></br>

                    <div className="d-flex">
                        <div className="col me-2">
                            <label htmlFor="wd-available-from" className="form-label">Available from</label>
                            <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
                        </div>
                        <div className="col">
                            <label htmlFor="wd-available-until" className="form-label">Until</label>
                            <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                        </div>

                    </div>

                </div>





            </div>







            <hr />
            <div className="d-flex justify-content-end">
                <button id="wd-assignment-cancel" className="btn btn-secondary me-2">Cancel</button>
                <button id="wd-assignment-save" className="btn btn-success">Save</button>
            </div>
        </div>
    );
}
