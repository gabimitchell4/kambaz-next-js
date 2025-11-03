/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentDesc from "./AssignmentDesc";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import InputGroup from "react-bootstrap/InputGroup";
import InputGroupText from "react-bootstrap/InputGroupText";
import { Form, Modal, Button } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import * as db from "../../../Database";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<{
    _id: string;
  } | null>(null);

  const handleDeleteClick = (assignment: any) => {
    setSelectedAssignment(assignment);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedAssignment) {
      dispatch(deleteAssignment(selectedAssignment._id));
      setShowDeleteModal(false);
      setSelectedAssignment(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedAssignment(null);
  };

  return (
    <div id="wd-assignments">
      <div className="wd-assignment-top d-flex justify-content-between">
        <InputGroup className="w-25">
          <InputGroupText>
            <FaMagnifyingGlass />
          </InputGroupText>
          <Form.Control placeholder="Search..." id="wd-search-assignment" />
        </InputGroup>
        <div className="buttons">
          <button className="btn btn-outline-secondary bg-secondary rounded-1 me-1">
            <FaPlus /> Group
          </button>
          {currentUser.role === "FACULTY" && (
            <Link href={`/Courses/${[cid]}/Assignments/${uuidv4()}`}>
              <button className="btn btn-danger rounded-1">
                <FaPlus /> Assignment
              </button>
            </Link>
          )}
        </div>
      </div>
      <br />

      <ListGroup className="wd-assignment rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignment-left d-flex mt-3">
            <BsGripVertical className="ms-3 me-3 fs-3" />
            <IoIosArrowDown className="me-3 fs-3" />
            <span className="d-flex align-items-center"> ASSIGNMENTS</span>
            <div className="ms-auto d-flex align-items-flex-end me-3">
              <AssignmentControlButtons percent={40} />
            </div>
          </div>
          <br />
          <ListGroup className="wd-assignment rounded-0 w-100">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ListGroup.Item
                  key={assignment._id}
                  className="wd-assignment p-3 mb-3 border rounded d-flex align-items-center w-100"
                >
                  <div className="flex-grow-1">
                    <AssignmentDesc
                      assignment={assignment}
                      moduleType="Multiple Modules"
                      releaseDate={assignment.releaseDateTime}
                      dueDate={assignment.dueDateTime}
                      points={assignment.points || 100}
                    />
                  </div>
                  <button
                    className="btn btn-danger border-0 rounded-circle p-2 ms-3"
                    onClick={() => handleDeleteClick(assignment)}
                    title="Delete Assignment"
                  >
                    <FaTrash className="fs-5" />
                  </button>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
        <Modal show={showDeleteModal} onHide={cancelDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this assignment?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelDelete}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </ListGroup>

      {/* Delete Confirmation Modal */}
    </div>
  );
}
