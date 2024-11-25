"use server;";
import React from "react";
import Image from "next/image";

interface TeamsBlockProp {
  name: string;
  id: number;
  teamCode: string;
  nickName: string;
}

const TeamsBlock = ({ name, id, teamCode, nickName }: TeamsBlockProp) => {
  return (
    <tr
      key={id}
      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
    >
      <td className="px-6 py-4">{id}</td>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{nickName}</td>
      <td className="px-6 py-4">{teamCode}</td>
    </tr>
  );
};

export default TeamsBlock;
