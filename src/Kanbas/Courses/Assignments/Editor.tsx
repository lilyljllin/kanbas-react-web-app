export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
          The assignment is available online
          Submit a link to the landing page of
        </textarea>
        <br /><br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          {/* Complete on your own */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="PERCENTAGE" selected>Percentage</option>
                <option value="LETTER-GRADE">Letter Grade</option>
                <option value="NUMERICAL-GRADE">Numerical Grade</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE" selected>Online</option>
                <option value="IN PERSON">In Person</option>
              </select>
              <br /><br />
              <label>Online Entry Options</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
              <br />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label>Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" value={"Everyone"} />
              <br /> <br />
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input type="date" id="wd-due-date" value="2024-05-13" />
              <br /> <br />
              <td>
                <label htmlFor="wd-available-from">Available from</label>
                <br />
                <input type="date" id="wd-available-from" value="2024-05-06" />
              </td>
              <td>
                <label htmlFor="wd-available-until">Until</label>
                <br />
                <input type="date" id="wd-available-until" value="2024-05-20" />
              </td>
            </td>
          </tr>
          <br />
        </table>
        <hr />
        <table width="100%">
            <tr>
            <td align="right">
                <button id="wd-cancel-button">Cancel</button>
                <button id="wd-save-button">Save</button>
            </td>
            </tr>
        </table>

      </div>
  );}
  