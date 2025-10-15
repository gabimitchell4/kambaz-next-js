"use client";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function AssignmentEditor() {
  const { aid } = useParams<{ aid: string; cid: string }>();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid
  );

  return (
    <div id="wd-assignments-editor">
      {assignment ? (
        <Form>
          <Form.Label htmlFor="wd-name p-1">Assignment Name</Form.Label>
          <br />
          <Form.Control
            style={{ width: "60%" }}
            className="p-2"
            id="wd-name"
            defaultValue={assignment.title}
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
            <p>{assignment.description}</p>
          </div>
          <br />
          <Row className="mt-3">
            <Col sm={2} className="d-flex align-items-center">
              <Form.Label htmlFor="wd-points" className="text-end">
                Points
              </Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Control id="wd-points" defaultValue={assignment.points} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={2}>
              <Form.Label htmlFor="wd-group" className="text-end">
                Assignment Group
              </Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Select
                id="wd-group"
                defaultValue={assignment.assignmentGroup}
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={2}>
              <Form.Label htmlFor="wd-display-grade-as" className="text-end">
                Display Grade as
              </Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Select
                id="wd-display-grade-as"
                defaultValue={assignment.displayType}
              >
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
                <Form.Select
                  id="wd-submission-type"
                  defaultValue={assignment.submissionType}
                >
                  <option value="Online">Online</option>
                  <option value="In-person">In-person</option>
                </Form.Select>
              </Col>
            </Row>
          </Card>
          <Card className="p-3 mt-3" style={{ width: "60%" }}>
            <Form.Label className="fw-bold">Assign to</Form.Label>
            <Form.Control
              defaultValue={assignment.assignTo}
              id="wd-assign-to"
            />
            <br />
            <Form.Label htmlFor="wd-due-date">Due</Form.Label>
            <Form.Control
              type="datetime-local"
              id="wd-due-date"
              defaultValue={
                assignment.dueDateTime
                  ? new Date(assignment.dueDateTime).toISOString().slice(0, 16)
                  : ""
              }
            />
            <br />
            <Row className="mb-3 align-items-center">
              <Col sm={6}>
                <Form.Label htmlFor="wd-available-from">
                  Available from
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="wd-available-from"
                  defaultValue={
                    assignment.releaseDateTime
                      ? new Date(assignment.releaseDateTime)
                          .toISOString()
                          .slice(0, 16)
                      : ""
                  }
                />
              </Col>
              <Col sm={6}>
                <Form.Label htmlFor="wd-available-until">
                  Available until
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="wd-available-until"
                  defaultValue={
                    assignment.dueDateTime
                      ? new Date(assignment.dueDateTime)
                          .toISOString()
                          .slice(0, 16)
                      : ""
                  }
                />
              </Col>
            </Row>
          </Card>
          <hr />
          <button className="btn btn-secondary border-1 me-2">Cancel</button>
          <button className="btn btn-danger border-1">Save</button>
        </Form>
      ) : (
        <p className="text-center text-danger">
          No assignment found with ID {aid}.
        </p>
      )}
    </div>
  );
}
