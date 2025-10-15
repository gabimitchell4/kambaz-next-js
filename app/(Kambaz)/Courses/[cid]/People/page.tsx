"use client";
import { Row, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};

type Enrollment = {
  user: string;
  course: string;
};

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;
  return (
    <div id="wd-people-table">
      <Row className="fw-bold border-bottom pb-2 mb-3">
        <Col>Name</Col>
        <Col>Login ID</Col>
        <Col>Section</Col>
        <Col>Role</Col>
        <Col>Last Activity</Col>
        <Col>Total Activity</Col>
      </Row>
      {users
        .filter((usr: User) =>
          enrollments.some(
            (enrollment: Enrollment) =>
              enrollment.user === usr._id && enrollment.course === cid
          )
        )
        .map((person: User) => (
          <Row
            key={person._id}
            className="align-items-center border-bottom py-2"
          >
            <Col className="text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span>{person.firstName}</span> <span>{person.lastName}</span>
            </Col>
            <Col>{person.loginId}</Col>
            <Col>{person.section}</Col>
            <Col>{person.role}</Col>
            <Col>{person.lastActivity}</Col>
            <Col>{person.totalActivity}</Col>
          </Row>
        ))}
    </div>
  );
}
