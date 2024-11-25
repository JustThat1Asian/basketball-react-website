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
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{nickName}</td>
      <td>{teamCode}</td>
    </tr>
  );
};

export default TeamsBlock;
