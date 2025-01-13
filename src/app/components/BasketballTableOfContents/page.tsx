import Team from "@/app/models/Team";
import TeamsBlock from "./TeamsBlock";
import TeamsModel from "@/app/models/TeamsModel";

interface BaksetBallInfoProps {
  data: TeamsModel;
}

const BasketBallInfo = ({ data }: BaksetBallInfoProps) => {
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
        <tbody key="tableOfContentBody">
          {data.getTeams().map((team: Team) => {
            return <TeamsBlock key={team.getTeamId()} team={team} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default BasketBallInfo;
