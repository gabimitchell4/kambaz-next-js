/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useRouter } from "next/navigation";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Assignment } from "../../../Database";
import { useSelector } from "react-redux";

interface AssignmentTextProps {
  assignment: Assignment;
  moduleType: string;
  releaseDate: string;
  dueDate: string;
  points: number;
}

export default function AssignmentDesc({
  assignment,
  moduleType,
  releaseDate,
  dueDate,
  points,
}: AssignmentTextProps) {
  const router = useRouter();
  const { cid } = useParams() as { cid: string };
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const formatDateTime = (dateString: string) => {
    if (!dateString) return "TBD";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "TBD";

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  // Defaults taken from the UI screenshot: Available from 05/02/2025 12:00 AM, Available until 05/10/2025 11:59 PM
  const DEFAULT_AVAILABLE_FROM = "2025-05-02T00:00:00";
  const DEFAULT_AVAILABLE_UNTIL = "2025-05-10T23:59:00";

  const handleClick = () => {
    if (currentUser.role === "FACULTY") {
      router.push(`/Courses/${[cid]}/Assignments/${assignment._id}`);
    }
  };

  return (
    <div
      className="wd-assignment d-flex align-items-center"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="wd-assignment d-flex align-items-center w-100">
        <ListGroup.Item className="wd-lesson d-flex w-100 align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-3 fs-3" />
            {currentUser.role === "FACULTY" && (
              <HiOutlinePencilAlt className="me-3" />
            )}
          </div>

          <div className="d-flex flex-column">
            <span>{assignment.title}</span>
            <span className="me-3">
              {moduleType} | <strong>Available from </strong>
              {formatDateTime(releaseDate || DEFAULT_AVAILABLE_FROM)} | <br />
              <strong>Available until </strong>
              {formatDateTime(dueDate || DEFAULT_AVAILABLE_UNTIL)} | {points}{" "}
              pts
            </span>
          </div>

          <div className="ms-auto">
            <LessonControlButtons />
          </div>
        </ListGroup.Item>
      </div>
    </div>
  );
}
