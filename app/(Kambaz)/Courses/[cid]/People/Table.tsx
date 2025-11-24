/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Row, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { User } from "../../../Database";
import { Enrollment } from "../../../Database";
import PeopleDetails from "./Details";
import Link from "next/link";
import { useState } from "react";

export default function PeopleTable({
  users = [],
  fetchUsers,
}: {
  users?: any[];
  fetchUsers: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  return (
    <div id="wd-people-table">
      {showDetails && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            fetchUsers();
          }}
        />
      )}

      <Row className="fw-bold border-bottom pb-2 mb-3">
        <Col>Name</Col>
        <Col>Login ID</Col>
        <Col>Section</Col>
        <Col>Role</Col>
        <Col>Last Activity</Col>
        <Col>Total Activity</Col>
      </Row>
      {users.map((person: User) => (
        <Row key={person._id} className="align-items-center border-bottom py-2">
          <Col className="text-nowrap">
            <span
              className="d-inline-flex align-items-center text-decoration-none"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowDetails(true);
                setShowUserId(person._id);
              }}
            >
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span>
                {person.firstName} {person.lastName}
              </span>
            </span>
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
