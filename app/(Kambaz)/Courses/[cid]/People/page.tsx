/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./Table";
import * as courseClient from "../../client";

export default function PeoplePage() {
  const { cid } = useParams() as { cid: string };
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const data = await courseClient.findUsersForCourse(cid as string);
      setUsers(data || []);
    } catch (e) {
      console.error("Failed to fetch users for course", cid, e);
      setUsers([]);
    }
  };

  useEffect(() => {
    if (cid) fetchUsers();
  }, [cid]);

  return (
    <div id="wd-people-page">
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
