import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

export const createAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.post(ASSIGNMENTS_API, assignment);
  return data;
};

export const findAllAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  console.log("findAllAssignmentsForCourse response:", data);
  return data;
};

export const findAssignmentById = async (assignmentId: string) => {
  const { data } = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axios.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return data;
};

export const updateAssignment = async (
  assignmentId: string,
  assignment: any
) => {
    console.log("Updating assignment:", assignmentId, assignment);
  const { data } = await axios.put(
    `${ASSIGNMENTS_API}/${assignmentId}`,
    assignment
  );
  return data;
};

export const fetchCurrentUser = async () => {
  const { data } = await axios.get(`${HTTP_SERVER}/api/current-user`);
  return data;
}
