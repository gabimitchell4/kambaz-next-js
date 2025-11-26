/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const pathname = usePathname();
  console.log("CURRENT USER IN NAVIGATION: ", currentUser);
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
      {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
        <NavLink
          className="list-group-item"
          as={Link}
          href={`/Account/Users`}
          active={pathname.endsWith("Users")}
        >
          {" "}
          Users{" "}
        </NavLink>
      )}
      <br />
    </div>
  );
}
