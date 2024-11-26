import Team from "@/app/models/Team";
import TeamsBlock from "./TeamsBlock";
import TeamsAPIResposneModel from "@/app/models/TeamsAPIResposneModel";

const BasketBallInfo = (data: TeamsAPIResposneModel) => {
  return (
    <>
      <h1>Current Teams</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Team Name</th>
            <th>Team Nickname</th>
            <th>Team Code</th>
          </tr>
        </thead>
        <tbody key="tableOfContentBody"></tbody>
        {data.getTeams().map((team: Team) => {
          return (
            <TeamsBlock
              name={team.getFullName()}
              id={team.getTeamId()}
              teamCode={team.getShortName()}
              nickName={team.getNickName()}
            />
          );
        })}
      </table>
    </>
  );
};

export default BasketBallInfo;
