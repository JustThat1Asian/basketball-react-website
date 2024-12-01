"use server;";
import Team from "@/app/models/Team";
import React from "react";

interface TeamsBlockProp {
  team: Team;
}

const TeamsBlock = ({ team }: TeamsBlockProp) => {
  return (
    <tr key={team.getTeamId()}>
      <td>{team.getTeamId()}</td>
      <td>{team.getFullName()}</td>
      <td>{team.getNickName()}</td>
      <td>{team.getCode()}</td>
    </tr>
  );
};

export default TeamsBlock;
