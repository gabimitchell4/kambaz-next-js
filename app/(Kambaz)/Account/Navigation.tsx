import Link from "next/link";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className=" me-4">
      <Link className="list-group-item active" href="Signin">
        Signin
      </Link>
      <br />
      <Link href="Signup" className="list-group-item text-danger">
        Signup
      </Link>
      <br />
      <Link href="Profile" className="list-group-item text-danger">
        Profile
      </Link>
      <br />
    </div>
  );
}
