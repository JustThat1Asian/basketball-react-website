"use client";
import { useEffect, useState } from "react";
import UrlBuilder from "../../public/utils/api/UrlBuilder";
import ObjectMapper from "../../public/utils/Mapper/ObjectMapper";
import ObjectMapperFactory from "../../public/utils/Mapper/ObjectMapperFactory";
import FetchApiJson from "../../public/utils/api/FetApiContents";
import { NBA_TEAMS, NBA_PLAYERS } from "../../public/utils/constants";
import TeamsModel from "./models/TeamsModel";
import Model from "./models/Model";
import BasketBallInfo from "./components/BasketballTableOfContents/page";

export function getObjectMapper(modelClassName: string): ObjectMapper {
  try {
    return ObjectMapperFactory.buildFactory(modelClassName);
  } catch (e) {
    throw e;
  }
}

export default function Home() {
  const [triggerUseEffect, activateTrigger] = useState(false);
  const [teamsInfoObj, setTeamsInfoObj] = useState<Model | null>(null);

  useEffect(() => {
    const urlBuilder = UrlBuilder.getUrlBuilder();
    urlBuilder.setUrl(NBA_PLAYERS).addParam("team", 1).addParam("season", 2024);

    try {
      const objectMapper: ObjectMapper = getObjectMapper(TeamsModel.name);
      FetchApiJson({ api: urlBuilder.build() }).then((result: Response) => {
        console.log(result);
        setTeamsInfoObj(objectMapper.map(result));
      });
    } catch (e) {
      console.error("An Error has occurred: ", e);
    }
  }, []);

  return (
    <>
      <div className="mx-auto mt-6">
        <div className="rounded overflow-hidden shadow-lg p-4 bg-black">
          <div className="font-bold text-xl mb-2 text-center">
            Teams Information Card
          </div>
          <div className="w-full h-auto max-h-[400px] overflow-y-auto border border-gray-300 rounded-lg p-4">
            {teamsInfoObj && teamsInfoObj instanceof TeamsModel ? (
              <BasketBallInfo data={teamsInfoObj} />
            ) : (
              <p className="text-center text-gray-500">Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
