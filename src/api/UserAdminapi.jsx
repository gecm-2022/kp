import React, { useEffect, useState } from "react";
import { useAuth } from "../context/contextapi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UserAdminapi = () => {
  const { userAdminpanel } = useAuth();
  useEffect(() => {
    userAdminpanel();
  }, []);
  const { fetchUser } = useAuth();

  return (
    <>
      {fetchUser.map((e, i) => {
        return (
          <tr className="border  " key={i}>
            <td className="tbd">{i + 1}</td>
            <td className="tbd">{e.name}</td>
            <td className="tbd">{e.email}</td>
            <td className="tbd">
              <div className="flex mx-5 gap-5">
                <button className="px-2">
                  <FaEdit />
                </button>
                <button className="px-2">
                  <MdDelete />
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserAdminapi;
