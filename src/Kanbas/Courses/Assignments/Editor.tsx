export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">
                <h3>
                    Assignment Name
                </h3>
            </label>
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br /><br />
            <textarea id="wd-description" cols={45} rows={9}>
                The assignment is available online Submit a
                link to the landing page of your Web
                application running on Netlify. The landing
                page should include the following: Your full
                name and section Links to each of the lab
                assignments Link to the Kanbas application
                Links to all relevant source code repositories
                The Kanbas application should include a link
                to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>

                <br></br>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECTS</option>
                        </select>
                    </td>
                </tr>

                <br></br>


                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>

                <br></br>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>

                        <div>
                            <br></br>
                            <label htmlFor="wd-submission-type"> Online Entry Options </label>




                            <div>

                            </div>


                            <input type="checkbox"
                                name="check-genre" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />

                            <input type="checkbox"
                                name="check-genre" id="wd-website-url	" />
                            <label htmlFor="wd-website-url	">Website URL</label><br />

                            <input type="checkbox"
                                name="check-genre" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                            <input type="checkbox"
                                name="check-genre" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                            <input type="checkbox"
                                name="check-genre" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label><br />





                        </div>

                    </td>
                </tr>


                <tr>


                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label>

                        <div>


                            <input id="wd-assign-to" value="Everyone" /> <br />






                        </div>

                        <br>
                        </br>


                        <label htmlFor="wd-due-date">Due</label>
                        <br></br>
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br />


                        <br></br>

                        <td>

                            <label htmlFor="wd-available-until">Available from</label>
                            <br></br>
                            <input type="date"
                                id="wd-available-from"
                                value="2024-05-06" />

                        </td>

                        <td>
                            <label htmlFor="wd-available-from">Until</label>
                            <br></br>
                            <input type="date"
                                id="wd-available-until"
                                value="2024-05-20" />

                        </td>

                    </td>




                </tr>











            </table>
            <hr />

            <div style={{ textAlign: 'right' }}>
                <button id="wd-assignment-cancel">Cancel</button>
                <button id="wd-assignment-save">Save</button>
            </div>



        </div>
    );
}
