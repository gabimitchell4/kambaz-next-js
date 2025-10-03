import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Label htmlFor="wd-name p-1">Assignment Name</Form.Label>
        <br />
        <Form.Control
          style={{ width: "60%" }}
          className="p-2"
          id="wd-name"
          defaultValue="A1"
        />
        <br />
        <div
          id="wd-description"
          style={{
            width: "60%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <p>
            The assignment is{" "}
            <span style={{ color: "red" }}>available online</span>
            <br />
            Submit a link to the landing page of your Web application running on
            Netlify.
            <br />
            The landing page should include the following:
          </p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kambas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <p>
            The Kambas application should include a link to navigate back to the
            landing page.
          </p>
        </div>
        <br />
          <Row className="mt-3">
            <Col sm={2} className="d-flex align-items-center">
              <Form.Label htmlFor="wd-points" className = "text-end">Points</Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Control id="wd-points" defaultValue={100} />{" "}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={2}>
              <Form.Label htmlFor="wd-group" className = "text-end">Assignment Group</Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option defaultValue="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={2}>
              <Form.Label htmlFor="wd-display-grade-as" className = "text-end">
                Display Grade as
              </Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
              </Form.Select>
            </Col>
          </Row>
        <Card className="p-3 mt-3" style={{ width: "60%" }}>
          <Row className="mt-3">
            <Col className="d-flex">
              <Form.Label htmlFor="wd-submission-type">
                Submission Type
              </Form.Label>
            </Col>
            <Col>
              <Form.Select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="In-person">In-person</option>
              </Form.Select>
              <br></br>
              <Form.Label htmlFor="wd-text-entry">
                {" "}
                Online Entry Options:
              </Form.Label>
              <br />
              <br />
              <Row className="mb-3 align-items-center">
                <Col sm={1}>
                  <Form.Check
                    type="checkbox"
                    name="check-online-entry"
                    id="wd-text-entry"
                    className="mt-0"
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="wd-text-entry">Text Entry</Form.Label>
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Col sm={1}>
                  <Form.Check
                    type="checkbox"
                    name="check-online-entry"
                    id="wd-website-url"
                    className="mt-0"
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="wd-website-url">Website URL</Form.Label>
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Col sm={1}>
                  <Form.Check
                    type="checkbox"
                    name="check-online-entry"
                    id="wd-media-recordings"
                    className="mt-0"
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="wd-media-recordings">
                    Media Recordings
                  </Form.Label>
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Col sm={1}>
                  <Form.Check
                    type="checkbox"
                    name="check-online-entry"
                    id="wd-file-upload"
                    className="mt-0"
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="wd-file-upload">File Uploads</Form.Label>
                </Col>
              </Row>
              <Row className="mb-3 align-items-center">
                <Col sm={1}>
                  <Form.Check
                    type="checkbox"
                    name="check-online-entry"
                    id="wd-file-upload"
                    className="mt-0"
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="wd-file-upload">Website URL</Form.Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card className="p-3 mt-3" style={{ width: "60%" }}>
          <Form.Label className="fw-bold">Assign to</Form.Label>
          <Form.Control defaultValue={`Everyone`} id="wd-assign-to" />
          <br />
          <Form.Label htmlFor="wd-due-date">Due</Form.Label>
          <Form.Control type="date" name="date-select" id="wd-due-date" />
          <br />
          <Row className="mb-3 align-items-center">
            <Col sm={6}>
              <Form.Label htmlFor="wd-available-from">
                Available from
              </Form.Label>
              <Form.Control type="datetime-local" id="wd-available-from" defaultValue="2025-10-01T08:00"/>
            </Col>
            <Col sm={6}>
              <Form.Label htmlFor="wd-available-until">Until</Form.Label>
              <Form.Control type="datetime-local" id="wd-available-until" defaultValue="2025-10-01T18:00" />
            </Col>
          </Row>
        </Card>
        <hr />
        <button className = "btn btn-secondary border-1 me-2">Cancel</button>
        <button className = "btn btn-danger border-1">Save</button>
      </Form>
    </div>
  );
}
