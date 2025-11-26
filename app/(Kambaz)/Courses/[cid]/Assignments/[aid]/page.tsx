/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import * as db from "../../../../Database";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, updateAssignment } from "../reducer";
import { useState } from "react";
import * as assignmentsClient from "../client";

export default function AssignmentEditor() {
  const { aid, cid } = useParams<{ aid: string; cid: string }>();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (assignment?.isNew) {
    //   // delete assignment.isNew;
    //   await <assignmentsClient>.createAssignment(assignment);
    // } else {
    await assignmentsClient.updateAssignment(assignment._id, assignment);
    // }
    dispatch(updateAssignment(assignment));
    router.push(`/Courses/${cid}/Assignments`);
  };

  const [assignment, setAssignment] = useState<db.Assignment>(
    assignments.find((assignment: any) => assignment._id === aid) ?? {
      _id: aid ?? "",
      title: "New Assignment",
      course: cid ?? "",
      moduleType: "Multiple Modules",
      releaseDateTime: "2025-05-02T00:00",
      dueDateTime: "2025-05-10T23:59",
      points: 100,
      description: "",
      status: "Published",
      assignTo: "Everyone",
      assignmentGroup: "ASSIGNMENTS",
      displayType: "Percentage",
      submissionType: "Online",
    }
  );
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    console.log("CHANGE", e.target.id, e.target.value);
    const { id, value } = e.target;
    setAssignment((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div id="wd-assignments-editor">
      {assignment ? (
        <Form>
          <Form.Label htmlFor="title p-1">Assignment Name</Form.Label>
          <br />
          <Form.Control
            style={{ width: "60%" }}
            className="p-2"
            id="title"
            value={assignment.title}
            onChange={handleChange}
          />
          <br />
          <div
            id="description"
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
              <Form.Label htmlFor="points" className="text-end">
                Points
              </Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Control
                id="points"
                value={assignment.points}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={2}>
              <Form.Label htmlFor="assignmentGroup" className="text-end">
                Assignment Group
              </Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Select
                id="assignmentGroup"
                value={assignment.assignmentGroup}
                onChange={handleChange}
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
              <Form.Label htmlFor="displayType" className="text-end">
                Display Grade as
              </Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Select
                id="displayType"
                value={assignment.displayType}
                onChange={handleChange}
              >
                <option value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
              </Form.Select>
            </Col>
          </Row>
          <Card className="p-3 mt-3" style={{ width: "60%" }}>
            <Row className="mt-3">
              <Col className="d-flex">
                <Form.Label htmlFor="submissionType">
                  Submission Type
                </Form.Label>
              </Col>
              <Col>
                <Form.Select
                  id="submissionType"
                  value={assignment.submissionType}
                  onChange={handleChange}
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
              value={assignment.assignTo}
              id="assignTo"
              onChange={handleChange}
            />
            <br />
            <Form.Label htmlFor="dueDateTime">Due</Form.Label>
            <Form.Control
              type="datetime-local"
              id="dueDateTime"
              value={
                assignment.dueDateTime
                  ? assignment.dueDateTime.slice(0, 16)
                  : ""
              }
              onChange={handleChange}
            />
            <br />
            <Row className="mb-3 align-items-center">
              <Col sm={6}>
                <Form.Label htmlFor="releaseDateTime">
                  Available from
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="releaseDateTime"
                  value={
                    assignment.releaseDateTime
                      ? assignment.releaseDateTime.slice(0, 16)
                      : ""
                  }
                  onChange={handleChange}
                />
              </Col>
              <Col sm={6}>
                <Form.Label htmlFor="wd-available-until">
                  Available until
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="wd-available-until"
                  value={
                    assignment.dueDateTime
                      ? assignment.dueDateTime.slice(0, 16)
                      : ""
                  }
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Card>
          <hr />
          <button
            className="btn btn-secondary border-1 me-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="btn btn-danger border-1" onClick={handleSave}>
            Save
          </button>
        </Form>
      ) : (
        <p className="text-center text-danger">
          No assignment found with ID {aid}.
        </p>
      )}
    </div>
  );
}
