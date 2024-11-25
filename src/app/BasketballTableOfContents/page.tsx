import React from "react";
import "../../../public/utils/constants";
import { NBA_TEAMS } from "../../../public/utils/constants";
import TeamsBlock from "./TeamsBlock";
import FetchApiJson from "../Utils/FetApiContents";
import UrlBuilder from "../Utils/UrlBuilder";

const urlBuilder = new UrlBuilder(NBA_TEAMS);

const Page = async () => {
  let data = await FetchApiJson({ api: urlBuilder.build() });

  return (
    <>
      <h1>Current Teams</h1>
      <table>
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Team Name
            </th>
            <th scope="col" className="px-6 py-3">
              Team Nickname
            </th>
            <th scope="col" className="px-6 py-3">
              Team Code
            </th>
          </tr>
        </thead>
        <tbody key="tableOfContentBody">
          {data["response"].map((team: any) => (
            <TeamsBlock
              id={team.id}
              name={team.name}
              teamCode={team.code}
              nickName={team.nickname}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Page;
