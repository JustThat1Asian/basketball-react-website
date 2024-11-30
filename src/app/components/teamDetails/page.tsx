import React from "react";
import FetchApiJson from "../../../../public/utils/api/FetApiContents";
import UrlBuilder from "../../../../public/utils/api/UrlBuilder";
import { NBA_PLAYERS_ON_TEAM } from "../../../../public/utils/constants";

interface TeamProp {
  teamId: number;
  teamName: string;
}

const urlBuilder = new UrlBuilder(NBA_PLAYERS_ON_TEAM);

const TeamDetails = async ({ teamName, teamId }: TeamProp) => {
  urlBuilder.addParam("team", teamId);
  let data = await FetchApiJson({ api: urlBuilder.build() });
  console.log(data);
  return (
    <>
      <h1>{teamName} Page</h1>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Age</th>
            <th>Height</th>
            <th>Averages</th>
            <th>Position</th>
            <th>College</th>
            <th>Draft Pick</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default TeamDetails;
