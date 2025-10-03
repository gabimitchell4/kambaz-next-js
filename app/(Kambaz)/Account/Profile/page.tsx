import Link from "next/link";
import { Form } from "react-bootstrap"
import FormSelect from "react-bootstrap/FormSelect";
import FormGroup from "react-bootstrap/FormGroup";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form style = {{width: "50%"}} className="d-flex flex-column gap-2">
        <Form.Control
          defaultValue="alice"
          placeholder="username"
          className="wd-username"
        />
        <Form.Control
          defaultValue="123"
          placeholder="password"
          type="password"
          className="wd-password"
        />
        <Form.Control
          defaultValue="Alice"
          placeholder="First Name"
          id="wd-firstname"
        />
        <Form.Control
          defaultValue="Wonderland"
          placeholder="Last Name"
          id="wd-lastname"
        />

        <Form.Control defaultValue="2000-01-01" type="date" id="wd-dob" />
        <Form.Control
          defaultValue="alice@wonderland"
          type="email"
          id="wd-email"
        />
        <FormSelect defaultValue="FACULTY" id="wd-role">
          <option value="USER">User</option>{" "}
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>{" "}
          <option value="STUDENT">Student</option>
        </FormSelect>
        <Link href="/Account/Signin">
          <button style = {{width: "100%"}} className="btn btn-danger rounded-1">Sign out</button>
        </Link>
      </Form>
    </div>
  );
}
