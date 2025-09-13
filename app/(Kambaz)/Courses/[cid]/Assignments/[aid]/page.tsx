export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={10}
        cols={50}
        // prettier-ignore
        defaultValue= {`The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kambas application Links to all relevant source code repositories The Kambas application should include a link to navigate back to the landing page.`}
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />{" "}
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option defaultValue="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="In-person">In-person</option>
              </select>
              <h1></h1>
              <label htmlFor="wd-text-entry">Online Entry Options:</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry"
                id="wd-text-entry"
              />
              <label htmlFor="wd-website-url">Text Entry</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry"
                id="wd-website-url"
              />
              <label htmlFor="wd-media-recordings">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-student-annotation">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-file-upload">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry"
                id="wd-file-upload"
              />
              <label htmlFor="wd-assign-to">File Uploads</label>
              <br />
              <br />
              <label>Assign to</label>
              <br />
              <textarea
                rows={1}
                cols={15}
                defaultValue={`Everyone`}
                id="wd-assign-to"
              />
              <br />
              <br />
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input type="date" name="date-select" id="wd-due-date" />
              <br />
              <br />
              <label htmlFor="wd-available-from">Available from</label>
              <br />
              <input type="date" name="date-select" id="wd-available-from" />
              <br />
              <label htmlFor="wd-available-until">Available until</label>
              <br />
              <input type="date" name="date-select" id="wd-available-until" />
            </td>
          </tr>
        </tbody>
      </table>
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
