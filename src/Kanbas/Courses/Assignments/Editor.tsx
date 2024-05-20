export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" className="form-control" value="A1" />
        </div>

        <div className="mb-3">
          <textarea id="wd-description" className="form-control">
            The assignment is available online.
            Submit a link to the landing page of
          </textarea>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-4 text-end">
            <label htmlFor="wd-points" className="col-form-label"> Points</label>
          </div>
          <div className="col-sm-8">
            <input id="wd-points" className="form-control" value={100} />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-4 text-end">
            <label htmlFor="wd-group" className="col-form-label">Assignment Group</label>
          </div>
          <div className="col-sm-8">
            <select id="wd-group" className="form-select">
              <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="wd-display-grade-as" className="col-sm-4 col-form-label text-end">Display Grade as</label>
          <div className="col-sm-8">
            <select id="wd-display-grade-as" className="form-select">
              <option value="PERCENTAGE" selected>Percentage</option>
              <option value="LETTER-GRADE">Letter Grade</option>
              <option value="NUMERICAL-GRADE">Numerical Grade</option>
            </select>
          </div>
        </div>


        <div className="mb-3 row">
          <div className="col-sm-4 text-end">
            <label htmlFor="wd-submission-type" className="col-form-label">Submission Type</label>
          </div>
          <div className="col-sm-8" >
          <div className="border p-3 rounded">
            <select id="wd-submission-type" className="form-select mb-3">
              <option value="ONLINE" selected>Online</option>
              <option value="IN PERSON">In Person</option>
            </select>

              <div className="mb-3 row">
                <label className="fw-bold mb-3">Online Entry Options</label>
                <div className="form-check m-3">
                  <input type="checkbox" name="online-entry" className="form-check-input" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                </div>
                <div className="form-check m-3">
                  <input type="checkbox" name="online-entry" className="form-check-input" id="wd-website-url" />
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                </div>

                <div className="form-check m-3">
                  <input type="checkbox" name="online-entry" className="form-check-input" id="wd-media-recordings" />
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                </div>

                <div className="form-check m-3">
                  <input type="checkbox" name="online-entry" className="form-check-input" id="wd-student-annotation" />
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                </div>

                <div className="form-check m-3">
                  <input type="checkbox" name="online-entry" className="form-check-input" id="wd-file-upload" />
                  <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="mb-3 row">
          <div className="col-sm-4 text-end">
            <label className="col-form-label">Assign</label>
          </div>
          <div className="col-sm-8">
          <div className="border p-3 rounded">
            <div className="m-2 row">
              <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
              <input id="wd-assign-to" className="form-control" value={"Everyone"} />
            </div>
            <div className="m-2 row">

              <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
              <input type="date" data-provide="datepicker" id="wd-due-date" className="form-control" value="2024-05-13" />
            </div>
            <div className="m-2 row">
              <div className="col">
                <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
              </div>
              <div className="col">
                <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
              </div>
            </div>
            </div>
          </div>
        </div>
       
  




        <hr />
        <div className="d-flex float-end">
          <div className="w-50 me-2">
            <button className="btn btn-lg btn-secondary w-100" id="wd-cancel-button">Cancel</button>
          </div>
          <div className="w-50">
            <button className="btn btn-lg btn-danger 1-100" id="wd-save-button">Save</button>
          </div>
        </div>


      </form>
    </div>

  );
}
